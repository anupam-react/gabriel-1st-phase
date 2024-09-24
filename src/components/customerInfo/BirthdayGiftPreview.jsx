import React, { useState } from "react";
import "./index.scss";
import { DialogDefault } from "../common/DilogBox";
import { useNavigate } from "react-router-dom";
import useOffer from "../../hooks/useOffer";
import { initialState } from "../atoms/offerState";

const BirthdayGiftPreview = ({ handleOpen , onClose }) => {
  const {  offerData , setOfferData}= useOffer();

  const navigate = useNavigate()

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
      <div className="gift-main" >
        <p className="title">Birthday Gift ( Preview )</p>
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
      <p>{offerData?.discount}% Birthday Spacial Discount</p>
      </div>
      <div >
        {data?.map((d, i) => (
          <div className="" key={i}>
           
              <p className="text-[#12121280] pb-3 text-[20px] font-[600]">{d?.value}</p>
           
          </div>
        ))}
          </div>
           <button className="menuButton4" onClick={()=>{ 
            setSuccess(true)
            setOfferData(initialState)
            setTimeout(()=>{
            onClose()
            },2000)
            }}>Send to Customer Gift folder</button>

      </div>
         
           <DialogDefault open={openSuccess} handleOpen={setSuccess}>
              <div className="alert">
                  <img src="./Vector (2).png" alt="" />
                  <p className="text-[32px] font-bold text-center">Successfully Sent to customer’s Gift Folder</p>

            </div>
        </DialogDefault>
    </div>
  );
};

export default BirthdayGiftPreview;
