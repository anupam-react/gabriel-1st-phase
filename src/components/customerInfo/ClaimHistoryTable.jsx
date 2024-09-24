import React, { useEffect, useState } from "react";
import { DialogDefault } from "../common/DilogBox";
import TransactionDetails from "./TransactionDetails";
import { fetchApiData, formatTime2, getDateFromISOString } from "../../utiils";

const ClaimHistoryTable = ({ data }) => {
  const [openTransaction, setOpenTransaction] = useState(false);

  const [dataInfo, setDataInfo] = useState();

  const getAllPointClaimHistory = async () => {
    const response = await fetchApiData(
      `https://money-chat.com/api/api/v1/brandLoyalty/getAllPointClaimHistory/ByUserId/${data?._id}`
    );
    console.log(response);
    setDataInfo(response?.data);
  };

  useEffect(() => {
    getAllPointClaimHistory();
  }, []);
  return (
    <div>
      <table className="table2">
        <thead>
          <tr>
            <th>Points Claimed</th>
            <th>Claim Date</th>
            <th>Product(s) Claimed</th>
            <th>Reward Vouchers</th>
            <th>Voucher ID</th>
          </tr>
        </thead>
        <tbody>
          {dataInfo?.map((data, i) => (
            <tr key={i}>
              <td>
                <p>{data?.userSpendMyPointId?.noOfPoint || 0} Pts</p>
              </td>
              <td>{getDateFromISOString(data?.createdAt)}</td>
              <td>
                <div className="table-flex">
                  <img
                    src={data?.productId?.image}
                    alt=""
                    className="rounded-md"
                    style={{ width: "80px" }}
                  />
                  <p>
                    {data?.productId?.name}{" "}
                    {getDateFromISOString(data?.transactionId?.date)},{" "}
                    {formatTime2(data?.transactionId?.date)},
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
            </tr>
          ))}
        </tbody>
      </table>
      <DialogDefault open={openTransaction} handleOpen={setOpenTransaction}>
        <TransactionDetails
          handleOpen={setOpenTransaction}
          userData={openTransaction?.user} allData={openTransaction} brandData={openTransaction?.brandId} data={openTransaction?.orderId}
        />
      </DialogDefault>
    </div>
  );
};

export default ClaimHistoryTable;
