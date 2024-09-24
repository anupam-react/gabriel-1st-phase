import React, { useEffect, useState } from "react";
import "./index.scss";
import { DialogDefault } from "../common/DilogBox";
import PromotionDetails from "./PromotionDetails";
import TransactionDetails from "./TransactionDetails";
import { fetchApiData, formatTime2, getDateFromISOString } from "../../utiils";
const PromotionsTable = ({data}) => {
  const [openPromtion1, setOpenPromtion1] = useState(false);
  const [openTransaction, setOpenTransaction] = useState(false);

  const [dataInfo, setDataInfo] = useState();

  const getAllCustomerTargetCustomizedPromotionPoints = async () => {
    const response = await fetchApiData(
      `https://money-chat.com/api/api/v1/brandLoyalty/getAllCustomerTargetCustomizedPromotionPoints/ByUserId/${data?._id}`
    );
    console.log(response);
    setDataInfo(response?.data);
  };

  useEffect(() => {
    getAllCustomerTargetCustomizedPromotionPoints();
  }, []);

  return (
    <div>
      <table className="table2">
        <thead>
          <tr>
            <th>Promotion Date</th>
            <th>Promotion Type and Value ID</th>
            <th>Promotion Issued</th>
            <th>Transaction Made</th>
            <th>Points Earned</th>
          </tr>
        </thead>
        <tbody>
          {dataInfo?.map((data, i)=>(
          <tr key={i}>
            <td>
              <p>{getDateFromISOString(data?.marketingCampaignId?.createdAt)}</p>
            </td>
            <td>
              <div>{data?.marketingCampaignId?.typeOfCampaign} ,{data?.marketingCampaignId?.discountValue}% </div>
            </td>
            <td className="flex justify-center items-center">
              <img
                src={data?.marketingCampaignId?.couponImage}
                alt=""
                className="cursor-pointer w-[200px] h-[120px] rounded-lg"
                onClick={() => setOpenPromtion1(data)}
              />
            </td>
            <td>
            {getDateFromISOString(data?.transactionId?.date)}, {formatTime2(data?.transactionId?.date)}, Transaction
              <span
                className="id-link"
                onClick={() => setOpenTransaction(data)}
              >
                {" "}
                ID: {data?.transactionId?.Id}
              </span>
            </td>
            <td>{data?.points} pts</td>
          </tr>

          ))}
          
        </tbody>
      </table>
      <DialogDefault open={openPromtion1} handleOpen={setOpenPromtion1}>
        <PromotionDetails
          image={openPromtion1?.marketingCampaignId?.couponImage}
          type={openPromtion1?.marketingCampaignId?.typeOfCampaign}
          name={openPromtion1?.productId?.name}
          date={openPromtion1?.marketingCampaignId?.createdAt}
          expiry={openPromtion1?.marketingCampaignId?.expireDate}
          handleOpen={setOpenPromtion1}
        />
      </DialogDefault>
    
      <DialogDefault open={openTransaction} handleOpen={setOpenTransaction}>
        <TransactionDetails handleOpen={setOpenTransaction} allData={openTransaction} userData={openTransaction?.user} brandData={openTransaction?.brandId} data={openTransaction?.orderId}/>
      </DialogDefault>
    </div>
  );
};

export default PromotionsTable;
