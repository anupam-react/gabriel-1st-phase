import React, { useState } from "react";
import "./index.scss";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { DatePickerComp2 } from "../customerInfo/DatePickerComp2";
import InventoryProfile from "./InventoryProfile";
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './SliderRangeFilter.css';
import { formatDate2 } from "../../utiils";
const InventoryFilter = ({ closeDrawer, open , range,
  setRange,
  range1,
  setRange1,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  setOpenCustom,
  openCustom,
  selectedOption,
  setSelectedOption,
  getProduct 
}) => {
  const [openProfile, setOpenProfile] = useState(false);

  const MonthOptions = [
    { label: "WEEKLY", value: "weekly" },
    { label: "MONTHLY", value: "month" },
    { label: "YEARLY", value: "year" },
    { label: "CUSTOM", value: "custom" },
  ];

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value === "custom") {
      setOpenCustom(true);
    }else{
      getProduct(event.target.value)
    }
  };


  const handleRangeChange = (newRange) => {
    setRange(newRange);
    console.log('Selected range: ', newRange);
  };

  const handleRangeChange1 = (newRange) => {
    setRange1(newRange);
    console.log('Selected range: ', newRange);
  };
  return (
    <React.Fragment>
      <Drawer
        open={open}
        onClose={closeDrawer}
        direction="right"
        className="bla bla bla"
        size={400}
      >
        <div className="filterContainer">
          <div className="filter-body no-scrollbar">
            <div className="mb-6 flex items-center justify-between">
              <div onClick={closeDrawer}>
                <img
                  src="./Mask group (2).png"
                  alt=""
                  className="w-10 cursor-pointer"
                />
              </div>
              <h5 className="text-xl font-semibold">Filter</h5>
              <div onClick={closeDrawer}>
                <img
                  src="./close-outline 1.svg"
                  alt=""
                  className="w-10 cursor-pointer"
                />
              </div>
            </div>
            <hr className="my-4" style={{ backgroundColor: "#E3E3E5" }} />
            <div className="p-2">
              <div className="mt-4">
                <p className="text-lg font-semibold pb-4">Date Range</p>
                <select
                  id="countries"
                  // value={selectedOption}
                  // onChange={handleChange}
                  className="input-loyalty"
                >
                  <option className="font-semibold" value="custom">
                    CUSTOM
                  </option>
                </select>
              </div>
              <div className="calender">
                <div>
                  <p>From</p>
                  <DatePickerComp2 startDate={startDate} setStartDate={setStartDate}/>
                </div>
                <div>
                  <p>To</p>
                  <DatePickerComp2 startDate={endDate} setStartDate={setEndDate}/>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-lg font-semibold pb-4">Pricing</p>
              
                <div class="relative mb-8">
        
        <div className="flex items-center gap-2">
         {/* <span className="text-[#000000B2] text-[14px] font-[500]">Min.</span> */}
           <Slider range  min={0} max={10000} value={range} onChange={handleRangeChange} allowCross={false}/>
           {/* <span className="text-[#000000B2] text-[14px] font-[500]">Max</span> */}
        </div>
  
 <span className="text-sm text-black dark:text-gray-400 absolute start-0 -bottom-8 font-[500]">
               0
             </span>
             <span className="text-sm text-black font-[500] dark:text-gray-400 absolute start-1/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-8">
               £500
             </span>
             <span className="text-sm text-black font-[500] dark:text-gray-400 absolute start-2/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-8">
               £1000
             </span>
             <span className="text-sm text-black font-[500] dark:text-gray-400 absolute start-3/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-8">
               £5,000
             </span>
             <span className="text-sm text-black font-[500] dark:text-gray-400 absolute end-0 -bottom-8">
               £10,000
             </span>
 </div>
              </div>
              <div className="mt-[60px] relative">
                <p className="text-lg font-semibold pb-4">Category</p>
                <div className="flex items-center px-6 h-12 input-loyalty cursor-pointer" onClick={() => setOpenProfile(!openProfile)}>
                  <img
                    src="./image 2 (3).svg"
                    alt="search"
                    className="w-6 h-6"
                  />
                  <input type="text" className="search" placeholder="Search" />
                </div>
                {openProfile && <InventoryProfile />}
              </div>
              {/* <div className="mt-4 relative flex gap-4 text-sm">
                <div className="flex gap-4 items-center pl-6 h-12 input-loyalty">
                  <p>Lorem Ipsum</p>
                  <img src="./image 675.png" alt="search" className="w-6 h-6" />
                </div>
                <div className="flex gap-4 items-center pl-6 h-12 input-loyalty">
                  <p>Lorem Ipsum</p>
                  <img src="./image 675.png" alt="search" className="w-6 h-6" />
                </div>
              </div>
              <div
                className="mt-6 cursor-pointer flex justify-center items-center gap-3 rounded-lg py-2 border border-[#0070BC] text-[#0070BC]"
                
              >
                <img src="./Mask group (10).png" alt="" className="w-7 h-7" />
                <p className="font-semibold text-lg">ADD</p>
              </div> */}
              <div className="mt-8">
                <p className="text-lg font-semibold pb-4">Stock Availibiity</p>
                <div class="relative mb-8">
        
        <div className="flex items-center gap-2">
         {/* <span className="text-[#000000B2] text-[14px] font-[500]">Min.</span> */}
           <Slider range  min={0} max={100} value={range1} onChange={handleRangeChange1} allowCross={false}/>
           {/* <span className="text-[#000000B2] text-[14px] font-[500]">Max</span> */}
        </div>
  
        <span className="text-sm font-[500] text-black dark:text-gray-400 absolute start-0 -bottom-9">
                    0%
                  </span>
                  <span className="text-sm font-[500] text-black dark:text-gray-400 absolute start-1/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-9">
                    20%
                  </span>
                  <span className="text-sm font-[500] text-black dark:text-gray-400 absolute start-2/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-9">
                    50%
                  </span>
                  <span className="text-sm font-[500] text-black dark:text-gray-400 absolute start-3/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-9">
                    80%
                  </span>
                  <span className="text-sm font-[500] text-black dark:text-gray-400 absolute end-0 -bottom-9">
                    100%
                  </span>
 </div>
            
              </div>

           
            </div>
          </div>
          <div className="button-container">
            <button
              className="button2"
                onClick={() => {
                 getProduct("",formatDate2(startDate), formatDate2(endDate), 1,1000, range1[0], range1[1], range[0], range[1])
                  closeDrawer()
                }}
            >
              APPLY
            </button>
            <button
              className="button4"
              onClick={closeDrawer}
            >
              RESET
            </button>
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default InventoryFilter;
