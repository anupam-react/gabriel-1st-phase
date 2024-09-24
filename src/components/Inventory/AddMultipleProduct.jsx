import React, { useState } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { DialogDefault } from "../common/DilogBox";
import Select from "react-select";
const AddMultipleProduct = () => {
  const [openSuccess, setSuccess] = useState(false);
  const [openSuccess1, setSuccess1] = useState(false);
  const [openUploadImage, setUploadImage] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 1000);
    setTimeout(() => {
      setSuccess1(true);
    }, 2000);
    setTimeout(() => {
      setSuccess1(false);
      navigate("/inventory");
    }, 3000);
  };
  const options = [
    { value: "Outlet -  01", label: "Outlet -  01" },
    { value: "Outlet -  02", label: "Outlet -  02" },
    { value: "Outlet -  03", label: "Outlet -  03" },
    { value: "Outlet -  04", label: "Outlet -  04" },
    { value: "Outlet -  05", label: "Outlet -  05" },
  ];
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-2xl font-bold">Adding Product</p>
        <div
          className="flex items-center px-6 h-12"
          style={{
            backgroundColor: "#FFFFFF",
            width: "20rem",
            borderRadius: "12px",
            color: "#8BA3CB",
          }}
        >
          <img src="../../image 2 (3).svg" alt="search" className="w-6 h-6" />
          <input
            type="text"
            className="border-none w-48 bg-transparent outline-none focus:ring-0 focus:shadow-none focus:border-none"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="w-[80vw] overflow-x-scroll no-scrollbar">
        <table className="table2">
          <thead>
            <tr>
              <th>Outlet</th>
              <th>Product Name</th>
              <th>Product Image</th>
              <th>Description</th>
              <th>Allergies</th>
              <th>Nutrition</th>
              <th>Product Images</th>
              <th>Product Category</th>
              <th>SKU</th>
              <th>Product Price</th>
              <th>Quantity Available</th>
              <th>Dimensions and Weight</th>
              <th>Brand Name</th>
              <th>Shipping Infomation</th>
              <th>Return Policy</th>
              <th>Product Color</th>
              <th>Product Size</th>
              <th>Available Online</th>
              <th>Search Keywords</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td>
                <button className="upload-bttn" onClick={()=>setUploadImage(true)}>Upload</button>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
         
            </tr>
          </tbody>
        </table>
        <div className="flex justify-center mt-[50px]">

        <button className="inventory-button2"  onClick={handleSubmit}>Update & Save Product</button>
        </div>
      </div>
      <DialogDefault open={openUploadImage} handleOpen={setUploadImage}>
        <div className="p-6">
            <div className="flex justify-center items-center">
                <img src="../Vector (40).png" alt="" className="cursor-pointer" onClick={()=>setUploadImage(false)}/>
            </div>
            <div className="flex justify-around mt-4">
            <div className="flex gap-2 cursor-pointer"  onClick={()=>setUploadImage(false)}>
                <img src="../Vector (41).png" alt="" />
                <p className="underline text-black font-[500]">Browse Image</p>
            </div>
            <div className="flex gap-2 cursor-pointer"  onClick={()=>setUploadImage(false)}>
                <img src="../solar_gallery-bold.png" alt="" />
                <p className="underline text-black font-[500]">Open Gallery</p>
            </div>

            </div>
        </div>
      </DialogDefault>
      <DialogDefault open={openSuccess} handleOpen={setSuccess}>
        <div className="alert">
          <img src="../../Vector (2).png" alt="" />
          <p className="text-center text-lg">
            Your inventory is under review. We will get back in touch to let you
            when it is live.
          </p>
        </div>
      </DialogDefault>
      <DialogDefault open={openSuccess1} handleOpen={setSuccess1}>
        <div className="alert">
          <img src="../../Vector (2).png" alt="" />
          <p className="text-center text-lg">
            Congratulations! Your inventory is now Live
          </p>
        </div>
      </DialogDefault>
    </div>
  );
};

export default AddMultipleProduct;
