import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import CatalogueProduct from "../customerInfo/CatalogueProduct";
import usePoints from "../../hooks/usePoints";
import useOutlate from "../../hooks/useOutlate";
import Select from "react-select";
const PointForm = () => {
  const { outlate } = useOutlate();
  const {
    description,
    setDescription,
    title,
    setTitle,
    image,
    setImage,
    termAndCondition,
    setTermAndCondition,
    noOfPoint, setNoOfPoint,
    setProductId,
    selectedOutlate,
    handleOutlate,
    handleMyPoints,
  } = usePoints();

  const navigate = useNavigate()

  return (
    <div>
      <p className="loyalty-form-header">Spent My Points</p>
      <div className="loyalty-form-container">
        <div className="catalogue mt-4">
          <p className="text-lg font-semibold pb-2">
            Select Product from catalogue
          </p>
          <CatalogueProduct  setProductId={setProductId}/>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Upload product photo</p>
          <div className="input-loyalty2">
            <label
              for="dropzone-file"
              className="flex justify-end bg-white  shadow rounded-md w-full "
              onChange={(event)=> setImage(event.target.files[0])}
            >
              {image?.name}
              <div className="upload-file">
                <p className="text-sm">UPLOAD</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Product Name</p>
          <input type="text" className="input-loyalty2" value={title} onChange={(e)=>setTitle(e.target.value)} />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Description</p>
          <textarea
            className="input-loyalty2"
            value={description} onChange={(e)=>setDescription(e.target.value)}
            name=""
            id=""
            rows="3"
          ></textarea>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">No. of points</p>
          <input type="text" className="input-loyalty2" value={noOfPoint} onChange={(e)=>setNoOfPoint(e.target.value)} />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Choose outlet</p>
          <Select
           
            isMulti

            className="input-loyalty2"
            classNamePrefix="select"
            value={selectedOutlate}
            options={outlate?.docs?.map((user) => ({
              value: user._id,
              label: user?.name,
            }))}
            defaultValue={outlate?.docs?.[0]?._id}
            onChange={handleOutlate}
            placeholder="Ex : Outlet - 01 , Outlet - 02"
          />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">T&Cs</p>
          <input
            type="text"
            className="input-loyalty2"
            value={termAndCondition} onChange={(e)=>setTermAndCondition(e.target.value)}
          />
        </div>
        <div className="loyalty-button-container">
          <button
            className="loyalty-button2"
            onClick={() => {
              navigate("/loyalty");
            }}
          >
            Back
          </button>
          <button
            className="loyalty-button1"
            onClick={handleMyPoints}
          >
            See Spend My Points Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default PointForm;
