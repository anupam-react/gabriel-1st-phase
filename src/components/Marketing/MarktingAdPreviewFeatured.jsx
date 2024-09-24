import React, { useState } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import useCampaign from "../../hooks/useCampaign";
import { formatDate } from "../../utiils";
import { DialogDefault } from "../common/DilogBox";
import { initialState } from "../atoms/campaignState";
const MarktingAdPreviewFeatured = () => {
  const { campaignData , setCampaignData} = useCampaign()
  const [isSuccess, setSuccess] = useState(false);
  const [isReview, setReview] = useState(false);
  const [isLive, setLive] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    setCampaignData(initialState)
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false);
      setReview(true);
    }, 1000);
    setTimeout(() => {
      setReview(false);
      setLive(true);
    }, 2000);
    setTimeout(() => {
      setLive(false);
      navigate("/marketing");
    }, 3000);
  };
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-2xl font-bold">
        Offer Ad Preview
        </p>
        <button className="back" onClick={()=> navigate("/marketing/review-featured")}> 
        <img src="../back.png" alt="" />
        Back</button>
      </div>
      <div className="ad-container">
        <p className="text-[#121212] font-semibold text-xl pb-4">
        Ad preview
        </p>
        <div className="ad-main">
            <div className=" flex gap-4">
            <img src="../img/image 720.png" alt="" className="h-fit" />
            <div>
             <img src="../img/Group 38237 (1).png" alt="" className="w-[340px] h-[180px]" />
             <div>
            <div className="font-bold mt-2 text-[20px]">
            <p className="pb-2 ">
           {campaignData?.title}
            </p>
            <p className="pb-2 w-[400px]">{campaignData?.description}</p>

            <button
              className="loyalty-button1"
              style={{ width: "260px" }}
              onClick={handleSubmit}
            >
            Post Featured Deal
            </button>
          </div>
            </div>
            </div>
            </div>
        </div>
      </div>
      <DialogDefault open={isSuccess} handleOpen={setSuccess}>
      <div className="alert">
          <img src="../emojione-monotone_hourglass-not-done.png" alt="" />
          <p className="text-center text-[20px]">
          Thank you! Your ad is under review. We will let you know when it is Live.
          </p>
        </div>
      
      </DialogDefault>
      <DialogDefault open={isReview} handleOpen={setReview}>
      <div className="alert">
          <img src="../Vector (44).png" alt="" />
          <p className="text-center text-[20px]">
          Thank you! Your ad is under review. We will let you know when it is Live.
          </p>
        </div>
      </DialogDefault>
      <DialogDefault open={isLive} handleOpen={setLive}>
        <div className="alert">
          <img src="../Vector (2).png" alt="" />
          <p className="text-center text-[20px]">
          Congratulations! Your ad is now Live.
          </p>
        </div>
      </DialogDefault>
    </div>
  );
};

export default MarktingAdPreviewFeatured;
