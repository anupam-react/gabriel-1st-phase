import React, { useState } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { DialogDefault } from "../common/DilogBox";
import useReferral from "../../hooks/useReferral";
const ReferalPreview = ({handleOpen , onClose}) => {
  const navigate = useNavigate();
  const [openSuccess, setSuccess] = useState(false);
  const {
    referralData,
  } = useReferral();
  return (
    <div className="gift-container no-scrollbar">
        <div className="gift-main">
        <p className="title">Referral Reward Invitation Link</p>
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
        <p className="text-[#121212] text-[20px] font-semibold">Referral Reward</p>
      
      <div className="cardContainer">
        <img src={referralData?.image} alt="" />
        <p>{referralData?.description}</p>
      </div>
      <div className="flex gap-6 items-center">
        <p className="text-[#0070BC]">Exp : 01-10-24</p>
      <div>
              <div className="flex justify-end gap-2">
                <img src="../mdi_gift.png" alt="" />
                <p className="font-semibold"> : 500</p>
                <img src="../image 698 (3).png" alt="" />
              </div>
            </div>
      </div>
      <p className="text-[#00000080] text-left font-[600] w-[260px]">{referralData?.message}</p>
          <p className="text-[#0070BC] w-[260px]">{referralData?.exclusiveLink}</p>
            <button
              className="loyalty-button1 mt-6"
              style={{ width: "fit-content" }}
              onClick={()=>{
                setSuccess(true)
                setTimeout(()=>{
                  onClose()
                },[1000])
              }}
            >
             Send to Customer’s Offer Folder
            </button>
   
        </div>
      
      </div>
      <DialogDefault open={openSuccess} handleOpen={setSuccess}>
      <div className="alert">
          <img src="../Vector (2).png" alt="" />
          <p className="text-center text-lg">
          Successfully Sent to customer’s Offer Folder
          </p>
        </div>
      </DialogDefault>
    </div>
  );
};

export default ReferalPreview;
