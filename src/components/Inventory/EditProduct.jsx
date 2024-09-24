import React, { useEffect, useState } from "react";
import "./index.scss";
import { useNavigate, useParams } from "react-router-dom";
import { DialogDefault } from "../common/DilogBox";
import useProduct from "../../hooks/useProduct";
import Select from "react-select";
import useOutlate from "../../hooks/useOutlate";
const EditProduct = () => {
  const {   name, setName,
    image, setImage,
    description, setDescription,
    allergens, setAllergens,
    nutrition, setNutrition,
    sku, setSku,
    price, setPrice,
    brand, setBrand,
    quantity, setQuantity,
    shippingInfo, setShippingInfo,
    returnPolicy, setReturnPolicy,
    productColor, setProductColor,
    productSize, setProductSize,
    online, setOnline,
    inStore, setInStore,
    keywords, setKeywords,
    dimension, setDimension,
    setSubCategoryId,
    selectedSubCat, setSubCat,
    openSuccess, setSuccess,
    handleOutlate,
    handleCategory,
    category,
    subcategory,
    selectedOutlate,
    selectedCat,
    productInfo,
    getProductById,
    handleUpdateProduct} = useProduct()
    const {outlate} = useOutlate()


  const navigate = useNavigate();

  const {id} = useParams()

  useEffect(() => {
   getProductById(id)
  }, [id])
  
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-2xl font-bold">Editing Product</p>
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
      <div className="loyalty-form-container h-[80vh] overflow-auto">
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Select Outlet</p>
          <Select
            isMulti
            name="colors"
            className="basic-multi-select"
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
          <p className="text-lg font-semibold pb-2">Product Name</p>
          <input
            type="text"
            className="input-loyalty2"
            value={name || productInfo?.name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Product Decription</p>
          <textarea
            className="input-loyalty2"
            value={description || productInfo?.description}
            onChange={(e) => setDescription(e.target.value)}
            name=""
            id=""
            rows="3"
          ></textarea>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Allergens</p>
          <textarea
            className="input-loyalty2"
            value={allergens || productInfo?.allergens}
            onChange={(e) => setAllergens(e.target.value)}
            name=""
            id=""
            rows="3"
          ></textarea>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Nutrition</p>
          <textarea
            className="input-loyalty2"
            value={nutrition || productInfo?.nutrition}
            onChange={(e) => setNutrition(e.target.value)}
            name=""
            id=""
            rows="3"
          ></textarea>
        </div>

        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Upload Product Image</p>
          <div className="input-loyalty2">
            <label
              for="dropzone-file"
              className="flex justify-end bg-white  shadow rounded-md w-full "
              onChange={(event) => setImage(event.target.files[0])}
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
          <p className="text-lg font-semibold pb-2">Product Category</p>
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
          <p className="text-lg font-semibold pb-2">Product Sub- Category</p>
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
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">SKU</p>
          <input
            type="text"
            className="input-loyalty2"
            value={sku || productInfo?.sku}
            onChange={(e) => setSku(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Product Price</p>
          <input
            type="text"
            className="input-loyalty2"
            value={price || productInfo?.price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Quantity Available</p>
          <input
            type="text"
            className="input-loyalty2"
            value={quantity || productInfo?.quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Dimensions and Weight</p>
          <input
            type="text"
            className="input-loyalty2"
            value={dimension || productInfo?.dimension}
            onChange={(e) => setDimension(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Brand Name</p>
          <input
            type="text"
            className="input-loyalty2"
            value={brand || productInfo?.brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Shipping Information</p>
          <input
            type="text"
            className="input-loyalty2"
            value={shippingInfo || productInfo?.shippingInfo}
            onChange={(e) => setShippingInfo(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Return Policy</p>
          <input
            type="text"
            className="input-loyalty2"
            value={returnPolicy || productInfo?.returnPolicy}
            onChange={(e) => setReturnPolicy(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Product Color</p>
          <input
            type="text"
            className="input-loyalty2"
            value={productColor || productInfo?.productColor}
            onChange={(e) => setProductColor(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Product Size</p>
          <input
            type="text"
            className="input-loyalty2"
            value={productSize || productInfo?.productSize}
            onChange={(e) => setProductSize(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <div className="flex gap-1">
            <p className="text-lg font-semibold pb-2">Available Online </p>
            <p className="dots"></p>
          </div>
          <select
            id="countries"
            value={online || productInfo?.online}
            onChange={(e) => setOnline(e.target.value)}
            className="input-loyalty2"
          >
            <option className="font-semibold" value="yes">
              Yes
            </option>
            <option className="font-semibold" value="no">
              No
            </option>
          </select>
        </div>
        <div className="mt-4">
          <div className="flex gap-1">
            <p className="text-lg font-semibold pb-2">Available Instore</p>
            <p className="dots"></p>
          </div>
          <select
            id="countries"
            value={inStore || productInfo?.inStore}
            onChange={(e) => setInStore(e.target.value)}
            className="input-loyalty2"
          >
            <option className="font-semibold" value="yes">
              Yes
            </option>
            <option className="font-semibold" value="no">
              No
            </option>
          </select>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Search Keywords</p>
          <textarea
            className="input-loyalty2"
            value={keywords || productInfo?.keywords}
            onChange={(e) => setKeywords(e.target.value)}
            name=""
            id=""
            rows="3"
          ></textarea>
        </div>
        <div className="loyalty-button-container">
          <button
            className="loyalty-button2"
            onClick={() => {
              navigate("/inventory");
            }}
          >
            Back
          </button>
          <button
            className="loyalty-button1"
            style={{ width: "150px" }}
            onClick={handleUpdateProduct}
          >
            Submit
          </button>
        </div>
      </div>

      <DialogDefault open={openSuccess} handleOpen={setSuccess}>
        <div className="alert">
          <img src="../Vector (2).png" alt="" />
          <p className="text-center text-lg">Product Edited successfully</p>
        </div>
      </DialogDefault>
    </div>
  );
};

export default EditProduct;
