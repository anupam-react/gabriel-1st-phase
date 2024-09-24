import React, { useState } from "react";
import "./index.scss";
import { DialogDefault } from "../common/DilogBox";

import BirthdayOfferPreview from "./BirthdayOfferPreview";
import BirthdayGiftPreview from "./BirthdayGiftPreview";
import useOffer from "../../hooks/useOffer";
const BirthdayOffer = ({ handleOpen, isOffer = false , onClose }) => {
  const {  offerData}= useOffer();
  const [openSuccess, setSuccess] = useState(false);
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
      <div className="gift-main">
        <p className="title">
          {isOffer ? "Birthday Offer ( Review )" : "Birthday Gift ( Review )"}
        </p>
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
      <div className="cardContainer px-10 py-4">
        <img src={offerData?.image} alt="" className="h-[100px] w-[150px]"/>
        <p className="text-center">{offerData?.discount}% Birthday Spacial Discount</p>
      </div>
      <div className="footer-Main">
        {data?.map((d, i) => (
          <div className="footer-container">
            <p style={{width:"150px"}}>{d?.title}</p>
            <span>:</span>
            <p style={{width:"200px"}}>{d?.value}</p>
            <button
              className="edit-button"
              onClick={() => {
                handleOpen(false);
              }}
            >
              Edit
            </button>
          </div>
        ))}
      </div>
      <button className="menuButton4" onClick={() => setSuccess(true)}>
   {isOffer ? "See Offer Preview" :  "See Customer Gift Preview"}
      </button>

      <DialogDefault open={openSuccess} handleOpen={setSuccess}>
        {isOffer ? (
          <BirthdayOfferPreview handleOpen={setSuccess} />
        ) : (
          <BirthdayGiftPreview handleOpen={setSuccess} onClose={onClose}/>
        )}
      </DialogDefault>
    </div>
  );
};

export default BirthdayOffer;
