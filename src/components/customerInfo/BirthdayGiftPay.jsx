import React, { useState } from "react";
import "./index.scss";
import { DialogDefault } from "../common/DilogBox";
import { useNavigate } from "react-router-dom";
import useOffer from "../../hooks/useOffer";
import usePaymentReward from "../../hooks/usePaymentReward";

const BirthdayGiftPay = ({ handleOpen }) => {
  const {  offerData }= useOffer();
  const  { handlePayment } = usePaymentReward()
  const navigate = useNavigate("")
  const data = [
    
    {
      title: "Decription",
      value: offerData?.description,
     
    },
    {
      title: "Birthday Message",
      value: offerData?.message,
     
    },
   
  ];
  return (
    <div className="gift-container">
      <div className="gift-main" >
        <p className="title">Birthday Offer ( Preview )</p>
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
      <div className="flex flex-col items-center gap-4">
      <div className="cardContainer" >
      <img src={offerData?.image} alt="" className="h-[100px] w-[150px]"/>
      <p>{offerData?.description}</p>
      </div>
      <div >
        {data?.map((d, i) => (
          <div className="">
           
              <p className="text-[#12121280] pb-3 text-[20px]">{d?.value}</p>
           
          </div>
        ))}
          </div>
           <button className="menuButton" onClick={()=> handlePayment(offerData?._id)}>Pay £1</button>

      </div>
         
        
    </div>
  );
};

export default BirthdayGiftPay;
