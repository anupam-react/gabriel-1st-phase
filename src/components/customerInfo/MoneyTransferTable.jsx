import React, { useEffect, useState } from "react";
import { DialogDefault } from "../common/DilogBox";
import TransactionDetails from "./TransactionDetails";
import ProductDetails from "./ProductDetails";
import { fetchApiData, formatDate, formatDate2, formatTime2, getDateFromISOString } from "../../utiils";

const MoneyTransferTable = ({data}) => {
  const [openTransaction, setOpenTransaction] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);

  const [dataInfo, setDataInfo] = useState();

  const getAllCustomerPointEarnedFromMoneyTransferRewards = async () => {
    const response = await fetchApiData(
      `https://money-chat.com/api/api/v1/brandLoyalty/getAllCustomerPointEarnedFromMoneyTransferRewards/ByUserId/${data?._id}`
    );
    console.log(response);
    setDataInfo(response?.data);
  };

  useEffect(() => {
    getAllCustomerPointEarnedFromMoneyTransferRewards();
  }, []);

  return (
    <div>
      <table className="table2">
        <thead>
          <tr>
            <th>Reward Amount</th>
            <th>Points Earned</th>
            <th>Reward Conversion Date</th>
            <th>Product(s) Claimed</th>
          </tr>
        </thead>
        <tbody>
          {dataInfo?.map((d, i)=>(
          <tr key={i}>
            <td>
              <p>£{d?.transactionId?.amount}</p>
            </td>
            <td>
              <div>{d?.points}</div>
            </td>
            <td>{getDateFromISOString(d?.date)}</td>
            <td>
              <div className="table-flex">
                <img src={d?.transactionId?.productId?.image} alt="" className="cursor-pointer" style={{ width: "100px" }} onClick={() => setOpenDetails(d?.transactionId?.productId)}/>
                <p className="cursor-pointer" onClick={() => setOpenTransaction(d?.transactionId)}>
                  <span
                    style={{ color: "#3BB54A", textDecoration: "underline" }}
                  >
                    Claimed
                  </span>{" "}
                  <br />
                  {d?.transactionId?.productId?.name} {getDateFromISOString(d?.userRewardsId?.claimDate)},{formatTime2(d?.userRewardsId?.claimDate)}{" "}
                  <span
                    className="id-link"
                    
                  >
                    {" "}
                    See transaction
                  </span>
                </p>
              </div>
            </td>
          </tr>

          ))}
        
        </tbody>
      </table>
      <DialogDefault open={openTransaction} handleOpen={setOpenTransaction}>
        <TransactionDetails handleOpen={setOpenTransaction} allData={openTransaction} userData={openTransaction?.user} brandData={openTransaction?.brandId} data={openTransaction?.orderId}/>
      </DialogDefault>
      <DialogDefault open={openDetails} handleOpen={setOpenDetails}>
        <ProductDetails handleOpen={setOpenDetails} data={openDetails}/>
      </DialogDefault>
    </div>
  );
};

export default MoneyTransferTable;
