import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import useProductInfo from "../../hooks/useProductInfo";

const ProductDetails = () => {
  const { getProductById, productInfo ,  categoryInfo,
     subCategoryInfo } = useProductInfo();
  const { id } = useParams();

  useEffect(()=>{
     getProductById(id) 
  },[id])
  console.log(productInfo)
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-2xl font-bold">Product Details</p>
        <div
          className="inventory-button2"
          style={{ width: "150px" }}
          onClick={() => navigate("/inventory")}
        >
          <img src="../../Mask group (12).png" alt="" className="w-6 h-6" />
          <p>BACK</p>
        </div>
      </div>
      <div className="loyalty-form-container h-[80vh] overflow-auto">
        <div className="mt-3">
          <p className="text-lg font-semibold">Product Name</p>
          <p className="text-[#00000080]">{productInfo?.name}</p>
        </div>
        <div className="mt-3">
          <p className="text-lg font-semibold pb-2">Product Image</p>
          <img
            src={productInfo?.image}
            alt=""
            className="image-shadow"
          />
        </div>
        <div className="mt-3">
          <p className="text-lg font-semibold">Product Description</p>
          <p className="text-[#00000080]">
          {productInfo?.description}
          </p>
        </div>
        <div className="mt-3">
          <p className="text-lg font-semibold">Allergens</p>
          <p className="text-[#00000080]">
          {productInfo?.allergens}
          </p>
        </div>
        <div className='mt-3'>
              <p className="text-lg font-semibold">Nutrition</p>
              <p className='text-[#00000080]'>{productInfo?.nutrition}</p>
              </div>
        <div className="mt-3">
          <p className="text-lg font-semibold">Product Category</p>
          <p className="text-[#00000080]">{categoryInfo?.name}</p>
        </div>
        <div className="mt-3">
          <p className="text-lg font-semibold">Product Sub-Category</p>
          <p className="text-[#00000080]">{subCategoryInfo?.name}</p>
        </div>
        <div className="mt-3">
          <p className="text-lg font-semibold">SKU</p>
          <p className="text-[#00000080]">{productInfo?.sku}</p>
        </div>
        <div className="mt-3">
          <p className="text-lg font-semibold">Product Price</p>
          <p className="text-[#00000080]">£{productInfo?.price}</p>
        </div>
        <div className="mt-3">
          <p className="text-lg font-semibold">Quantity Available</p>
          <p className="text-[#00000080]">{productInfo?.quantity}</p>
        </div>
        <div className="mt-3">
          <p className="text-lg font-semibold">Dimensions and Weight</p>
          <p className="text-[#00000080]">{productInfo?.dimension}</p>
        </div>
        <div className="mt-3">
          <p className="text-lg font-semibold">Brand Name</p>
          <p className="text-[#00000080]">{productInfo?.brand}</p>
        </div>
        <div className="mt-3">
          <p className="text-lg font-semibold">Shipping Information</p>
          <p className="text-[#00000080]">{productInfo?.shippingInfo}</p>
        </div>
        <div className="mt-3">
          <p className="text-lg font-semibold">Return Policy</p>
          <p className="text-[#00000080]">{productInfo?.returnPolicy}</p>
        </div>
        <div className="mt-3">
          <p className="text-lg font-semibold">Product Color</p>
          <p className="text-[#00000080]">{productInfo?.productColor}</p>
        </div>
        <div className="mt-3">
          <p className="text-lg font-semibold">Product Size</p>
          <p className="text-[#00000080]">{productInfo?.productSize}</p>
        </div>
        <div className="mt-3">
          <p className="text-lg font-semibold">Available Online</p>
          <p className="text-[#00000080]">{productInfo?.online ? "YES" : "NO"}</p>
        </div>
        <div className="mt-3">
          <p className="text-lg font-semibold">Available Instore</p>
          <p className="text-[#00000080]">{productInfo?.inStore ? "YES" : "NO"}</p>
        </div>
        <div className="my-3">
          <p className="text-lg font-semibold">Search Keywords</p>
          <p className="text-[#00000080]">{productInfo?.keywords}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
