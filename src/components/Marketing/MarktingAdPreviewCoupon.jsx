import React from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import useCampaign from "../../hooks/useCampaign";
import { formatDate } from "../../utiils";
import usePayment from "../../hooks/usePayment";
import { initialState } from "../atoms/campaignState";
const MarktingAdPreviewCoupon = ({ isPay = false }) => {
  const { campaignData , setCampaignData} = useCampaign()
  const {handlePayment} = usePayment()
  const navigate = useNavigate();
  const handleSubmit = () => {
    isPay ? sendpayment() : navigate("/marketing/ad-confirm-coupon");
  };
  const sendpayment = ()=>{
    handlePayment(campaignData?._id)
    setCampaignData(initialState)
  }
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-2xl font-bold">
          {isPay ? "Run Campaign" : campaignData?.typeOfCampaign === "Coupon" ? "Coupon Ad Preview" : campaignData?.typeOfCampaign === "Percentage Discount" ?  "Discount Ad Preview" : "Offer Ad Preview"}
        </p>
        {/* <button className="back" onClick={()=>  isPay ? navigate("/marketing/ad-preview") : navigate("/marketing/review-campaign")}> 
        <img src="../back.png" alt="" />
        Back</button> */}
      </div>
      <div className="ad-container">
        <p className="text-[#121212] font-semibold text-xl pb-4">
          {" "}
          {isPay ? "Run Campaign" : "Ad preview"}
        </p>
        <div className="ad-main">
          <div className="flex gap-4">
            <img src="../image 720 (2).png" alt="" className="h-fit" />
            <div>
              <div className="">
              <img src="../Group 38237.png" alt="" />
              </div>
              <div className="flex justify-end gap-2 mt-2">
                <img src="../mdi_gift.png" alt="" />
                <p className="font-semibold"> : {campaignData?.noOfPoints}</p>
                <img src="../image 698 (3).png" alt="" />
              </div>
            </div>
          </div>
          <div className="font-bold mt-2 text-lg">
            <p className="pb-2 ">
             {campaignData?.description}
            </p>
            <p className="pb-2">Exp: {formatDate(campaignData?.expireDate)}</p>

            <button
              className="loyalty-button1"
              style={{ width: "260px" }}
              onClick={handleSubmit}
            >
              {isPay ? `Pay £${campaignData?.noOfDays}` : "Run  Campaign"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarktingAdPreviewCoupon;
