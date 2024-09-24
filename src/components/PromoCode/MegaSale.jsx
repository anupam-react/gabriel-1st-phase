import React from "react";
import "../Transaction.jsx/index.css";
import { DialogDefault } from "../common/DilogBox";
import DatePickerComp  from "../common/DatePickerComp";

const MegaSale = ({ open, setOpen, handleOpen }) => {
  const reportData = [
    { title: "Sales Report over time" },
    { title: "ROAS vs Campaign Performance Report" },
    { title: "Product Performance Comparison Report" },
  ];
  return (
    <div>
      <DialogDefault open={open} handleOpen={handleOpen}>
        <div className="">
          <div className="p-8 rounded-md text-black overflow-auto">
            <div className="flex justify-between">
              <div className="flex items-center gap-4">
                <img src="./image 681.png" alt="" />
                <p className="font-semibold text-black text-lg">Mega Sale!</p>
              </div>

              <div onClick={() => setOpen(false)}>
                <img
                  src="./Mask group (2).png"
                  alt=""
                  className="w-7 h-7 cursor-pointer"
                />
              </div>
            </div>
            <hr className="bg-[#00000099] w-full my-6" />

            <div className="mt-6">
              <div className="calender">
                <div>
                  <p className="text-[#0070BC] pb-2">FROM</p>
                  <DatePickerComp />
                </div>
                <div>
                  <p className="text-[#0070BC] pb-2">VALID TILL</p>
                  <DatePickerComp />
                </div>
              </div>
              <p className="font-semibold text-sm">
                <span className="text-[#000000B2] ">VALIDITY</span> : 6 MONTHS
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-10 my-8">
            <button className="sign-button w-48" onClick={() => setOpen(false)}>
              RE-ACTIVATE
            </button>
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

export default MegaSale;
