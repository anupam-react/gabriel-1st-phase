import React, { useMemo, useState, useRef, useEffect } from "react";
import Pagination from "../common/Pagination";
import "./index.scss";
import ReceiptFilter from "./ReceiptFilter";
import MenuCard from "../customerInfo/MenuCard";
import { DialogDefault } from "../common/DilogBox";
import CustomeInfo from "../customerInfo/CustomeInfo";
import TransactionDetails from "../customerInfo/TransactionDetails";
import useDigitalReceipt from "../../hooks/useDigitalReceipt";
import useCusomerInfo from "../../hooks/useCusomerInfo";
const DigitalReceipt = () => {
  const {
    receipt,
    range,
    setRange,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    startDate1,
    setStartDate1,
    endDate1,
    setEndDate1,
    openCustom,
    selectedOption1,
    setSelectedOption1,
    setOpenCustom,
    selectedOption,
    setSelectedOption,
    getDigitalReceiptByToken,
    receiptInfo,
    getDigitalReceiptById,
  } = useDigitalReceipt();
  const {  
    customerInfo,
    getCustomerInfoForParticularUser
  } = useCusomerInfo()
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpenMenu, setMenuOpen] = useState(-1);
  const [isMenuOpen, setOpenMenu] = useState(false);
  const [isOpenInfo, setOpenInfo] = useState(false);
  const [isDownload, setDownload] = useState(false);
  const [isOpenTrans, setOpenTrans] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const divRef = useRef(null);
  let PageSize = 10;
  console.log(receipt);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return receipt?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, receipt, searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setMenuOpen(-1);
      }
    };

    if (isOpenMenu !== -1) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenMenu]);

  return (
    <div>
      <div className="flex gap-10 items-center mb-4">
        <p className="text-2xl font-bold">Digital Receipt</p>
        <div
          className="flex items-center px-6 h-12"
          style={{
            backgroundColor: "#FFFF",
            width: "20rem",
            borderRadius: "12px",
            color: "#8BA3CB",
          }}
        >
          <img src="./image 2 (3).svg" alt="search" className="w-6 h-6" />
          <input
            type="text"
            className="border-none w-64 bg-transparent outline-none focus:ring-0 focus:shadow-none focus:border-none"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              getDigitalReceiptByToken(e.target.value);
            }}
          />
        </div>
        <div className="flex">
          <button
            className="flex items-center gap-2"
            onClick={() => setIsOpen(true)}
          >
            <img src="./Mask group (8).png" alt="" className="w-5 h-5" />
            <p className="text-[#0070BC] font-semibold">FILTERS</p>
          </button>
        </div>
      </div>
      <div className="table-wapper">
        <table className="table-receipt">
          <thead>
            <tr>
              <th>Title</th>
              <th>Date Uploaded</th>
              <th>Uploaded By</th>
              <th>Document Type</th>
              <th>Size</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {!!receipt?.length &&
              currentTableData?.map((item, i) => {
                return (
                  <tr key={i}>
                    <td className="text-[#000000B2]">{item?.title}</td>
                    <td>{item?.dateUploaded}</td>
                    <td>
                      <div className="flex items-center justify-center gap-6 relative">
                      <div className="relative">
                    <div className="profile-image cursor-pointer" onClick={() =>{
                       setOpenInfo(true)
                       getCustomerInfoForParticularUser(item?.userId?._id)
                       }}>
                      <img src="./carbon_user-avatar-filled.png" alt=""/>
                    </div>
                      <img
                        src="./solar_menu-dots-bold (1).png"
                        alt=""
                        className="absolute top-1 right-1 cursor-pointer"
                        onClick={() =>{
                            if(isMenuOpen === i) setOpenMenu(false)
                          else setOpenMenu(i)
                        }}
                      />
                    </div>
                        {isMenuOpen === i && (
                          <div className="absolute top-0 z-20 md:-right-[250px] lg:-right-[230px] xl:-right-[200px]">
                            <MenuCard  data={item?.userId} onClose={()=>setOpenMenu(false)}/>
                          </div>
                        )}
                        <p
                          className="cursor-pointer font-semibold text-left text-black"
                          onClick={() =>{ 
                            setOpenInfo(true)
                            getCustomerInfoForParticularUser(item?.userId?._id)
                          }}
                        >
                          <p>
                            {item?.userId?.fullName || item?.userId?.firstName +
                              " " +
                              item?.userId?.lastName}{" "}
                          </p>
                          ID: {item?.userId?.Id}
                        </p>
                      </div>
                    </td>
                    <td>{item?.documentType}</td>
                    <td>{item?.sizeInMbNumber} Mb</td>
                    <td>
                      <div className="action">
                        <img
                          src="./Mask group (9).png"
                          alt=""
                          onClick={() => setMenuOpen(item?._id)}
                        />
                        {isOpenMenu === item?._id && (
                          <div className="action-main shadow" ref={divRef}>
                            <div
                              className="flex items-center gap-6"
                              onClick={() =>{ setOpenTrans(true)
                                getDigitalReceiptById(isOpenMenu)
                              }}
                            >
                              <img src="./image 119.png" alt="" />
                              <p>View</p>
                            </div>
                            <div
                              className="flex items-center gap-6"
                              onClick={() =>{ 
                                setDownload(true)
                                setTimeout(()=>{
                                  setDownload(false)
                                },2000)
                              }}
                            >
                              <img src="./image 674.png" alt="" />
                              <p>Download</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={receipt?.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
      {isOpen && (
        <ReceiptFilter
          setIsOpen={setIsOpen}
          open={isOpen}
          range={range}
          setRange={setRange}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          startDate1={startDate1}
          setStartDate1={setStartDate1}
          endDate1={endDate1}
          setEndDate1={setEndDate1}
          openCustom={openCustom}
          selectedOption1={selectedOption1}
          setSelectedOption1={setSelectedOption1}
          setOpenCustom={setOpenCustom}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          getDigitalReceiptByToken={getDigitalReceiptByToken}
        />
      )}
      <DialogDefault open={isOpenInfo} handleOpen={setOpenInfo} size={"xxl"}>
        <CustomeInfo handleOpen={setOpenInfo} customerInfo={customerInfo}/>
      </DialogDefault>
      <DialogDefault open={isDownload} handleOpen={setDownload}>
        <div className="alert">
          <img src="../Vector (2).png" alt="" />
          <p className="text-center text-[24px] font-bold">
            Receipt Downloaded
          </p>
        </div>
      </DialogDefault>
      <DialogDefault open={isOpenTrans} handleOpen={setOpenTrans}>
        <TransactionDetails handleOpen={setOpenTrans} userData={receiptInfo?.userId} data={receiptInfo}/>
      </DialogDefault>
    </div>
  );
};

export default DigitalReceipt;
