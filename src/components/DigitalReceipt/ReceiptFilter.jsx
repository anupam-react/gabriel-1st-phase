import React from "react";
import "./index.scss";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { DatePickerComp2 } from "../customerInfo/DatePickerComp2";
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './SliderRangeFilter.css';
import DatePickerComp from "../common/DatePickerComp";
import { DialogDefault } from "../common/DilogBox";
import { formatDate2 } from "../../utiils";


const ReceiptFilter = ({ setIsOpen, open , range, setRange ,startDate, setStartDate,endDate, setEndDate, startDate1, setStartDate1,endDate1, setEndDate1,openCustom ,selectedOption1, setSelectedOption1, setOpenCustom,selectedOption, setSelectedOption, getDigitalReceiptByToken }) => {

  const handleCheckboxChange = (group) => {
    setSelectedOption(group);
  };

  const handleOpen = () => setOpenCustom(!open);

  const handleRangeChange = (newRange) => {
    setRange(newRange);
    console.log('Selected range: ', newRange);
  };


  const MonthOptions = [
    { label: "WEEKLY", value: "weekly" },
    { label: "MONTHLY", value: "month" },
    { label: "YEARLY", value: "year" },
    { label: "CUSTOM", value: "custom" },
  ];

  const handleChange = (event) => {
    setSelectedOption1(event.target.value);
    if (event.target.value === "custom") {
      setOpenCustom(true);
    }else{
      getDigitalReceiptByToken(event.target.value)
    }
  };
  return (
    <React.Fragment>
      <Drawer
        open={open}
        onClose={()=>setIsOpen(false)}
        direction="right"
        className="bla bla bla"
        size={400}
      >
        <div className="filterContainer">
          <div className="filter-body no-scrollbar">
            <div className="mb-6 flex items-center justify-between">
              <div onClick={()=>setIsOpen(false)}>
                <img
                  src="./Mask group (2).png"
                  alt=""
                  className="w-10 cursor-pointer"
                />
              </div>
              <h5 className="text-xl font-semibold">Filter</h5>
              <div onClick={()=>setIsOpen(false)}>
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
        value={selectedOption1}
        onChange={handleChange}
        className="input-loyalty"
      >
        {MonthOptions?.map((data, i) => (
          <>
            <option className="font-semibold" key={i} value={data?.value}>
              {data?.label}
            </option>
          </>
        ))}
      </select>
      <DialogDefault open={openCustom} handleOpen={handleOpen}>
        <div className="p-4 bg-[#F5F5F5] rounded-lg h-80">
          <div className="flex justify-between">
            <div className="flex-1 flex flex-col gap-4">
              <p className="font-semibold text-black text-xl">
                Select Date Range
              </p>
              <hr className="bg-black w-96" />
            </div>
            <div onClick={() => setOpenCustom(false)}>
              <img
                src="./Mask group (2).png"
                alt=""
                className="w-8 cursor-pointer"
              />
            </div>
          </div>
          <p className="text-[#0070BC] py-4">FROM</p>
          <div className="flex gap-6">
            <DatePickerComp startDate={startDate} setStartDate={setStartDate}/>
            <DatePickerComp startDate={endDate} setStartDate={setEndDate}/>
          </div>
         
          <div className="flex justify-center items-center gap-10 mt-8">
            <button className="sign-button w-48" onClick={()=>{
              // handleSave(selectedOption, formatDate2(startDate), formatDate2(endDate))
              setOpenCustom(false)
              }}>SAVE</button>
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setOpenCustom(false)}>
              <img src="./Mask group (4).svg" alt="" className="w-6 h-6" />
              <p className="text-sm cancel underline">Cancel</p>
            </div>
          </div>
        </div>
      </DialogDefault>
              </div>
              <div className="calender">
                <div>
                  <p>From</p>
                  <DatePickerComp2 startDate={startDate1} setStartDate={setStartDate1}/>
                </div>
                <div>
                  <p>To</p>
                  <DatePickerComp2 startDate={endDate1} setStartDate={setEndDate1}/>
                </div>
              </div>
              <div className="mt-4 mb-[60px]">
                <p className="text-lg font-semibold pb-4">
                  Size Range{" "}
                  <span className="text-[#000000B2] text-[14px]">
                    {" "}
                    ( in Mb )
                  </span>
                </p>
                <div class="relative mb-6">
                  <label for="labels-range-input" className="sr-only">
                    Labels range
                  </label>
                  {/* <input id="labels-range-input" type="range" value="1000" min="100" max="1500" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" /> */}
                  <Slider range  min={0} max={100} value={range} onChange={handleRangeChange} allowCross={false}/>
                  <span className="text-sm font-[500] text-[#000000] dark:text-gray-400 absolute start-0 -bottom-8">
                    0
                  </span>
                  <span className="text-sm font-[500] text-[#000000] dark:text-gray-400 absolute start-1/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-8">
                    5 Mb
                  </span>
                  <span className="text-sm font-[500] text-[#000000] dark:text-gray-400 absolute start-2/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-8">
                    10Mb
                  </span>
                  <span className="text-sm font-[500] text-[#000000] dark:text-gray-400 absolute start-3/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-8">
                    20Mb
                  </span>
                  <span className="text-sm font-[500] text-[#000000] dark:text-gray-400 absolute end-0 -bottom-8">
                    +30Mb
                  </span>
                </div>
              </div>
              <p className="joint-date">Document Type</p>
              <div className="checkbox-container">
                <div className="checkbox-filter">
                  <label className="checkbox1 text1 ">
                    .PDF
                    <input
                      type="checkbox"
                      checked={selectedOption === 'pdf'}
                      onChange={()=>handleCheckboxChange('pdf')}
                    />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div className="checkbox-filter">
                  <label className="checkbox1 text1 ">
                    .TXT
                    <input
                      type="checkbox"
                      checked={selectedOption === 'txt'}
                      onChange={()=>handleCheckboxChange('txt')}
                    />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div className="checkbox-filter">
                  <label className="checkbox1 text1 ">
                    .DOCX
                    <input
                      type="checkbox"
                      checked={selectedOption === 'docx'}
                      onChange={()=>handleCheckboxChange('docx')}
                    />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div className="checkbox-filter">
                  <label className="checkbox1 text1 ">
                    .RTF
                    <input
                      type="checkbox"
                      checked={selectedOption === 'rtf'}
                      onChange={()=>handleCheckboxChange('rtf')}
                    />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>

             
            </div>
          </div>
          <div className="button-container">
            <button
              className="button2"
                onClick={() => {
                  getDigitalReceiptByToken("",formatDate2(startDate1), formatDate2(endDate1), "","", range[0], range[1], selectedOption)
                  setIsOpen(false)
                }}
            >
              APPLY
            </button>
            <button
              className="button4"
                onClick={()=>setIsOpen(false)}
            >
              RESET
            </button>
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default ReceiptFilter;
