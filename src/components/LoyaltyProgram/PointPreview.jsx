import React, { useState } from "react";
import "./index.scss";
import { DialogDefault } from "../common/DilogBox";
import LoyalityCard from "./LoyalityCard";
import { useNavigate } from "react-router-dom";
import usePoints from "../../hooks/usePoints";
const PointPreview = () => {
  const { pointsData} = usePoints()
  const [openSuccess, setSuccess] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <p className="loyalty-form-header">Spent My Points (Preview )</p>
      <div className="loyalty-form-container h-[350px] flex justify-center items-center flex-col gap-6">
        <LoyalityCard
          image={pointsData?.image}
          text={pointsData?.productId?.name}
        />
        <button className="loyalty-button1" onClick={() =>{ 
          setSuccess(true)
          setTimeout(()=> {
            navigate("/loyalty")
          }, 1000)
          }}>
        Add to Spend My Point
        </button>
      </div>
      <DialogDefault open={openSuccess} handleOpen={setSuccess}>
        <div className="alert2">
          <img src="../../Vector (2).png" alt="" />
          <span>
             Successfully 'Product added to Spend my Points'
          </span>
        </div>
      </DialogDefault>
    </div>
  );
};

export default PointPreview;
