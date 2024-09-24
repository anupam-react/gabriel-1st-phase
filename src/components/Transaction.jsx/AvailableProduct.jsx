import React, { useEffect, useRef, useState } from "react";
import { DialogDefault } from "../common/DilogBox";
import ReportPage from "./ReportPage";

const AvailableProduct = ({ open, setOpen, handleOpen }) => {
  const [isReportopen, setReportOpen] = useState(false);
  const [isReport, setReport] = useState(false);
  const handleReportOpen = () => setReportOpen(!open);
    const handleReport = () => setReport(!open);
    
      const divRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setReportOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const productData = [
    { name: "Butter Croissant", price: "£5", image: "./Rectangle 8765.png" },
    {
      name: "Salted Caramel Muffin",
      price: "£15",
      image: "./Rectangle 8765 (1).png",
    },
    { name: "Flat White", price: "£75", image: "./Rectangle 8765 (2).png" },
  ];
  return (
    <div>
      <DialogDefault open={open} handleOpen={handleOpen}>
        <div className="p-8 rounded-md text-black bg-[#F5F5F5] w-[60vw] overflow-auto" >
          <div className="flex justify-between" ref={divRef}>
            {productData?.map((data, i) => (
              <div className="relative">
                <div
                  className="bg-[#FFFFFF] shadow rounded-md p-4 w-[250px]"
                        key={i}
                    
                >
                  <div className="flex justify-between">
                    <div className="flex gap-2 bg-[#0070BC33] px-4 py-1 rounded-full w-fit">
                      <img src="./Ellipse 39.png" alt="" className="w-5 h-5" />
                      <p className="text-[#121212] font-semibold text-sm">
                        Available Instore
                      </p>
                    </div>
                    <img
                      src="./solar_menu-dots-bold.png"
                      alt=""
                      className="w-6 h-6 cursor-pointer"
                      onClick={() => setReportOpen(true)}
                    />
                  </div>
                  <div className="flex flex-col items-center font-semibold">
                    <img src={data?.image} alt="" />
                    <p>{data?.price}</p>
                    <p>{data?.name}</p>
                  </div>
                </div>
                {isReportopen && (
                  <button
                    className="export flex gap-2 absolute top-0"
                            onClick={() => setReport(true)}
                       
                  >
                    <img
                      src="./Mask group (7).svg"
                      alt=""
                      className="w-5 h-5"
                    />
                    <p>REPORT</p>
                  </button>
                    )}
                    <ReportPage open={isReport} setOpen={setReport} handleOpen={handleReport} />
              </div>
            ))}
          </div>
        </div>
      </DialogDefault>
    </div>
  );
};

export default AvailableProduct;
