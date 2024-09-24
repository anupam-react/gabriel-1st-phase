import React, { useState } from "react";
import "./index.scss";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { DatePickerComp2 } from "../customerInfo/DatePickerComp2";

import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import "./SliderRangeFilter.css";
import { formatDate2 } from "../../utiils";
import SelectRetailer from "../PromoCode/SelectRetailer";
import SelectItem from "../PromoCode/SelectItem";


// import AddProfile from "./AddProfile";
const PurchasesFilter = ({
  closeDrawer,
  open,
  getPurchasesApp,
  getPurchasesStore,
}) => {
  
  const [openRetailer, setOpenRetailer] = useState(false);
  const [openItem, setOpenItem] = useState(false);
  const [range, setRange] = useState([0, 5000]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [productId, setProductId] = useState(false);
  const [outletId, setOutletId] = useState(false);
  const [productInfo , setProductInfo] = useState()
  const [outletInfo , setOutletInfo] = useState()

  const handleRangeChange = (newRange) => {
    setRange(newRange);
    console.log("Selected range: ", newRange);
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
                    WEEKLY
                  </option>
                  <option className="font-semibold" value="custom">
                    MONTHLY
                  </option>
                  <option className="font-semibold" value="custom">
                    YEARLY
                  </option>
                  <option className="font-semibold" value="custom">
                    CUSTOM
                  </option>
                </select>
              </div>
              <div className="calender">
                <div>
                  <p>From</p>
                  <DatePickerComp2
                    startDate={startDate}
                    setStartDate={setStartDate}
                  />
                </div>
                <div>
                  <p>To</p>
                  <DatePickerComp2
                    startDate={endDate}
                    setStartDate={setEndDate}
                  />
                </div>
              </div>

              <div className="mt-4">
                <p className="text-lg font-semibold pb-4">Amount</p>

                <div class="relative mb-10">
                  <div class="relative mb-10">
                    <div className="flex items-center gap-2">
                      <span className="text-[#000000B2] text-[14px] font-[500]">
                        Min.
                      </span>
                      <Slider
                        range
                        min={0}
                        max={5000}
                        value={range}
                        onChange={handleRangeChange}
                        allowCross={false}
                      />
                      <span className="text-[#000000B2] text-[14px] font-[500]">
                        Max
                      </span>
                    </div>

                    <span className="text-sm text-black dark:text-gray-400 absolute start-0 -bottom-8 font-[500]">
                      0
                    </span>
                    <span className="text-sm text-black font-[500] dark:text-gray-400 absolute start-1/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-8">
                      £100
                    </span>
                    <span className="text-sm text-black font-[500] dark:text-gray-400 absolute start-2/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-8">
                      £500
                    </span>
                    <span className="text-sm text-black font-[500] dark:text-gray-400 absolute start-3/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-8">
                      £1,000
                    </span>
                    <span className="text-sm text-black font-[500] dark:text-gray-400 absolute end-0 -bottom-8">
                      £5,000
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-10 ">
                <p className="text-lg font-semibold pb-4">Outlet</p>
                <div
                  className="relative"
                  onClick={() => {
                    setOpenRetailer(!openRetailer);
                  }}
                >
                  <input
                    id="countries"
                    placeholder="Outlet"
                    value={outletInfo}
                    className="rounded shadow-md mb-4 cursor-pointer bg-[#EEEEEE80] text-sm  border-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />

                  <img
                    src="../Arrow 10.png"
                    alt=""
                    className="absolute top-3 right-2 cursor-pointer"
                  />
                </div>
                <div
                  className="relative"
                  onClick={() => {
                    setOpenItem(true);
                  }}
                >
                  <input
                    id="countries"
                    placeholder="Select Item"
                    value={productInfo}
                    className="rounded shadow-md mb-4 cursor-pointer bg-[#EEEEEE80] text-sm  border-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />

                  <img
                    src="../Arrow 10.png"
                    alt=""
                    className="absolute top-3 right-2 cursor-pointer"
                  />
                </div>

                {openRetailer && (
                  <SelectRetailer
                    onClose={() => setOpenRetailer(false)}
                    show={openRetailer}
                    setOutletId={setOutletId}
                    setOutlet={setOutletInfo}
                    
                  />
                )}
                {openItem && (
                  <SelectItem
                    onClose={() => setOpenItem(false)}
                    show={openItem}
                    setProductId={setProductId}
                    setProductInfo={setProductInfo}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="button-container">
            <button
              className="button2"
              onClick={() => {
                getPurchasesApp(
                  "",
                  formatDate2(startDate),
                  formatDate2(endDate),
                  1,
                  1000,
                  range[0],
                  range[1],
                  productId,
                  outletId
                );
                getPurchasesStore(
                  "",
                  formatDate2(startDate),
                  formatDate2(endDate),
                  1,
                  1000,
                  range[0],
                  range[1],
                  productId,
                  outletId
                );
                closeDrawer();
              }}
            >
              APPLY
            </button>
            <button
              className="button4"
              onClick={() => {
                getPurchasesApp();
                getPurchasesStore()
                closeDrawer();
              }}
            >
              RESET
            </button>
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default PurchasesFilter;
