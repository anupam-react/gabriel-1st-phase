import React from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import useCampaign from "../../hooks/useCampaign";
import { initialState } from "../atoms/campaignState";
import usePayment from "../../hooks/usePayment";
const FollowerAdPreview = ({ isPay = false }) => {
  const { campaignData , setCampaignData} = useCampaign()
  const navigate = useNavigate();
  const {handlePayment} = usePayment()
  const handleSubmit = () => {
    isPay
      ? sendpayment()
      : navigate("/marketing/ad-follower-confirm");
  };

  const sendpayment = ()=>{
    handlePayment(campaignData?._id)
    setCampaignData(initialState)
  }
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-2xl font-bold">
          {isPay ? "Run Campaign" : "Discount Ad Preview"}
        </p>
        <button className="back" onClick={()=>{
          isPay
          ?
           navigate("/marketing/ad-preview-follower")
           :
           navigate("/marketing/review-follower")
          }}> 
        <img src="../back.png" alt="" />
        Back</button>
      </div>
      <div className="ad-container">
        <p className="text-[#121212] font-semibold text-xl pb-4">
          {" "}
          {isPay ? "Run Campaign" : "Ad Preview"}
        </p>
        <div className="ad-main">
          <div className="flex gap-4">
            <div>
              <img src="../image 720 (2).png" alt="" />
            </div>
            <div className="w-[350px]">
              <div className="flex justify-between relative">
                <div className="flex gap-4 mr-[200px]">
                  <div>
                    <p className="font-bold">Cafe Coffee Day </p>
                    <div className="flex items-center gap-2 font-bold">
                      <p>Sponsored</p>
                      <img src="../Vector (10).png" alt="" className="h-fit" />
                    </div>
                  </div>
                </div>
              </div>
              <p className="font-bold py-4">
                Follow us Cafe Coffee Day  to see the latest trends and offers
              </p>
              <div className="cardContainer" style={{width:"350px"}}>
        <img src={campaignData?.couponImage} alt="" className="w-[200px] h-[100px]" />
        
      </div>

              <div className="font-bold my-4">
                <div className="flex justify-between gap-6 items-center">
                  <p>Cafe Coffee Day</p>
                 
                    <div>
                      <div className="flex gap-2 items-center">
                        <img src="../ph_heart.png" alt="" />
                        <p>{campaignData?.a}</p>
                      </div>
                      <p>Followers</p>
                    </div>
                  
                </div>
              </div>
              <button
                className="loyalty-button1"
                style={{ width: "100%" }}
                onClick={handleSubmit}
              >
                {isPay ? `Pay £${campaignData?.noOfDays}` : "Run  Campaign"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowerAdPreview;
