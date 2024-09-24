import React, { useState, useMemo, useEffect, useRef } from "react";

import Pagination from "../common/Pagination";
import MenuCard from "./MenuCard";
import { DialogDefault } from "../common/DilogBox";
import CustomeInfo from "./CustomeInfo";
import "./index.scss";
import useCusomerInfo from "../../hooks/useCusomerInfo";
import { getDateFromISOString } from "../../utiils";

const PaginatedTable = ({customer}) => {
  const {  

    customerInfo,
    mostViewProd,
    getCustomerInfoForParticularUser,
    getMostViewProductByUserId,
    isOpenInfo, setOpenInfo
  } = useCusomerInfo()
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpenMenu, setOpenMenu] = useState(false);

  const [isActive, setActive] = useState(-1);

  console.log(customer , customerInfo)

  let PageSize = 3;
  

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return customer?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage , customer]);

  const divRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setActive(-1);
      }
    };

    if (isActive !== -1) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActive]);

  return (
    <>
      <table className="table1">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Date Joined</th>
           
          </tr>
        </thead>
        <tbody>
          {currentTableData?.map((item, i) => {
            return (
              <tr key={i}>
                <td className="w-1/2">
                  <div className="flex items-center gap-6 ml-[100px] my-2 relative">
                  <div className="relative">
                    <div className="profile-image cursor-pointer" onClick={() =>{
                       setOpenInfo(true)
                       getCustomerInfoForParticularUser(item?._id)
                       getMostViewProductByUserId(item?._id)

                       }}>
                      <img src={item?.image || "./carbon_user-avatar-filled.png"} alt=""/>
                    </div>
                      <img
                        src="./solar_menu-dots-bold (1).png"
                        alt=""
                        className="absolute top-1 right-1 cursor-pointer"
                        onClick={() =>{

                            if(isOpenMenu === item?._id) setOpenMenu(false)
                          else
                          setOpenMenu(item?._id)}}
                      />
                    </div>
                
                    <div className="flex flex-col gap-1 font-[500]" onClick={() =>{
                       setOpenInfo(true)
                       getCustomerInfoForParticularUser(item?._id)
                       getMostViewProductByUserId(item?._id)
                       }}>
                    <p className="profileId text-left" >
                  {item?.fullName || item?.firstName + " " + item?.lastName }
                    </p>
                    <p className="profileId text-left">
                      ID:{item?.Id}
                    </p>

                    </div>
                    {isOpenMenu === item?._id && (
                      <div className="menu-Main">
                        <MenuCard onClose={()=> setOpenMenu(false)} isOpenMenu={isOpenMenu} data={item}/>
                      </div>
                    )}
                  </div>
                </td>
                <td>{getDateFromISOString(item?.createdAt)}</td>
               
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={customer?.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
      <DialogDefault open={isOpenInfo} handleOpen={setOpenInfo} size={"xxl"}>
        <CustomeInfo handleOpen={setOpenInfo} customerInfo={customerInfo} mostViewProd={mostViewProd}/>
      </DialogDefault>
    </>
  );
};

export default PaginatedTable;
