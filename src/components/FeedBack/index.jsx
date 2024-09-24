import React, { useMemo, useState } from "react";
import Pagination from "../common/Pagination";
import FeedBackFilter from "./FeedBackFilter";
import CustomerFeedBack from "./CustomerFeedBack";
import MenuCard from "../customerInfo/MenuCard";
import { DialogDefault } from "../common/DilogBox";
import CustomeInfo from "../customerInfo/CustomeInfo";
import useFeedback from "../../hooks/useFeedback";
import { getDateFromISOString } from "../../utiils";
import StarRating from "./StarRating";
import useCusomerInfo from "../../hooks/useCusomerInfo";

const FeedBack = () => {
  const { feedback , getAllFeedback } = useFeedback()
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [isOpenInfo, setOpenInfo] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  let PageSize = 3;
  
  const closeDrawer = () => setIsOpen(false);

  const {  
    customerInfo,
    getCustomerInfoForParticularUser
  } = useCusomerInfo()

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return feedback?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage , feedback]);
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-2xl font-bold">Customer Feedback</p>
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
              getAllFeedback(e.target.value);
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
              <th>Customer</th>
              <th>Date Added</th>
              <th>Feedback Type</th>
              <th>Ratings</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {currentTableData?.map((item , i) => {
              return (
                  <tr key={i}>
                    <td>
                      <div className="flex items-center justify-center gap-6 relative">
                      <div className="relative">
                    <div className="profile-image cursor-pointer" onClick={() =>{
                      getCustomerInfoForParticularUser(item?.user?._id)
                       setOpenInfo(true)
                       }}>
                      <img src={item?.user?.image || "./carbon_user-avatar-filled.png"} alt=""/>
                    </div>
                      <img
                        src="./solar_menu-dots-bold (1).png"
                        alt=""
                        className="absolute top-1 right-1 cursor-pointer"
                        onClick={() =>{
                            if(isOpenMenu === i) setOpenMenu(false)
                          else setOpenMenu(i)
                        }}
                      />
                    </div>
                        
                        <p
                          className="profileId font-semibold text-left text-[#000000B2]"
                          onClick={() =>{
                            getCustomerInfoForParticularUser(item?.user?._id)
                             setOpenInfo(true)
                            }}
                         
                        >
                          <p>{item?.user?.fullName || item?.user?.firstName + " " + item?.user?.lastName}</p>
                          ID: {item?.user?.Id}
                        </p>
                        {isOpenMenu === i && (
                          <div className="absolute top-0 z-20 md:-right-[260px] lg:-right-[250px] xl:-right-[230px]">
                            <MenuCard onClose={()=> setOpenMenu(false)} data={item?.user}/>
                          </div>
                        )}
                      </div>
                    </td>
                    <td>
                      <p className="text-[#000000B2] font-semibold">
                       {getDateFromISOString(item?.date)}
                      </p>
                    </td>
                    <td className="font-semibold">{item?.type}</td>
                    <td>
                      <div className="flex justify-center gap-3">
                        <p className="text-[#3BB54A] font-bold text-sm">{item?.rating}</p>
                  <StarRating rating={item?.rating}/>
                      </div>
                    </td>

                    <td className="text-sm w-[300px] cursor-pointer" onClick={() => setOpen(item)}>
                      <p className="font-bold pb-2 text-left">{item?.title}</p>
                      <p className=" text-[#00000099] text-left line-clamp-3">
                      {item?.comment}
                      </p>
                        <p
                          className="text-[#0070BC] font-semibold text-left"
                         
                        >
                          READ MORE
                        </p>
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
        totalCount={feedback?.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
      {isOpen && <FeedBackFilter closeDrawer={closeDrawer} open={isOpen} getAllFeedback={getAllFeedback}/>}
      <CustomerFeedBack open={open} setOpen={setOpen} handleOpen={handleOpen} />
      <DialogDefault open={isOpenInfo} handleOpen={setOpenInfo}>
        <CustomeInfo handleOpen={setOpenInfo} customerInfo={customerInfo}/>
      </DialogDefault>
    </div>
  );
};

export default FeedBack;
