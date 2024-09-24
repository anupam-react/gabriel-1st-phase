import React, { useEffect, useRef } from "react";
import "./index.scss";
import useOutlate from "../../hooks/useOutlate";
const SelectRetailer = ({onClose , show , setOutletId , setOutlet}) => {
  const { outlate }= useOutlate();
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
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-50 flex justify-center items-center">
      <div ref={popupRef} className="bg-white p-4 rounded shadow-lg w-[300px]">

   
      <div className="flex items-center px-6 h-16 input-loyalty">
        <img src="./image 2 (3).svg" alt="search" className="w-6 h-6" />
        <input type="text" className="search w-[150px]" placeholder="Search" />
      </div>
      <div className="h-[200px] overflow-auto p-4 flex flex-col gap-6 ">
        {outlate?.docs?.map((d, i)=>(
        <div className="flex justify-between items-center cursor-pointer" key={i} onClick={()=>{
          setOutlet(d?.name)
           setOutletId(d?._id)
           onClose()
           }} >
          <div className="flex gap-6 items-center">
            <img src={d?.image} alt="" className="w-[40px] h-[40px] rounded-full"/>
            <p>{d?.name}</p>
          </div>
        </div>

        ))}
     
      </div>
      </div>
    </div>
  );
};

export default SelectRetailer;
