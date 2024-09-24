import React, { useState } from "react";
import "../Transaction.jsx/index.css";
import { DialogDefault } from "../common/DilogBox";
import Select1 from "../common/Select1";
import { useNavigate } from "react-router-dom";
import useSales from "../../hooks/useSales";
import Select4 from "../common/Select4";

const ReportPage2 = ({ open, setOpen, handleOpen }) => {

  const { getSalesReport }= useSales()
  const navigate = useNavigate();
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");
  const [selectedOption4, setSelectedOption4] = useState("");
  const [selectedOption5, setSelectedOption5] = useState("");
  const [selectedOption6, setSelectedOption6] = useState("");
  const [openCustom1, setOpenCustom1] = useState(false);
  const [openCustom2, setOpenCustom2] = useState(false);
  const [openCustom3, setOpenCustom3] = useState(false);
  const [openCustom4, setOpenCustom4] = useState(false);
  const [openCustom5, setOpenCustom5] = useState(false);
  const [openCustom6, setOpenCustom6] = useState(false);

  const handleChange1 = (event) => {
    setSelectedOption1(event.target.value);
    if (event.target.value === "custom") {
      setOpenCustom1(true);
    }else{
      getSalesReport("transactionCount",event.target.value)
    }
  };
  const handleChange2 = (event) => {
    setSelectedOption2(event.target.value);
    if (event.target.value === "custom") {
      setOpenCustom2(true);
    }else{
      getSalesReport("transactionCount",event.target.value)

    }
  };
  const handleChange3 = (event) => {
    setSelectedOption3(event.target.value);
    if (event.target.value === "custom") {
      setOpenCustom3(true);
    }else{
     
      getSalesReport("averageTransactionCount",event.target.value)
    }
  };
  const handleChange4 = (event) => {
    setSelectedOption4(event.target.value);
    if (event.target.value === "custom") {
      setOpenCustom4(true);
    }else{
      getSalesReport("transactionCount",event.target.value)

    }
  };
  const handleChange5 = (event) => {
    setSelectedOption5(event.target.value);
    if (event.target.value === "custom") {
      setOpenCustom5(true);
    }else{
      
      getSalesReport("transactionCount",event.target.value)
    }
  };
  const handleChange6 = (event) => {
    setSelectedOption6(event.target.value);
    if (event.target.value === "custom") {
      setOpenCustom6(true);
    }else{
      getSalesReport("transactionCount",event.target.value)
    }
  };


  return (
    <div>
      <DialogDefault open={open} handleOpen={handleOpen}>
        <div>
          <div className="p-8 rounded-md text-black bg-[#F5F5F5] h-[70vh] overflow-auto no-scrollbar">
            <div className="flex justify-between">
              <p className="font-semibold text-black text-xl">
              Generate Sales Analytics Report
              </p>
              <div className="flex gap-4">
                <img
                  src="./Mask group (7).png"
                  alt=""
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => navigate("/report")}
                />
                <div onClick={() => setOpen(false)}>
                  <img
                    src="./Mask group (2).png"
                    alt=""
                    className="w-6 h-6 cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <hr className="bg-[#00000099] w-full my-6" />
            <p className="font-[600] text-[16px]">
              Select the Sections which you want to include in the Report
            </p>
            <label className="containerLogin font-semibold text-[14px]">
              Match{" "}
              <span className="px-2 text-[#000000B2]">
                {" "}
                the Date Range in all{" "}
              </span>{" "}
              Selected Sections
              <input
                type="checkbox"
                // checked={isChecked}
                // onChange={handleCheckboxChange}
              />
              <span class="checkmark"></span>
            </label>
            <div className="flex flex-col gap-4 mb-4">
              {/* {reportData?.map((data, i) => ( */}
                <div className="flex items-start gap-6">
                  <label className="inline-flex items-center me-5 cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                  </label>
                  <div className="flex flex-col gap-4">
                    <span className="font-semibold text-[#0070BC] dark:text-gray-300 uppercase">
                    Total Revenue
                    </span>
                    <div className="flex items-center gap-4">
                      <p className="text-[#000000B2] font-[600]">Date Range</p>
                      <Select4 selectedOption={selectedOption1} handleSave={getSalesReport} typeOfData="topSelling" handleChange={handleChange1} open={openCustom1} setOpen={setOpenCustom1}/>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <label className="inline-flex items-center me-5 cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                  </label>
                  <div className="flex flex-col gap-4">
                    <span className="font-semibold text-[#0070BC] dark:text-gray-300 uppercase">
                    Total Transactions
                    </span>
                    <div className="flex items-center gap-4">
                      <p className="text-[#000000B2] font-[600]">Date Range</p>
                      <Select4 selectedOption={selectedOption2} handleSave={getSalesReport} typeOfData="transactionCount" handleChange={handleChange2} open={openCustom2} setOpen={setOpenCustom2}/>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <label className="inline-flex items-center me-5 cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                  </label>
                  <div className="flex flex-col gap-4">
                    <span className="font-semibold text-[#0070BC] dark:text-gray-300 uppercase">
                    AVERAGE TRANSACTION VALUE
                    </span>
                    <div className="flex items-center gap-4">
                      <p className="text-[#000000B2] font-[600]">Date Range</p>
                      <Select4 selectedOption={selectedOption3} handleSave={getSalesReport} typeOfData="averageTransactionCount" handleChange={handleChange3} open={openCustom3} setOpen={setOpenCustom3}/>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <label className="inline-flex items-center me-5 cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                  </label>
                  <div className="flex flex-col gap-4">
                    <span className="font-semibold text-[#0070BC] dark:text-gray-300 uppercase">
                    Sales By OUTLET (LOCATION)
                    </span>
                    <div className="flex items-center gap-4">
                      <p className="text-[#000000B2] font-[600]">Date Range</p>
                      <Select4 selectedOption={selectedOption4} handleSave={getSalesReport} typeOfData="topSelling" handleChange={handleChange4} open={openCustom4} setOpen={setOpenCustom4}/>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <label className="inline-flex items-center me-5 cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                  </label>
                  <div className="flex flex-col gap-4">
                    <span className="font-semibold text-[#0070BC] dark:text-gray-300 uppercase">
                    SALES BY CATEGORY / DEPARTMENT
                    </span>
                    <div className="flex items-center gap-4">
                      <p className="text-[#000000B2] font-[600]">Date Range</p>
                      <Select4 selectedOption={selectedOption5} handleSave={getSalesReport} typeOfData="topSelling" handleChange={handleChange5} open={openCustom5} setOpen={setOpenCustom5}/>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <label className="inline-flex items-center me-5 cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                  </label>
                  <div className="flex flex-col gap-4">
                    <span className="font-semibold text-[#0070BC] dark:text-gray-300 uppercase">
                    SALES TREND OVER TIME
                    </span>
                    <div className="flex items-center gap-4">
                      <p className="text-[#000000B2] font-[600]">Date Range</p>
                      <Select4 selectedOption={selectedOption6} handleSave={getSalesReport} typeOfData="topSelling" handleChange={handleChange6} open={openCustom6} setOpen={setOpenCustom6}/>
                    </div>
                  </div>
                </div>
              {/* ))} */}
            </div>

            <p className="font-semibold pb-4">Export As :</p>
            <select
              id="countries"
              // value={selectedOption}
              // onChange={handleChange}
              className="rounded shadow-md text-gray-900 text-sm  border-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="pdf" className="font-semibold">
                PDF
              </option>
            </select>
          </div>
          <div className="flex justify-center items-center gap-10 my-8">
            <button className="sign-button w-48"  onClick={() => setOpen(false)}>EXPORT</button>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <img src="./Mask group (4).svg" alt="" className="w-6 h-6" />
              <p className="text-sm cancel underline">Cancel</p>
            </div>
          </div>
        </div>
      </DialogDefault>
    </div>
  );
};

export default ReportPage2;
