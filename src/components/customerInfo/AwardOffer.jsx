import React, { useState } from "react";
import { DialogDefault } from "../common/DilogBox";
import AwardCustomer from "./AwardCustomer";
import "./index.scss";
import PromotionPreview from "./PromotionPreview";
import { getDateFromISOString } from "../../utiils";
import usePromotion from "../../hooks/usePromotion";
const AwardOffer = ({handleOpen}) => {
  const [openCustom, setOpenCustom] = useState(false);
  const [openSuccess, setSuccess] = useState(false);
  const {
    promotionData,
  } = usePromotion();
  const data = [
    {
      title: "Promotion Type",
      value: promotionData?.type === "PercentageDiscount" ? "Percentage Discount" : promotionData?.type,
      handleCLick: () => {
         handleOpen(false);
      },
    },
    {
      title: "Decription",
      value: promotionData?.description,
      handleCLick: () => {
         handleOpen(false);
      },
    },
    {
      title: "Reward Type",
      value: promotionData?.typeOfReward,
      handleCLick: () => {
         handleOpen(false);
      },
    },
    {
      title: "Reward Value",
      value: promotionData?.rewardPoints,
      handleCLick: () => {
         handleOpen(false);
      },
    },
    {
      title: "Expiration Date",
      value:  getDateFromISOString(promotionData?.expireDate),
      handleCLick: () => {
         handleOpen(false);
      },
    },
  ];
  const data2 = [
    {
      title: "Promotion Type",
      value: "Percentage DIscount",
      handleCLick: () => {
         handleOpen(false);
      },
    },
    {
      title: "Decription",
      value: promotionData?.description,
      handleCLick: () => {
         handleOpen(false);
      },
    },
    {
      title: "Condition Of Use",
      value: promotionData?.typeOfReward,
      handleCLick: () => {
         handleOpen(false);
      },
    },
    
    {
      title: "Expiration Date",
      value:  getDateFromISOString(promotionData?.expireDate),
      handleCLick: () => {
         handleOpen(false);
      },
    },
  ];
  return (
    <div className="gift-container no-scrollbar">
      <div className="gift-main ">
        <p className="title">Send Target Promotons</p>
        <img
          src="./Mask group (2).png"
          alt=""
          className="cross-image"
          onClick={() => {
            handleOpen(false);
          }}
        />
      </div>
      <hr className="hr" />
      <div className="cardContainer">
      <img src={promotionData?.image} alt="" className="h-[100px] w-[150px]"/>
      <p>{promotionData?.discount + "% " + promotionData?.description}</p>
      </div>
      <div className="footer-Main">
        {promotionData?.type !== "Buy 1 get 1 free" ? 
        <>
        {data?.map((d, i) => (
          <div className="footer-container">
            <p>{d?.title}</p>
            <p>:</p>
            <p>{d?.value}</p>
            <button className="edit-button" onClick={d?.handleCLick}>Edit</button>
          </div>
        ))} 
        </>
        :
        <>
        {data2?.map((d, i) => (
          <div className="footer-container">
            <p>{d?.title}</p>
            <p>:</p>
            <p>{d?.value}</p>
            <button className="edit-button" onClick={d?.handleCLick}>Edit</button>
          </div>
        ))}
        </>
      }
      </div>
      <button className="menuButton" onClick={() => setSuccess(true)}>
      See Promotion Preview
      </button>
      <DialogDefault open={openCustom} handleOpen={setOpenCustom}>
        <AwardCustomer handleOpen={setOpenCustom} id={data?._id}/>
      </DialogDefault>
      <DialogDefault open={openSuccess} handleOpen={setSuccess}>
        <PromotionPreview  handleOpen={setSuccess}/>
      </DialogDefault>
    </div>
  );
};

export default AwardOffer;
