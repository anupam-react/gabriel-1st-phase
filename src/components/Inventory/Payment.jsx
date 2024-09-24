import React, { useState } from "react";
import "./index.scss";
import { useNavigate, useParams } from "react-router-dom";
import { DialogDefault } from "../common/DilogBox";

import usePromoteProduct from "../../hooks/usePromoteProduct";
import usePayment from "../../hooks/usePayment";
import { initialState } from "../atoms/campaignState";

const Payment = () => {
  const { campaignData , setCampaignData} = usePromoteProduct()
  const {handlePayment} = usePayment()
  console.log(campaignData)
  const { path } = useParams()
  const [isSuccess, setSuccess] = useState(false);
  const [isReview, setReview] = useState(false);
  const [isLive, setLive] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    handlePayment(campaignData?._id)
    setCampaignData(initialState)
    // setSuccess(true);
    // setTimeout(() => {
    //   setSuccess(false);
    //   setReview(true);
    // }, 1000);
    // setTimeout(() => {
    //   setReview(false);
    //   setLive(true);
    // }, 2000);
    // setTimeout(() => {
    //   setLive(false);
    //   navigate(`/${path}`);
    // }, 3000);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-2xl font-bold">Payment</p>
        <button className="back" onClick={()=> navigate("/marketing")}> 
        <img src="../../back.png" alt="" />
        Back</button>
      
      </div>
      <div className="payment-container">
        <div>
          <p className="font-bold text-xl text-black pb-4">
            Let’s Make Payment
          </p>
          <p className="pb-4">
          To pay for your ad campaign, enter your card details below. You may be redirected to your bank authorisation page to approve this payment. 
          </p>
          <div className="payment-input-container">
            <label htmlFor="">Cardholder’s Name</label>
            <input type="text" name="" id="" value="PAULINA CHIMAROKE" />
          </div>
          <div className="payment-input-container">
            <label htmlFor="">Card Number</label>
            <input
              type="text"
              name=""
              id=""
              value="9870 3456 7890 6473"
              className="cardN-input"
            />
            <img src="../../mastercard 1.png" alt="" className="visa-logo" />
          </div>
          <div className="flex justify-between">
            <div className="payment-input-container">
              <label htmlFor="">Expiry</label>
              <input type="text" name="" id="" value="03 / 25" />
            </div>
            <div className="payment-input-container">
              <label htmlFor="">CVC</label>
              <input type="text" name="" id="" value="654" />
            </div>
          </div>
          <button
            className="loyalty-button1"
            style={{ width: "180px", marginTop: "20px" }}
            onClick={handleSubmit}
          >
            Pay £{campaignData?.campaignCost}
          </button>
        </div>
        <div className="payment-card">
          <p>You’re paying a total of</p>
          <p className="text-[24px] font-bold text-black pb-3">£{campaignData?.campaignCost}</p>
          <hr />
          <div className="flex justify-between font-bold text-black mt-2">
            <p>Campaign Run</p>
            <p>£1/Day</p>
          </div>
        </div>
      </div>
      <DialogDefault open={isSuccess} handleOpen={setSuccess}>
        <div className="alert">
          <img src="../../Vector (2).png" alt="" />
          <p className="text-center text-[20px]">
          Payment Successfully
          </p>
        </div>
      </DialogDefault>
      <DialogDefault open={isReview} handleOpen={setReview}>
        <div className="alert">
          <img src="../../emojione-monotone_hourglass-not-done.png" alt="" />
          <p className="text-center text-[20px]">
          Thank you! Your ad is under review. We will let you know when it is Live.
          </p>
        </div>
      </DialogDefault>
      <DialogDefault open={isLive} handleOpen={setLive}>
        <div className="alert">
          <img src="../../Vector (2).png" alt="" />
          <p className="text-center text-[20px]">
          Congratulations! Your ad is now Live.
          </p>
        </div>
      </DialogDefault>
    </div>
  );
};

export default Payment;
