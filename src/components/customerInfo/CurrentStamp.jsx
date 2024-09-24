import React, { useEffect, useState } from "react";
import "./index.scss";
import { fetchApiData, formatTime2, getDateFromISOString } from "../../utiils";
import { DialogDefault } from "../common/DilogBox";
import ProductDetails from "./ProductDetails";
import ImageCard from "./ImageCard";
const CurrentStamp = ({ data }) => {
  const [dataInfo, setDataInfo] = useState();
  const [isOpenProd, setOpenProd] = useState(false);

  const getAllCurrentStampVouchers = async () => {
    const response = await fetchApiData(
      `https://money-chat.com/api/api/v1/brandLoyalty/getAllCurrentStampVouchers/ByUserId/${data?._id}`
    );
    console.log(response);
    setDataInfo(response?.data);
  };

  useEffect(() => {
    getAllCurrentStampVouchers();
  }, []);
  return (
    <div>
      <table className="table2">
        <thead>
          <tr>
            <th>Voucher</th>
            <th>Voucher ID</th>
            <th>Date Awarded</th>
            <th>Product Claimed</th>
            <th>Expiry Date</th>
          </tr>
        </thead>
        <tbody>
          {dataInfo?.map((data, i) => (
            <tr key={i}>
              <td>
                <div style={{ color: "#000000", fontWeight: 600 }}>{i + 1}</div>
              </td>
              <td>
                <div style={{ color: "#000000B2" }}>
                  {data?.Id}
                </div>
              </td>
              <td>
                <div style={{ color: "#000000B2" }}>
                  {getDateFromISOString(data?.stampSystemId?.createdAt)},
                  <br /> {formatTime2(data?.stampSystemId?.createdAt)}
                </div>
              </td>
              <td>
                <div onClick={() => setOpenProd(data?.productId)} className="cursor-pointer" style={{ display: "flex", justifyContent: "center" }}>
                  <ImageCard image={data?.productId?.image} stamps={data?.totalNoOfStamps} completeNoOfStamps={data?.completeNoOfStamps}/>
                  
            
                </div>
              </td>
              <td>
                <div style={{ color: "#000000B2" }}>
                  {" "}
                  {getDateFromISOString(data?.expireDate)}, <br />{" "}
                  {formatTime2(data?.expireDate)}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <DialogDefault open={isOpenProd} handleOpen={setOpenProd}>
        <ProductDetails handleOpen={setOpenProd} data={isOpenProd} />
      </DialogDefault>
    </div>
  );
};

export default CurrentStamp;
