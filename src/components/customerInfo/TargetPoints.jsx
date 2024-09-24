import React, { useState } from 'react'
import { DialogDefault } from '../common/DilogBox';
import "./index.scss";

import AwardOffer from './AwardOffer';
const TargetPoints = ({handleOpen}) => {
     const [openSuccess, setSuccess] = useState(false);

     const promotionOptions = [
       { label: "Percentage Discount", value: "Percentage Discount" },
       { label: "Coupon", value: "Coupon" },
       { label: "Create an offer", value: "Create an offer" },
       { label: "Buy 1 Get 1 Free", value: "Buy 1 Get 1 Free" },
     ];
     const rewardOptions = [
       { label: "Points", value: "Points" },
       { label: "Stamps", value: "Stamps" },
     ];
  return (
  <div className="gift-container">
      <div className="gift-main no-scrollbar">
        <p className="title">Send Target Promotions</p>
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
           {/* <div className="catalogue2">
           <label>Select Product from catalogue</label>
        <CatalogueProduct />
      </div> */}
      {/* <div className="button-group">
        <button className="button2" style={{fontSize:"18px"}} onClick={() => setSuccess(true)}>
          5 Stamps
        </button>
        <button className="button1" style={{fontSize:"18px"}} onClick={() => setSuccess(true)}>
          10 Stamps
        </button>
        <button className="button1" style={{fontSize:"18px"}} onClick={() => setSuccess(true)}>
          20 Stamps
        </button>
          </div> */}
           
           <div className="form-container">
        <div className="input-container">
          <label>Choose Promotion Type</label>
          <select
            id="countries"
            // value={selectedOption}
            // onChange={handleChange}
            className="rounded shadow-md text-gray-900 text-sm  border-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {promotionOptions?.map((data, i) => (
              <>
                <option
                  className="font-semibold text-[#000000B2]"
                  key={i}
                  value={data?.value}
                >
                  {data?.label}
                </option>
              </>
            ))}
          </select>
        </div>
     
        <div className="input-container">
          <label>Upload photo/product</label>
          <div className="flex  w-full">
            <label
              for="dropzone-file"
              className="flex justify-end bg-white  shadow rounded-md w-full "
            >
              <div
                className="flex py-2 px-4 rounded-md text-white gap-2"
                style={{ backgroundColor: "#00AAEA" }}
              >
                <p className="text-sm">UPLOAD</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </div>
        <div className="input-container">
          <label>Promotion Description text</label>
          <textarea
            id="w3review"
            name="w3review"
            rows="4"
            cols="50"
            className="input"
          />
        </div>
        <div className="input-container">
          <label>Choose Reward Type</label>
          <select
            id="countries"
            // value={selectedOption}
            // onChange={handleChange}
            className="rounded shadow-md text-gray-900 text-sm  border-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {rewardOptions?.map((data, i) => (
              <>
                <option
                  className="font-semibold text-[#000000B2]"
                  key={i}
                  value={data?.value}
                >
                  {data?.label}
                </option>
              </>
            ))}
          </select>
        </div>
        <div className="input-container">
          <label>Choose Reward Value</label>
          <input type="text" name="" id="" className="input" placeholder="" />
        </div>
        <div className="input-container">
          <label>Add Expiration Date</label>
          <input type="text" name="" id="" className="input" placeholder="" />
        </div>
      </div>
      <div className="flex-center">
        <button className="menuButton" onClick={() => setSuccess(true)}>
        See Promotion Preview
        </button>
      </div>
      <DialogDefault open={openSuccess} handleOpen={setSuccess}>
            <AwardOffer handleOpen={setSuccess} />
      </DialogDefault>
    </div>
  )
}

export default TargetPoints
