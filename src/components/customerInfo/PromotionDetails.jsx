import React from "react";
import "./index.scss";
import { formatTime2, getDateFromISOString } from "../../utiils";
const PromotionDetails = ({ image, type, name, date, expiry, handleOpen }) => {

  
  const data1 = [
    {
      title: "Product",
      value: name,
    
    },
    {
      title: "Promotion Type and Value ID",
      value: type,
    
    },
    {
      title: "Date",
      value: getDateFromISOString(date),
    
    },
    {
      title: "Promotion Time",
      value: formatTime2(date),
    
    },
    {
      title: "Expiry",
      value: getDateFromISOString(expiry) + "," + formatTime2(expiry),
    
    },
    
  ];
  return (
    <div className="details-container">
      <p className="details-title">Promotion Details</p>
      <img
        src="./Mask group (2).png"
        alt=""
        className="cross-image2"
        onClick={() => handleOpen(false)}
      />
      <img src={image} alt="" className="details-image" />

      <div className="flex justify-center items-center w-full">
      <div className="flex flex-col gap-[20px]">
          {data1?.map((d, i) => (
            <div className="flex justify-between " key={i}>
              <p className="w-[250px]">{d?.title}</p>
              <span className="px-[20px]">:</span>
              <p style={{width:"50%"}}>{d?.value}</p>
            
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default PromotionDetails;
