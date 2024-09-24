import React, { useEffect } from "react";
import "./index.scss";
import InventoryCard from "./InventoryCard";
import { useNavigate, useParams } from "react-router-dom";
import useProduct from "../../hooks/useProduct";
import usePromoteProduct from "../../hooks/usePromoteProduct";
import { formatDate } from "../../utiils";
import { initialState } from "../atoms/campaignState";
import usePayment from "../../hooks/usePayment";
const AdPreview = ({ isPay = false }) => {
  const {id} = useParams()
  const {getProductById , productInfo} = useProduct()
  const { campaignData , setCampaignData} = usePromoteProduct()
  useEffect(()=>{
    getProductById(id);
  },[id])

  const {handlePayment} = usePayment()

  const sendpayment = ()=>{
    handlePayment(campaignData?._id)
    setCampaignData(initialState)
  }
  const data = {
    image: productInfo?.image,
    price: `£${productInfo?.price}`,
    name: productInfo?.name,
    inStore: productInfo?.inStore,
    online: productInfo?.online
  };
  const navigate = useNavigate();
  const handleSubmit = () => {
    isPay ? sendpayment() : navigate(`/inventory/ad-confirm/${id}`);
  };
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-2xl font-bold">Discount Ad Preview</p>
        <div
          className="flex items-center px-6 h-12"
          style={{
            backgroundColor: "#FFFFFF",
            width: "20rem",
            borderRadius: "12px",
            color: "#8BA3CB",
          }}
        >
          <img src="../../image 2 (3).svg" alt="search" className="w-6 h-6" />
          <input
            type="text"
            className="border-none w-48 bg-transparent outline-none focus:ring-0 focus:shadow-none focus:border-none"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="ad-container">
        <p className="text-[#121212] font-semibold text-xl pb-4">Ad Preview</p>
        <div className="ad-main">
          <div className="flex gap-4">
            <img src="../../image 720.png" alt="" className="h-fit" />
            <div>
              <div className="image-shadow w-fit">
                <InventoryCard data={data} />
              </div>
              <div className="flex justify-end gap-2 mt-2">
                <img src="../../mdi_gift.png" alt="" />
                <p className="font-semibold"> : 500</p>
                <img src="../../image 698 (3).png" alt="" />
              </div>
            </div>
          </div>
          <div className="font-bold mt-2">
            <p className="pb-2">
              Buy Any Hot Drinks Today And Double Your Points.
            </p>
            <p className="pb-2">Exp: {formatDate(campaignData?.expireDate)}</p>

            <button
              className="loyalty-button1"
              style={{ width: "260px" }}
              onClick={handleSubmit}
            >
              {isPay ? `Pay £${campaignData?.campaignCost}` : "Run  Campaign"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdPreview;
