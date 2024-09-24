import React, { useEffect, useState } from "react";
import "./index.scss";
import { DialogDefault } from "../common/DilogBox";
import Bouns from "./Bouns";
import AwardCustomer from "./AwardCustomer";
import TransactionDetails from "./TransactionDetails";
import { fetchApiData, formatTime2, getDateFromISOString } from "../../utiils";
const Transaction = ({ onClose, data }) => {
  const [openAward, setOpenAward] = useState(false);
  const [openPoint, setOpenPoint] = useState(false);
  const [openTransaction, setOpenTransaction] = useState(false);
  const [dataInfo, setDataInfo] = useState();

  const getAllPointEarnedFromTransaction = async () => {
    const response = await fetchApiData(
      `https://money-chat.com/api/api/v1/brandLoyalty/getAllPointEarnedFromTransaction/ByUserId/${data?._id}`
    );
    console.log(response);
    setDataInfo(response?.data);
  };

  useEffect(() => {
    getAllPointEarnedFromTransaction();
  }, []);
  return (
    <div>
      <table className="table2">
        <thead>
          <tr>
            <th>Items Bought</th>
            <th>In-Store</th>
            <th>Online</th>
            <th>Points Earned</th>
          </tr>
        </thead>
        <tbody>
          {dataInfo?.map((data, i )=>(
          <tr key={i}>
            <td>
              <div>{data?.productId?.name}</div>
            </td>
            <td>
              {data?.purchaseBy === "App"  ? "App" : 
              
              <div>
                05/12/2023, 6:00 pm Transaction
                <span
                  className="id-link"
                  onClick={() => setOpenTransaction(data)}
                >
                  {" "}
                  ID:CFA3945BFO348U
                </span>{" "}
                Café Nero, Manchester Spinning Fields, M6 3AJ
              </div>
              }
            </td>
            <td>
              <div> {data?.purchaseBy === "App"  ? 
              
              <div>
                {getDateFromISOString(data?.transactionId?.date)},{formatTime2(data?.transactionId?.date)} Transaction
                <br/>
                <span
                  className="id-link"
                  onClick={() => setOpenTransaction(data)}
                >
                  {" "}
                  ID: {data?.transactionId?.Id}
                </span>{" "}
              
              </div>
              :
              "N/A"
              }</div>
            </td>
            <td>
              <p>{data?.points}</p>
              <div className="button-container2">
                <button
                  className="menuButton4"
                  onClick={() => setOpenAward(true)}
                >
                  Award Free Bonus
                </button>
                {/* <button
                  className="menuButton4"
                  onClick={() => setOpenPoint(true)}
                >
                  Send Target Point Promotions
                </button> */}
              </div>
            </td>
          </tr>

          ))}
          {/* <tr>
            <td>
              <div>Coffee</div>
            </td>
            <td>
              <div>N/A</div>
            </td>
            <td>
              <div>
                05/12/2023, 6:00 pm Transaction{" "}
                <span
                  className="id-link"
                  onClick={() => setOpenTransaction(true)}
                >
                  {" "}
                  ID:CFA3945BFO348U
                </span>{" "}
                Café Nero, Manchester Spinning Fields, M6 3AJ
              </div>
            </td>

            <td>
              <p>300</p>
              <div className="button-container2">
                <button
                  className="menuButton4"
                  onClick={() => setOpenAward(true)}
                >
                  Award Free Bonus
                </button>
                <button
                  className="menuButton4"
                  onClick={() => setOpenPoint(true)}
                >
                  Send Target Point Promotions
                </button>
              </div>
            </td>
          </tr> */}
        </tbody>
      </table>
      <DialogDefault open={openAward} handleOpen={setOpenAward}>
        <Bouns handleOpen={setOpenAward} onClose={onClose} id={data?._id}/>
      </DialogDefault>
      <DialogDefault open={openPoint} handleOpen={setOpenPoint}>
        <AwardCustomer handleOpen={setOpenPoint} id={data?._id}/>
      </DialogDefault>
      <DialogDefault open={openTransaction} handleOpen={setOpenTransaction}>
        <TransactionDetails handleOpen={setOpenTransaction} allData={openTransaction} userData={openTransaction?.user} brandData={openTransaction?.brandId} data={openTransaction?.orderId}/>
      </DialogDefault>
    </div>
  );
};

export default Transaction;
