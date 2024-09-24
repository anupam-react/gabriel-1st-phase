import React from "react";
import { useNavigate } from "react-router-dom";
import useCampaign from "../../hooks/useCampaign";
import { getDateFromISOString } from "../../utiils";

const MarketingReviewCampaignOffer = () => {
  const { campaignData } = useCampaign()
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/marketing/ad-preview");
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
      title: "Offer Discount",
      value: campaignData?.discountValue + "%",
      handleCLick: () => {
            navigate("/marketing/newCampaign");
        },
    },
    {
      title: "Reward Type",
      value: campaignData?.rewardType,
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
      title: "No of Points Reward",
      value: campaignData?.noOfPoints,
      handleCLick: () => {
            navigate("/marketing/newCampaign");
        },
    },
    {
      title: "Add Conditions",
      value: campaignData?.conditionOfUse,
      handleCLick: () => {
            navigate("/marketing/newCampaign");
        },
    },
        {
      title: "Customer",
      value: campaignData?.typeOfCustomer,
      handleCLick: () => {
            navigate("/marketing/newCampaign");
        },
    },
    {
      title: "Expriy Date",
      value: getDateFromISOString(campaignData?.expireDate),
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
      <div className="loyalty-form-container">
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Ad Review</p>
          <div className="">
          <div className="cardContainer" style={{width:"480px"}}>
        <img src={campaignData?.couponImage} alt="" className="w-[200px] h-[100px]" />
        <p className="font-[600] text-2xl">{campaignData?.typeOfCampaign}</p>
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
          <div className="footer-container2">
            <p>Customer</p>
            <span>:</span>
            <p className="flex items-center gap-3">
              Active
              <span className="live-dots"></span>
            </p>
            <button className="edit-button2">Edit</button>
          </div>
         
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

export default MarketingReviewCampaignOffer;
