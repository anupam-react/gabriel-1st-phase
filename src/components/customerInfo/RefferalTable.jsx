import React, { useEffect, useState } from "react";
import { DialogDefault } from "../common/DilogBox";
import TransactionDetails from "./TransactionDetails";
import Referal from "./Referal";
import { fetchApiData, formatTime2, getDateFromISOString } from "../../utiils";

const RefferalTable = ({data}) => {
  const [openAward, setOpenAward] = useState(false);
  const [openTransaction, setOpenTransaction] = useState(false);

  const [dataInfo, setDataInfo] = useState();

  const getAllPointEarnedFromReferral = async () => {
    const response = await fetchApiData(
      `https://money-chat.com/api/api/v1/brandLoyalty/getAllPointEarnedFromReferral/ByUserId/${data?._id}`
    );
    console.log(response);
    setDataInfo(response?.data);
  };

  useEffect(() => {
    getAllPointEarnedFromReferral();
  }, []);

  return (
    <div>
      <table className="table2">
        <thead>
          <tr>
            <th>Referee</th>
            <th>Referral ID</th>
            <th>Transaction Made</th>
            <th>Referral Points Earned</th>
          </tr>
        </thead>
        <tbody>
          {dataInfo?.map((data, i)=>(
          <tr key={i}>
            <td>
              <div className="flex justify-center">
                <img src={data?.user?.image || "./carbon_user-avatar-filled (2).png"} alt="" className="w-[40px] h-[40px] rounded-full"/>
              </div>
              <p>ID : {data?.user?.Id}</p>
            </td>
            <td>
              <div>{data?.user?.Id}</div>
            </td>
            <td>
              <div>
              {getDateFromISOString(data?.transactionId?.date)},{formatTime2(data?.transactionId?.date)} Transaction{" "}
                <span
                  className="id-link"
                  onClick={() => setOpenTransaction(data)}
                >
                  {" "}
                  ID: {data?.transactionId?.Id}
                </span>{" "}
              </div>
            </td>
            <td>
              <p>{data?.points}</p>
              <button
                className="menuButton4"
                onClick={() => setOpenAward(true)}
              >
                Send Referal Reward
              </button>
             
            </td>
          </tr>

          ))}
        </tbody>
      </table>
      <DialogDefault open={openAward} handleOpen={setOpenAward}>
                <Referal handleOpen={setOpenAward} onClose={()=>setOpenAward(false)} id={data?._id}/>
              </DialogDefault>
              <DialogDefault
                open={openTransaction}
                handleOpen={setOpenTransaction}
              >
                <TransactionDetails handleOpen={setOpenTransaction} allData={openTransaction}  userData={openTransaction?.user} brandData={openTransaction?.brandId} data={openTransaction?.orderId}/>
              </DialogDefault>
    </div>
  );
};

export default RefferalTable;
