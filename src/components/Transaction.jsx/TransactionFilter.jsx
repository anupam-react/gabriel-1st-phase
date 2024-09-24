import React, { useState } from "react";
import  "../PromoCode/index.scss";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { DatePickerComp2 } from "../customerInfo/DatePickerComp2";

import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './SliderRangeFilter.css';

// import AddProfile from "./AddProfile";
const TransactionFilter = ({ closeDrawer, open }) => {
  const [range, setRange] = useState([10, 60]);

  const handleRangeChange = (newRange) => {
    setRange(newRange);
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
            <div className="mt-4">
                <p className="text-lg font-semibold pb-4">Amount</p>
                <div class="relative mb-10">
              
                
                  <Slider range  min={0} max={100} value={range} onChange={handleRangeChange} allowCross={false}/>
                  <span className="text-sm font-[500] text-black dark:text-gray-400 absolute start-0 -bottom-8">
                    0
                  </span>
                  <span className="text-sm font-[500] text-black dark:text-gray-400 absolute start-1/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-8">
                    £100
                  </span>
                  <span className="text-sm font-[500] text-black dark:text-gray-400 absolute start-2/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-8">
                    £500
                  </span>
                  <span className="text-sm font-[500] text-black dark:text-gray-400 absolute start-3/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-8">
                    £1,000
                  </span>
                  <span className="text-sm font-[500] text-black dark:text-gray-400 absolute end-0 -bottom-8">
                    £5,000
                  </span>
                </div>
              </div>
              <div className="calender" style={{ marginTop: "60px" }}>
                <div>
                  <p>From</p>
               <input type="text" placeholder="£100" className='rounded-md shadow border-none date' />
                </div>
                <div>
                  <p>To</p>
                  <input type="text" placeholder="£1,000" className='rounded-md shadow border-none date' />
                </div>
              </div>
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
                  <DatePickerComp2 />
                </div>
                <div>
                  <p>To</p>
                  <DatePickerComp2 />
                </div>
              </div>

            
              
            </div>
          </div>
          <div className="button-container">
            <button
              className="button2"
              //   onClick={() => {
              //     setOpenAlert(true);
              //   }}
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

export default TransactionFilter;
