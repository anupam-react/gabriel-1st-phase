import React from "react";
import "./index.scss";
const CustomizedGift = ({handleOpen}) => {
  return (
    <div className="gift-container no-scrollbar">
      <div className="gift-main">
        <p className="title">Send Customized Birthday Offer</p>
        <img
          src="./Mask group (2).png"
          alt=""
          className="cross-image"
          onClick={() => {handleOpen(false)}}
        />
      </div>
      <hr className="hr" />
      <div className="form-container">
        <div className="input-container">
          <label>Choose Promotion Type</label>
          <select
            id="countries"
            // value={selectedOption}
            // onChange={handleChange}
            className="rounded shadow-md text-gray-900 text-sm  border-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option className="font-semibold">Percentage Discount</option>
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
          <textarea id="w3review" name="w3review" rows="4" cols="50" className="input" />
        </div>
        <div className="input-container">
          <label>Enter Birthday Meassage!</label>
          <input
            type="text"
            name=""
            id=""
            className="input"
            placeholder="Happy Birthday !!"
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
            <option className="font-semibold">Points</option>
          </select>
        </div>
        <div className="input-container">
          <label>Choose Reward Value</label>
          <input
            type="text"
            name=""
            id=""
            className="input"
            placeholder=""
          />
        </div>
          </div>
          <div className="flex-center">
           <button className="menuButton">See Promotion preview</button>
              
          </div>
    </div>
  );
};

export default CustomizedGift;
