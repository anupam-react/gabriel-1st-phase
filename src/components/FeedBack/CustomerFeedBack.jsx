import React from "react";
import { DialogDefault } from "../common/DilogBox";
import StarRating from "./StarRating";
import { formatTime2, getDateFromISOString } from "../../utiils";

const CustomerFeedBack = ({ open, setOpen, handleOpen }) => {
  return (
    <div>
      <DialogDefault open={open} handleOpen={handleOpen}>
        <div className="">
          <div className="p-8 rounded-md text-black bg-[#F5F5F5]">
            <div className="flex justify-between">
              <p className="font-semibold text-black text-xl">
                Customer Feedback
              </p>

              <div onClick={() => setOpen(false)}>
                <img
                  src="./Mask group (2).png"
                  alt=""
                  className="w-6 h-6 cursor-pointer"
                />
              </div>
            </div>
            <hr className="bg-[#00000099] w-full my-6" />
            <div className="rounded-lg shadow p-[16px] h-[50vh] overflow-auto bg-white">
              <div className="flex justify-between">
                <p className="font-bold">{open?.title}</p>
                <p>
                {getDateFromISOString(open?.date)} <span className="text-[#0070BC]">({formatTime2(open?.date)})</span>
                </p>
              </div>
              <div className="flex items-center gap-3 mb-[24px] mt-3">
                <p className="text-[#3BB54A]">{open?.rating}</p>
                <StarRating rating={open?.rating}/>
              </div>
              <p className="text-sm">
              {open?.comment}
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-10 my-8">
            <button className="sign-button w-48" onClick={() => setOpen(false)}>
              CLOSE
            </button>
          </div>
        </div>
      </DialogDefault>
    </div>
  );
};

export default CustomerFeedBack;
