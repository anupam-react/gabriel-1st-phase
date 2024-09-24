import React, { useState } from "react";
import "./index.scss";
import { DialogDefault } from "../common/DilogBox";
import LoyalityCard from "./LoyalityCard";
import { useNavigate } from "react-router-dom";
import useStamp from "../../hooks/useStamp";
const StampPreview = () => {
  const { singleStampData}= useStamp()
  console.log(singleStampData)
  const [openSuccess, setSuccess] = useState(false);
  const navigate = useNavigate()
  return (
    <div>
      <p className="loyalty-form-header">Stamp System Preview</p>
      <div className="loyalty-form-container h-[350px] flex justify-center items-center flex-col gap-6">
        <LoyalityCard
          image={singleStampData?.productId?.image}
          text={singleStampData?.description}
        />
        <button className="loyalty-button1" onClick={() =>{ 
          setSuccess(true)
          setTimeout(()=> {
            navigate("/loyalty")
          }, 1000)
          }}>
          See Stamp System Preview
        </button>
      </div>
      <DialogDefault open={openSuccess} handleOpen={setSuccess}>
        <div className="alert2">
          <img src="../../Vector (2).png" alt="" />
          <span>
          Stamp System is now attached to your products. Your customers can now pay and earn Stamps.
          </span>
        </div>
      </DialogDefault>
    </div>
  );
};

export default StampPreview;
