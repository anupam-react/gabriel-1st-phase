import React, { useEffect, useRef, useState } from "react";
import Select1 from "../common/Select1";
import ReportPage from "./ReportPage";
import { DialogDefault } from "../common/DilogBox";

const SellingCard = ({data ,selectedOption, handleChange , open , setOpen , handleSave }) => {
  const [openProduct, setOpenProduct] = useState(false);
  const handleOpen = () => setOpenProduct(!open);
  const [isReportopen, setReportOpen] = useState(-1);
  const [isReport, setReport] = useState(false);
  const handleReportOpen = () => setReportOpen(!open);
  const handleReport = () => setReport(!open);

  const divRef = useRef();


  useEffect(() => {
    function handleClickOutside(event) {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setOpenProduct(-1);
      }
    }
    if (open !== -1) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);
 

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
    <div className="shadow-xl rounded-md bg-white flex flex-col items-center gap-4 py-4 px-4 w-[23vw]">
      <p className="text-[#0070BC] text-xl font-semibold">TOP SELLING ITEMS</p>
      <Select1 selectedOption={selectedOption}  handleChange={handleChange} open={open} setOpen={setOpen} handleSave={handleSave}/>
      <div className="flex flex-col gap-6 my-4">
        {data?.slice(0, 4)?.map((d, i) => (
          <div className="flex gap-4">
            <p className="underline text-[22px] rank font-semibold">#{i + 1}</p>
            <img
              src={d?.productImage}
              alt="image"
              className="rounded-full w-10 h-10"
            />
            <div>
              <p className="font-semibold ">{d?.productName}</p>
              <p className="text-[#000000B2]">
                Total Sale :
                <span className="text-[#0070BC] font-semibold">{d?.totalSale}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <hr className="bg-[#00000080] w-full" />
      <p
        className="text-[#1E1E1E99] font-[500] cursor-pointer"
        onClick={() => setOpenProduct(true)}
      >
        VIEW MORE
      </p>
      <DialogDefault open={openProduct} handleOpen={setOpenProduct}>
        <div className="p-8 rounded-md text-black bg-[#F5F5F5] w-[60vw] overflow-auto">
          <div className="flex justify-between">
            {data?.slice(4)?.map((data, i) => (
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
                      onClick={() =>{
                        if(isReportopen === i ) setReportOpen(false)
                        else setReportOpen(i)
                        }}
                    />
                  </div>
                  <div className="flex flex-col items-center font-semibold">
                    <img src={data?.productImage} alt="" />
                    <p>{data?.price}</p>
                    <p>{data?.productName}</p>
                  </div>
                </div>
                {isReportopen === i && (
                  <button
                    className="export flex gap-2 absolute top-[80px] right-10"
                    onClick={() => setReport(i)}
                  >
                    <img
                      src="./Mask group (7).svg"
                      alt=""
                      className="w-5 h-5"
                    />
                    <p>REPORT</p>
                  </button>
                )}
                <ReportPage
                  open={isReport === i}
                  setOpenReport={setReport}
                  handleOpen={handleReport}
                />
              </div>
            ))}
          </div>
        </div>
      </DialogDefault>
      {/* <AvailableProduct open={openProduct} setOpenProduct={setOpenProduct} handleOpen={handleOpen} /> */}
    </div>
  );
};

export default SellingCard;
