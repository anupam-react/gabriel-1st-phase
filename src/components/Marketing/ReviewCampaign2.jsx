import React from "react";
import { useNavigate } from "react-router-dom";
import useCampaign from "../../hooks/useCampaign";

const ReviewCampaign2 = () => {
  const { setCampaignData, campaignData } = useCampaign();
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/marketing/ad-preview-coupon");
  };

  const data1 = [
    {
      title: "Discount Value",
      value: "",
      handleCLick: () => {
        navigate("/marketing/newCampaign");
        setCampaignData({ ...campaignData, typeOfCampaign: "Coupon" });
      },
    },
    {
      title: "Expriy Date",
      value: "",
      handleCLick: () => {
        navigate("/marketing/newCampaign");
        setCampaignData({ ...campaignData, typeOfCampaign: "Coupon" });
      },
    },
    {
      title: "Add Conditions",
      value: "",
      handleCLick: () => {
        navigate("/marketing/newCampaign");
        setCampaignData({ ...campaignData, typeOfCampaign: "Coupon" });
      },
    },
    {
      title: "Customer",
      value: "",
      handleCLick: () => {
        navigate("/marketing/newCampaign");
        setCampaignData({ ...campaignData, typeOfCampaign: "Coupon" });
      },
    },
    {
      title: "Target Location",
      value: "",
      handleCLick: () => {
        navigate("/marketing/newCampaign");
        setCampaignData({ ...campaignData, typeOfCampaign: "Coupon" });
      },
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-2xl font-bold">Review Campaign</p>
        {/* <button className="back" onClick={()=> navigate("/marketing")}> 
        <img src="../back.png" alt="" />
        Back</button> */}
      </div>
      <div className="loyalty-form-container" style={{ padding: "30px 50px" }}>
        <div className="mt-4">
          <div className="cupon-campaign mb-10 flex items-center gap-[50px]">
            <img src="../Vector (43).png" alt="" />
            <div className="w-[500px] font-[500] text-[18px]">
              Our data shows that 85% of your customers are likely to respond to
              your #campaignName. Set up this campaign to boost their spending
            </div>
          </div>
          <p className="text-lg font-semibold pb-2">Ad Review</p>
          <div className="">
            <img src="../Group 38237.png" alt="" />
          </div>
        </div>
        <div className="footer-Main2">
          <div className="footer-container2">
            <p>Campaign Type</p>
            <span>:</span>
            <p>Coupon</p>
            <button
              className="edit-button2"
              onClick={() => {
                setCampaignData({ ...campaignData, typeOfCampaign: "Coupon" });
                navigate("/marketing/newCampaign");
              }}
            >
              Edit
            </button>
          </div>
          {data1?.map((d, i) => (
            <div className="footer-container2">
              <p>{d?.title}</p>
              <span>:</span>
              <p>{d?.value}</p>
              <button className="edit-button2" onClick={d?.handleCLick}>
                ADD
              </button>
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

export default ReviewCampaign2;
