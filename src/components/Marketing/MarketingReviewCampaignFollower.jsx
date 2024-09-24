import React from "react";
import { useNavigate } from "react-router-dom";
import useCampaign from "../../hooks/useCampaign";


const MarketingReviewCampaignFollower = () => {
  const { campaignData } = useCampaign()
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/marketing/ad-preview-follower");
  };

  const data1 = [
    {
      title: "Campaign Type",
      value: campaignData?.typeOfCampaign,
      handleCLick: () => {
            navigate("/marketing/newCampaign");
        },
    },
    {
      title: "Description",
      value: campaignData?.description,
      handleCLick: () => {
            navigate("/marketing/newCampaign");
        },
    },
    {
      title: "Audience",
      value: campaignData?.audienceSelection,
      handleCLick: () => {
            navigate("/marketing/newCampaign");
        },
    },
    {
      title: "Campaign Duration",
      value: campaignData?.noOfDays,
      handleCLick: () => {
            navigate("/marketing/newCampaign");
        },
    },
    {
      title: "Target Location",
      value: campaignData?.targetLocation,
      handleCLick: () => {
            navigate("/marketing/newCampaign");
        },
    },
    {
      title: "Estimated  Reach",
      value: campaignData?.estimateReachMax,
      handleCLick: () => {
            navigate("/marketing/newCampaign");
        },
    },
    
  ];
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-2xl font-bold">Review Campaign</p>
        <button className="back" onClick={()=> navigate("/marketing/newCampaign")}> 
        <img src="../back.png" alt="" />
        Back</button>
      </div>
      <div className="loyalty-form-container" style={{padding:"20px 40px"}}>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Ad Review</p>
          <div className="">
          <div className="cardContainer" style={{width:"480px"}}>
        <img src={campaignData?.couponImage} alt="" className="w-[200px] h-[100px]" />
        {/* <p className="font-[600] text-2xl">{campaignData?.typeOfCampaign}</p> */}
      </div>
            {/* <img src="../Group 38237.png" alt="" /> */}
          </div>
        </div>
        <div className="footer-Main2">
          {data1?.map((d, i) => (
            <div className="footer-container2">
              <p>{d?.title}</p>
              <span>:</span>
              <p>{d?.value}</p>
              <button className="edit-button2"  onClick={d?.handleCLick}>Edit</button>
            </div>
          ))}
      
    
        </div>
        <button
          className="loyalty-button1"
          style={{ width: "300px" }}
          onClick={handleSubmit}
        >
          See Campaign Review
        </button>
      </div>
    </div>
  );
};

export default MarketingReviewCampaignFollower;
