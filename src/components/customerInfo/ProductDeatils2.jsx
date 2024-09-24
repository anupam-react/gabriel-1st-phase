import React, { useState } from "react";
import "./index.scss";
import { DialogDefault } from "../common/DilogBox";
import InventoryProduct from "./InventoryProduct";
import { getDateFromISOString } from "../../utiils";
const ProductDetails2 = ({ handleOpen , data }) => {
  const [openProduct, setProduct] = useState(false);
  return (
    <div className="details-container">
      <p className="details-title">Product Details</p>
      <img
        src="./Mask group (2).png"
        alt=""
        className="cross-image2"
        onClick={() => handleOpen(false)}
      />
      <img src={data?.image || "../image 713 (1).png"} alt="" className="details-image2 cursor-pointer"  onClick={()=>setProduct(true)}/>
      <div className="border-dashed border w-full border-black"></div>
      <div className="details-info">
        <div className="info2 text-[#121212] font-bold">
          <p>Description</p>
          <p>Details</p>
        </div>
        <div className="border-dashed border border-[#A5A5A5] my-2"></div>
        <div className="info2 text-[#8F8F8F]">
          <p>Product</p>
          <p>{data?.name}</p>
        </div>
        <div className="info2 text-[#8F8F8F]">
          <p>Price</p>
          <p>£{data?.price}</p>
        </div>
        <div className="info2 text-[#8F8F8F]">
          <p>Date</p>
          <p>{getDateFromISOString(data?.createdAt)}</p>
        </div>
        <div className="border-dashed border border-[#A5A5A5] my-2"></div>
        <div className='info2'>
          <p>Available in store <span className='pl-4'>:</span></p>
         
          <div className={data?.inStore ? 'bg-[#00B050] w-[20px] h-[20px] rounded-full' : 'bg-[#D9D9D9] w-[20px] h-[20px] rounded-full'}></div>
        </div>
        <div className='info2'>
          <p>Available in online <span className='pl-4'>:</span></p>
          
          <div className={data?.online ? 'bg-[#00B050] w-[20px] h-[20px] rounded-full' : 'bg-[#D9D9D9] w-[20px] h-[20px] rounded-full'}></div>
        </div>
      </div>
      <DialogDefault open={openProduct} handleOpen={setProduct}>
            <InventoryProduct isProdInfo={true} handleOpen={setProduct}/> 
        </DialogDefault>
    </div>
  );
};

export default ProductDetails2;
