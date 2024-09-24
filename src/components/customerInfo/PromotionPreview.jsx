import React, { useState } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { DialogDefault } from "../common/DilogBox";
import { formatDate3 } from "../../utiils";
import usePromotion from "../../hooks/usePromotion";
import usePaymentReward from "../../hooks/usePaymentReward";
const PromotionPreview = ({handleOpen, isPay = false }) => {
  const navigate = useNavigate();
  const [openSuccess, setSuccess] = useState(false);
  const {
    promotionData,
    setPromotionData
  } = usePromotion();

  const  { handlePayment } = usePaymentReward()

  const handlePay = ()=>{
    handlePayment(promotionData?._id)
    setPromotionData("")
  }
  return (
    <div className="gift-container no-scrollbar">
        <div className="gift-main">
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
   
      <div className="ad-container">
       
      <div className="flex flex-col gap-3 items-center">
        <p className="text-[#121212] text-[20px] font-semibold">{promotionData?.type === "PercentageDiscount" ? "Percentage Discount" : promotionData?.type}</p>
      
      <div className="cardContainer">
      <img src={promotionData?.image} alt="" className="h-[100px] w-[150px]"/>
      <p>{promotionData?.description}</p>
      </div>
      <div className="flex gap-6 items-center">
        <p className="text-[#0070BC]">Exp : {formatDate3(promotionData?.expireDate)}</p>
      <div>
              <div className="flex justify-end gap-2">
                <img src="../mdi_gift.png" alt="" />
                <p className="font-semibold"> : {promotionData?.rewardPoints}</p>
                <img src="../image 698 (3).png" alt="" />
              </div>
            </div>
      </div>
        
            <button
              className="loyalty-button1 mt-6"
              style={{ width: "fit-content" , width:"300px" }}
              onClick={()=>{
                isPay ? handlePay() :  setSuccess(true)
              }}
            >
              {isPay ? "Pay £1" : "Send to Customer’s Offer Folder"}
            </button>
   
        </div>
      </div>
      <DialogDefault open={openSuccess} handleOpen={setSuccess}>
        <PromotionPreview isPay={true} handleOpen={setSuccess} />
      </DialogDefault>
    </div>
  );
};

export default PromotionPreview;
