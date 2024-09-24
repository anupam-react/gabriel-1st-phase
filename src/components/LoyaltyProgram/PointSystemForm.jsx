import React, { useState } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { DialogDefault } from "../common/DilogBox";
import Select from "react-select";
import usePointSystem from "../../hooks/usePointSystem";
const PointSystemForm = () => {
  const [openSuccess, setSuccess] = useState(false);
  const navigate = useNavigate();
 const {
  setSubCategoryId,
  category,
  subcategory,
  selectedCat,
  selectedSubCat,
   setSubCat,
  handleCategory,
  handlePoint
 } = usePointSystem()

  return (
    <div>
      <p className="loyalty-form-header">
        Attach Point System to your products
      </p>
      <div className="loyalty-form-container">
        <div className="mt-4">
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Choose Product Category</p>
          <Select
            className="input-loyalty2"
            styles={{ width: "20px" }}
            value={selectedCat}
            options={category?.map((user) => ({
              value: user._id,
              label: user?.name,
            }))}
            defaultValue={category?.[0]?._id}
            onChange={handleCategory}
            placeholder=""
          />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Choose Product sub-category</p>
          <Select
            className="input-loyalty2"
            styles={{ width: "20px" }}
            value={selectedSubCat}
            options={subcategory?.map((user) => ({
              value: user._id,
              label: user?.name,
            }))}
            defaultValue={subcategory?.[0]?._id}
            onChange={(e) => {
              setSubCat(e);
              setSubCategoryId(e.value);
            }}
          />
        </div>
         
        </div>
        <div className="loyalty-button-container">
          <button
            className="loyalty-button2"
            onClick={() => {
             navigate("/loyalty")
       
            }}
          >
            Back
          </button>
          <button
            className="loyalty-button1"
            onClick={() => {
              handlePoint()
              setSuccess(true);
              setTimeout(()=> {
                navigate("/loyalty")
              }, 1000)
            }}
          >
           Attach Point System
          </button>
        </div>
      </div>
      <DialogDefault open={openSuccess} handleOpen={setSuccess}>
        <div className="alert2">
          <img src="../../Vector (2).png" alt="" />
          <p>
          Point System is now attached to your products. Your customers can now pay and earn points.
          </p>
        </div>
      </DialogDefault>
    </div>
  );
};

export default PointSystemForm;
