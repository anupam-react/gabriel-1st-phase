import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import CatalogueProduct from "../customerInfo/CatalogueProduct";
import useOutlate from "../../hooks/useOutlate";
import useSaving from "../../hooks/useSaving";
import Select from "react-select";
const SavingForm = ({ isReview = false }) => {
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
    price,
    setPrice,
    setProductId,
    selectedOutlate,
    handleOutlate,
    handleMySaving,
  } = useSaving();
  const navigate = useNavigate();

  return (
    <div>
      <p className="loyalty-form-header">
        {!isReview ? "Make a Saving" : "Make a Saving Review"}
      </p>
      <div className="loyalty-form-container">
        {!isReview && (
          <div className="catalogue mt-4">
            <p className="text-lg font-semibold pb-2">
              Select Product from catalogue
            </p>
            <CatalogueProduct setProductId={setProductId}/>
          </div>
        )}
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
          <p className="text-lg font-semibold pb-2">Title</p>
          <input
            type="text"
            className="input-loyalty2"
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Description</p>
          <textarea
            className="input-loyalty2"
            value={description}
            onChange={(e)=> setDescription(e.target.value)}
            name=""
            id=""
            rows="3"
          ></textarea>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Price</p>
          <input type="text" className="input-loyalty2"   value={price}
            onChange={(e)=> setPrice(e.target.value)}/>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Choose outlet</p>
          <Select
            // defaultValue={[colourOptions[2], colourOptions[3]]}
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
            value={termAndCondition}
            onChange={(e)=> setTermAndCondition(e.target.value)}
          />
        </div>
        <div className="loyalty-button-container">
          <button
            className="loyalty-button2"
            onClick={() => {
              !isReview ? navigate("/loyalty") : navigate("/loyalty/saving");
            }}
          >
            Back
          </button>
          <button
            className="loyalty-button1"
            onClick={handleMySaving}
          >
            {!isReview
              ? "See Make a Saving review"
              : "See Make a Saving Preview"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SavingForm;
