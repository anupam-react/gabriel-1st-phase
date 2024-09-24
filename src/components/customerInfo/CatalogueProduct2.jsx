import React, { useEffect, useRef, useState } from "react";
import { DialogDefault } from "../common/DilogBox";
import ProductDetails from "./ProductDetails";
import InventoryProduct2 from "./InventoryProduct2";

const CatalogueProduct2 = () => {
  const [isView , setView] = useState()
  const [openView , setOpenView] = useState()
  const [isSelect , setSelect] = useState()
  const [openDetails , setDetails] = useState()

  const divRef = useRef(null);
  const product = [
    {id:1, image:"../Frame 38302.png" , name:"Buy 9 Hot Drinks , Get 1 Free"},
     {id:1, image:"../Frame 38302.png" , name:"Buy 5 Porridges , Get 1 Free"},

    ]
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (divRef.current && !divRef.current.contains(event.target)) {
          setView(-1);
        }
      };
  
      if (isView !== -1) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isView]);
  return (
    <div className="catalogue-container">
      <p className="view-all cursor-pointer" onClick={()=> setOpenView(true)} >View All</p>
      <div className="catalogue-flex">
        {product?.map((d, i)=>(
        <div className="catelogue-main" key={i} onClick={()=> setSelect(i)}>
          <img src={d?.image} alt="" className={isSelect === i  ? "border-4 rounded-xl  border-[#FE903C]" :"" }/>
          <p className={isSelect === i  ? "text-[#646464] font-semibold" : "text-[#646464] font-semibold"} >
           {d?.name}
          </p>
        </div>

        ))}
      {/* <LoyalityCard image="./Frame 38302.png" text="Buy 9 Hot Drinks , Get 1 Free" />
      <LoyalityCard image="./Frame 38302.png" text="Buy 5 Porridges , Get 1 Free" /> */}
      </div>
      <DialogDefault open={openView} handleOpen={setOpenView}>
            <InventoryProduct2 handleOpen={setOpenView}/> 
        </DialogDefault>
      <DialogDefault open={openDetails} handleOpen={setDetails}>
            <ProductDetails handleOpen={setDetails}/> 
        </DialogDefault>
    </div>
  );
};

export default CatalogueProduct2;
