import React, { useState } from "react";
import "./index.scss";
import { DialogDefault } from "../common/DilogBox";

import InventoryProduct from "./InventoryProduct";
const InventoryProduct2 = ({ handleOpen }) => {
  const [isView , setView] = useState()
  const [openDetails , setDetails] = useState()
  const [isSelect , setSelect] = useState(-1)
  const product = [
    {id:1, image:"./Frame 38302.png" , name:"Buy 9 Hot Drinks , Get 1 Free"},
     {id:2, image:"./Frame 38302.png" , name:"Buy 5 Porridges , Get 1 Free"},
    {id:3, image:"./Frame 38302.png" , name:"Collect 5 Stamps and receive next free!"},
  

    ]

  return (
   
    <div className="gift-container">
    <div className="gift-main">
      <p className="title">Inventory</p>
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
    <div className="catalogue">
      <label>Select Product from catalogue</label>
      <div
          className="flex items-center px-6 w-full my-3 h-12 shadow"
          style={{
            backgroundColor: "#FFFFFF",
           
            borderRadius: "12px",
            color: "#8BA3CB",
          }}
        >
          <img src="../image 2 (3).svg" alt="search" className="w-6 h-6" />
          <input
            type="text"
            className="border-none w-full bg-transparent outline-none focus:ring-0 focus:shadow-none focus:border-none"
            placeholder="Search Products  , Ex : Coffee , Donuts etc...."
          />
        </div>
      <div className="grid grid-cols-2 gap-4 catalogue-container">
        {product?.map((d, i)=>(
        <div className="catelogue-main" key={i} onClick={()=> setSelect(i)}>
            <img src={d?.image} alt="" className={isSelect === i  ? "border-4 rounded-xl  border-[#FE903C]" :"" }/>
            
          <p className={isSelect === i  ? "text-[#646464] font-semibold" : "text-[#646464] font-semibold"} style={{ fontSize: "14px" }}>
           {d?.name}
          </p>
        </div>
        ))}
        <p onClick={()=>setDetails(true)} className="text-[#0070BC] text-center pt-[40px] cursor-pointer">Choose New Inventory 
        Product</p>
    
      </div>
    </div>
  
    <div className="flex-center mt-6">
      <button
        className="menuButton4"
        onClick={() => {
          handleOpen(false);
        }}
      >
        Select Product
      </button>
    </div>
    <DialogDefault open={openDetails} handleOpen={setDetails}>
            <InventoryProduct handleOpen={setDetails}/> 
        </DialogDefault>
  </div>
  );
};

export default InventoryProduct2;
