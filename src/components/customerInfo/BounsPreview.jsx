import React, { useState } from "react";
import { DialogDefault } from "../common/DilogBox";
import "./index.scss";
import { bounsState } from "../atoms/bounsState";
import { useRecoilState } from "recoil";
import useNotification from "../../hooks/useNotification";
import { getDateFromISOString } from "../../utiils";

const BounsPreview = ({ handleOpen , handleClose }) => {
  const { 
    handleNotification } = useNotification()
  const [bonus, setBounData] = useRecoilState(bounsState);

  console.log(bonus)

  const [openSuccess, setSuccess] = useState(false);
  return (
    <div className="gift-container no-scrollbar" style={{height:"400px"}}>
      <div className="gift-main">
        <p className="title">Award Free Bonus Preview</p>
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
  
      <div className="form-container">
        <div className="input-container">
          <label className="text-[24px] font-[500]">Notification Preview</label>
          <textarea
            id="w3review"
            name="w3review"
            rows="3"
            cols="50"
            value={`Congratulations! You have been awarded ${bonus?.noOfPoint || bonus?.totalNoOfStamps} bonus points on your last ${bonus?.Product?.name} purchase`}
                      className="input"
          />
        </div>
      </div>
      <div className="flex-center">
        <button className="menuButton" onClick={() =>{
          
    handleNotification(bonus?.data?.userId, "Award Free Bonus",  `Congratulations! You have been awarded ${bonus?.data?.noOfPoint || bonus?.data?.totalNoOfStamps} bonus points on your last ${bonus?.Product?.name} purchase`, getDateFromISOString(bonus?.data?.createdAt))
          setSuccess(true)
          setTimeout(()=>{
            setSuccess(false)
            handleOpen(false);
            handleClose(false)
          },1000)
          }}>
        SEND NOTIFICATION 
        </button>
      </div>
      <DialogDefault open={openSuccess} handleOpen={setSuccess}>
         <div >
          <div className="cross-image2">
            <img
              src="./Mask group (2).png"
              alt=""
              className=""
              onClick={() => {
                setSuccess(false);
              }}
            />
          </div>
          <div className="text-black text-[32px] flex flex-col items-center px-10 pb-4 text-center ">
          <img src="./success.gif" alt="" className="w-[150px] h-[150px]"/>
          <p>
          Your Point bus has been sent to MC12345.
          </p>

          </div>
        </div>
      </DialogDefault>
    </div>
  );
};

export default BounsPreview;
