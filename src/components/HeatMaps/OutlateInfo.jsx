import React from "react";
import { BarChartMap } from "./BarChartMap";

const OutlateInfo = ({data}) => {
  return (
    <div className="w-[350px]">
      <div className="flex gap-6 items-center">
        <img src={data?.image} alt="" />
        <p className="text-[#000000B2] font-semibold text-xl">
          OUTLET <span className="text-[#FEA82F]">{data?.outletName}</span>
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex gap-4">
        <img src="./image 691.png" alt="" className="h-fit" />
        <div>
          <p className="font-semibold text-[18px]">Outlet Location -</p>
          <p className="text-[#000000B2] font-semibold pt-2 text-[14px]">
          {data?.location?.address} ,  {data?.location?.city}, {data?.location?.state}, {data?.location?.country} 
          </p>
        </div>
      </div>
      <div className="flex gap-4 my-4">
        <img src="./image 691.png" alt="" className="h-fit" />
        <div>
          <p className="font-semibold text-[18px]">Activites</p>
          <ul className="ml-6 text-[#000000B2] font-semibold pt-2 text-[14px]">
            <li className="pb-2">
              Crowd Activity - <span className="text-[#FEA82F]">{data?.activities?.crowdActivity}</span>
            </li>
            <li className="pb-2">
              Max. Dwell Areas -{" "}
              <span className="text-black">Promotional Stand</span>
            </li>
          </ul>
          <p className="pb-2 text-[#3BB54A] text-end text-[12px]">
            {" "}
            ( MODERATE DWELL TIME )
          </p>
        </div>
      </div>
      <div className="flex gap-4 my-4">
        <img src="./image 691.png" alt="" className="h-fit" />
        <p className="font-semibold text-[18px]">Checkout Counter Congestion</p>
      </div>
      <BarChartMap />
    </div>
  );
};

export default OutlateInfo;
