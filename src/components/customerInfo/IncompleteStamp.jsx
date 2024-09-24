import React, { useEffect, useState } from "react";
import AwardMenu from "./AwardMenu";
import { fetchApiData, formatTime2, getDateFromISOString } from "../../utiils";
import { DialogDefault } from "../common/DilogBox";
import ProductDetails from "./ProductDetails";
import ImageCard from "./ImageCard";

const IncompleteStamp = ({ data }) => {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [isOpenProd, setOpenProd] = useState(false);

  const [dataInfo, setDataInfo] = useState();

  const getAllInCompleteStampVouchers = async () => {
    const response = await fetchApiData(
      `https://money-chat.com/api/api/v1/brandLoyalty/getAllInCompleteStampVouchers/ByUserId/${data?._id}`
    );
    console.log(response);
    setDataInfo(response?.data);
  };

  useEffect(() => {
    getAllInCompleteStampVouchers();
  }, []);
  return (
    <div>
      <table className="table2">
        <thead>
          <tr>
            <th>Date Redeemed</th>
            <th>Product Claimed</th>
          </tr>
        </thead>
        <tbody>
          {dataInfo?.map((data, i) => (
            <tr key={i}>
              <td>
                {getDateFromISOString(data?.createdAt)},
                <br /> {formatTime2(data?.createdAt)}
              </td>
              <td>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                    }}
                    className="w-[300px]"
                   
                  >
                    <div onClick={() => setOpenProd(data?.productId)} className="cursor-pointer" style={{ display: "flex", justifyContent: "center" }}>
                  <ImageCard image={data?.productId?.image} stamps={data?.totalNoOfStamps} completeNoOfStamps={data?.completeNoOfStamps}/>
                </div>
                    <img
                      src="./Vector (3).png"
                      alt=""
                      className="dot-image2"
                      onClick={() => {
                        if (isOpenMenu === i + 1) setOpenMenu(false);
                        else setOpenMenu(i + 1);
                      }}
                    />
                  </div>
                  {isOpenMenu === i + 1 && (
                    <div className="award-menu-main">
                      <AwardMenu data={data} />
                    </div>
                  )}
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

export default IncompleteStamp;
