import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import useProduct from "../../hooks/useProduct";
const SelectItem = ({onClose , show , setProductId , setProductInfo}) => {
  const{ product , getProduct} = useProduct()
  const [searchTerm, setSearchTerm] = useState("");
  const popupRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show, onClose]);

  return (
    <div  className="fixed inset-0 bg-gray-600 bg-opacity-50 z-50 flex justify-center items-center">
        <div ref={popupRef} className="bg-white p-4 rounded shadow-lg w-[300px]">
      <div className="flex items-center px-6 h-16 input-loyalty">
        <img src="./image 2 (3).svg" alt="search" className="w-6 h-6" />
        <input type="text" className="search w-[150px]" placeholder="Search" value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              getProduct(e.target.value);
            }}/>
      </div>
      <div className="h-[200px] overflow-auto p-4 flex flex-col gap-6 no-scrollbar">
        {product?.docs?.map((data , i)=>(
        <div className="flex justify-between items-center cursor-pointer" key={i} onClick={()=>{
          setProductInfo(data?.name)
           setProductId(data?._id)
           onClose()
           }}>
          <div className="flex gap-4 items-center">
            <p>{data?.name}</p>
            <p className="text-[#0070BC]">#{data?._id}</p>
          </div>
        </div>

        ))}
      
      </div>
      </div>
    </div>
  );
};

export default SelectItem;
