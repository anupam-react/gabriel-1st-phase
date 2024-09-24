import React, { useState } from "react";
import { DialogDefault } from "./DilogBox";
import DatePickerComp from "./DatePickerComp";
import { formatDate2 } from "../../utiils";


const Select1 = ({selectedOption , handleChange , open , setOpen , handleSave=()=>{} }) => {
  
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleOpen = () => setOpen(!open);

  const MonthOptions = [
    { label: "ALL TIME", value: "All" },
    { label: "THIS WEEK", value: "weekly" },
    { label: "THIS MONTH", value: "month" },
    { label: "CUSTOM", value: "custom" },
   
  ];

  return (
    <>
      <select
        id="countries"
        value={selectedOption}
        onChange={handleChange}
        className="rounded shadow-md text-gray-900 text-sm  border-none block w-36 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {MonthOptions?.map((data, i) => (
          <>
            <option className="font-semibold" key={i} value={data?.value}>
              {data?.label}
            </option>
          </>
        ))}
      </select>
      <DialogDefault open={open} handleOpen={handleOpen}>
        <div className="p-4 bg-[#F5F5F5] rounded-lg h-80">
          <div className="flex justify-between">
            <div className="flex-1 flex flex-col gap-4">
              <p className="font-semibold text-black text-xl">
                Select Date Range
              </p>
              <hr className="bg-black w-96" />
            </div>
            <div onClick={() => setOpen(false)}>
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
              handleSave(selectedOption, formatDate2(startDate), formatDate2(endDate))
              setOpen(false)
              }}>SAVE</button>
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setOpen(false)}>
              <img src="./Mask group (4).svg" alt="" className="w-6 h-6" />
              <p className="text-sm cancel underline">Cancel</p>
            </div>
          </div>
        </div>
      </DialogDefault>
    </>
  );
};

export default Select1;
