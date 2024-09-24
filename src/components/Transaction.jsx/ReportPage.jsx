import React, { useState } from "react";
import "./index.css";
import { DialogDefault } from "../common/DilogBox";
import Select1 from "../common/Select1";
import { useNavigate } from "react-router-dom";
import useTransaction from "../../hooks/useTransaction";
import Select4 from "../common/Select4";

const ReportPage = ({ open, setOpenReport, handleOpen }) => {
  const {getTransactionReport } = useTransaction()
  const navigate = useNavigate();
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");
  const [selectedOption4, setSelectedOption4] = useState("");
  const [selectedOption5, setSelectedOption5] = useState("");

  const [openCustom1, setOpenCustom1] = useState(false);
  const [openCustom2, setOpenCustom2] = useState(false);
  const [openCustom3, setOpenCustom3] = useState(false);
  const [openCustom4, setOpenCustom4] = useState(false);
  const [openCustom5, setOpenCustom5] = useState(false);


  const handleChange1 = (event) => {
    setSelectedOption1(event.target.value);
    if (event.target.value === "custom") {
      setOpenCustom1(true);
    }else{
      getTransactionReport("totalSaleVolume",event.target.value )
    }
  };
  const handleChange2 = (event) => {
    setSelectedOption2(event.target.value);
    if (event.target.value === "custom") {
      setOpenCustom2(true);
    }else{
     
      getTransactionReport("transactionCount",event.target.value )
    }
  };
  const handleChange3 = (event) => {
    setSelectedOption3(event.target.value);
    if (event.target.value === "custom") {
      setOpenCustom3(true);
    }else{
      getTransactionReport("averageTransactionCount",event.target.value )

    }
  };
  const handleChange4 = (event) => {
    setSelectedOption4(event.target.value);
    if (event.target.value === "custom") {
      setOpenCustom4(true);
    }else{
     
      getTransactionReport("topSelling",event.target.value)
    }
  };
  const handleChange5 = (event) => {
    setSelectedOption5(event.target.value);
    if (event.target.value === "custom") {
      setOpenCustom5(true);
    }else{
      getTransactionReport("timeBasedData",event.target.value)

    }
  };


  const reportData = [
    { title: "Total Sales Volume" , selectedOption: {setSelectedOption1} , handleChange: {handleChange1}, openCustom: {openCustom1} , setOpenCustom: {setOpenCustom1} },
    { title: "Transaction Count",selectedOption: {setSelectedOption2} , handleChange: {handleChange2}, openCustom: {openCustom2} , setOpenCustom: {setOpenCustom2} },
    { title: "Average Transaction Value" , selectedOption: {setSelectedOption3} , handleChange: {handleChange3}, openCustom: {openCustom3} , setOpenCustom: {setOpenCustom3}},
    { title: "Top Selling items", selectedOption: {setSelectedOption4} , handleChange: {handleChange4}, openCustom: {openCustom4} , setOpenCustom: {setOpenCustom4} },
    { title: "TIME BASED ANALYSIS", selectedOption: {setSelectedOption5} , handleChange: {handleChange5}, openCustom: {openCustom5} , setOpenCustom: {setOpenCustom5} },
  ];
  return (
    <div>
      <DialogDefault open={open} handleOpen={handleOpen}>
        <div>
          <div className="p-8 rounded-md text-black bg-[#F5F5F5] h-[70vh] overflow-auto no-scrollbar">
            <div className="flex justify-between">
              <p className="font-semibold text-black text-xl">
                Generate Analytics Report
              </p>
              <div className="flex gap-4">
                <img
                  src="./Mask group (7).png"
                  alt=""
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => navigate("/report")}
                />
                <div onClick={() => setOpenReport(false)}>
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
                    Total Sales Volume
                    </span>
                    <div className="flex items-center gap-4">
                      <p className="text-[#000000B2] font-[600]">Date Range</p>
                      <Select4 selectedOption={selectedOption1} handleChange={handleChange1} handleSave={getTransactionReport} typeOfData="totalSaleVolume" open={openCustom1} setOpen={setOpenCustom1}/>
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
                    Transaction Count
                    </span>
                    <div className="flex items-center gap-4">
                      <p className="text-[#000000B2] font-[600]">Date Range</p>
                      <Select4 selectedOption={selectedOption2} handleSave={getTransactionReport} typeOfData="transactionCount" handleChange={handleChange2} open={openCustom2} setOpen={setOpenCustom2}/>
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
                    Average Transaction Value
                    </span>
                    <div className="flex items-center gap-4">
                      <p className="text-[#000000B2] font-[600]">Date Range</p>
                      <Select4 selectedOption={selectedOption3} handleSave={getTransactionReport} typeOfData="averageTransactionCount" handleChange={handleChange3} open={openCustom3} setOpen={setOpenCustom3}/>
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
                    Top Selling items
                    </span>
                    <div className="flex items-center gap-4">
                      <p className="text-[#000000B2] font-[600]">Date Range</p>
                      <Select4 selectedOption={selectedOption4} handleSave={getTransactionReport} typeOfData="topSelling" handleChange={handleChange4} open={openCustom4} setOpen={setOpenCustom4}/>
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
                    TIME BASED ANALYSIS
                    </span>
                    <div className="flex items-center gap-4">
                      <p className="text-[#000000B2] font-[600]">Date Range</p>
                      <Select4 selectedOption={selectedOption5} handleSave={getTransactionReport} typeOfData="timeBasedData" handleChange={handleChange5} open={openCustom5} setOpen={setOpenCustom5}/>
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
            <button className="sign-button w-48"  onClick={() => setOpenReport(false)}>EXPORT</button>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setOpenReport(false)}
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

export default ReportPage;
