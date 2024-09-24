import React, { useEffect, useState } from "react";
import { DialogDefault } from "../common/DilogBox";
import TransactionDetails from "./TransactionDetails";
import { fetchApiData, formatTime2, getDateFromISOString } from "../../utiils";

const RedemptionHistoryTable = ({data}) => {
  const [openTransaction, setOpenTransaction] = useState(false);

  const [dataInfo, setDataInfo] = useState();

  const getAllCustomerPointVoluntaryRedemptionHistory = async () => {
    const response = await fetchApiData(
      `https://money-chat.com/api/api/v1/brandLoyalty/getAllCustomerPointVoluntaryRedemptionHistory/ByUserId/${data?._id}`
    );
    console.log(response);
    setDataInfo(response?.data);
  };

  useEffect(() => {
    getAllCustomerPointVoluntaryRedemptionHistory();
  }, []);
  return (
    <div>
      <table className="table2">
        <thead>
          <tr>
            <th>Redeem Date</th>
            <th>Product(s) Claimed</th>
            <th>Reward Vouchers</th>
            <th>Voucher ID</th>
            <th>Outlet Location</th>
          </tr>
        </thead>
        <tbody>
          {dataInfo?.map((data, i)=>(
          <tr key={i}>
            <td>{getDateFromISOString(data?.date)}</td>
            <td>
              <div className="table-flex">
                <img src={data?.productId?.image} alt="" className="rounded-md" style={{ width: "80px" }} />
                <p>
                {data?.productId?.name} {getDateFromISOString(data?.transactionId?.date)}, {formatTime2(data?.transactionId?.date)}
                  <span
                    className="id-link"
                    onClick={() => setOpenTransaction(data)}
                  >
                    {" "}
                    See transaction
                  </span>
                </p>
              </div>
            </td>
            <td>01</td>
            <td>{data?.Id}</td>
            <td>{data?.purchaseBy === "App" ? "N/A" : data?.outletId?.firstLineAddress + " , " + data?.outletId?.secondLineAddress + " , " + data?.outletId?.city }</td>
          </tr>

          ))}
         
        </tbody>
      </table>
      <DialogDefault open={openTransaction} handleOpen={setOpenTransaction}>
        <TransactionDetails handleOpen={setOpenTransaction} allData={openTransaction}  userData={openTransaction?.user} brandData={openTransaction?.brandId} data={openTransaction?.orderId}/>
      </DialogDefault>
    </div>
  );
};

export default RedemptionHistoryTable;
