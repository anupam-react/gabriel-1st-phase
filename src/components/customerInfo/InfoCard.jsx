import React, { useState } from "react";
import { DialogDefault } from "../common/DilogBox";

const InfoCard = ({ data }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <>
      <div className="rounded-lg shadow p-6 items-center bg-white flex flex-col gap-4 w-full  min-w-[300px] relative">
        <p className="text-[#000000B2] font-[500] text-xl">{data?.title}</p>
        {data?.showInfo && (
          <img
            src="./Vector (1).png"
            alt=""
            onClick={() => setOpen(true)}
            className="absolute right-3 top-2 w-5 h-5 cursor-pointer"
          />
        )}
        <div className="flex gap-4">
          <img src={data?.image} alt="" />
          <p className="text-2xl font-semibold">{data?.amount}</p>
        </div>
      </div>
      <DialogDefault open={open} handleOpen={handleOpen}>
        <div className="bg-[#0070BC] p-6 text-white rounded-md text-2xl">
          {data?.text}
        </div>
      </DialogDefault>
    </>
  );
};

export default InfoCard;
