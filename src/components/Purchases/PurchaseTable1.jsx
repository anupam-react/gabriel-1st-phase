import React, { useMemo, useState } from "react";
import Pagination from "../common/Pagination";
import { DialogDefault } from "../common/DilogBox";
import CustomeInfo from "../customerInfo/CustomeInfo";
import MenuCard from "../customerInfo/MenuCard";
import TransactionDetails from "../customerInfo/TransactionDetails";
import { formatTime2, getDateFromISOString } from "../../utiils";
import usePurchases from "../../hooks/usePurchases";
import useCusomerInfo from "../../hooks/useCusomerInfo";


const PurchaseTable1 = ({data , getPurchasesApp}) => {

  const {singlePurchases ,  getPurchasesStoreId }  = usePurchases()
  const {  
    customerInfo,
    getCustomerInfoForParticularUser
  } = useCusomerInfo()

  const [currentPage, setCurrentPage] = useState(1);
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [isOpenInfo, setOpenInfo] = useState(false);
  const [isOpenTrans, setOpenTrans] = useState(false);
  let PageSize = 5;


  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage , data]);
  return (
    <div>
      <div className="table-wapper">
        <table className="table-receipt">
          <thead>
            <tr>
              <th>Purchased By</th>
              <th>Amount</th>
              <th>Ref. ID</th>
              <th>Date & Time</th>
              <th>Retailer & Item</th>
              <th>Product ID</th>
            </tr>
          </thead>
          <tbody>
            {currentTableData?.map((item , i) => {
              return (
                <tr key={i}>
                   <td>
                      <div className="flex items-center gap-6 relative ml-6">
                      <div className="relative">
                    <div className="profile-image cursor-pointer" onClick={() =>{ 
                         getCustomerInfoForParticularUser(item?.user?._id)
                      setOpenInfo(true)}}>
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
                          ID:{item?.user?.Id}
                        </p>
                        {isOpenMenu === i && (
                          <div className="absolute top-0 z-20 md:-right-[260px] lg:-right-[250px] xl:-right-[230px]" >
                            <MenuCard onClose={()=> setOpenMenu(false)} data={item?.user}/>
                          </div>
                        )}
                      </div>
                    </td>
                  <td className="font-semibold text-xl">£{item?.total}</td>
                  <td onClick={()=> {
                    getPurchasesStoreId(item?._id)
                    setOpenTrans(true)
                    }} className="font-semibold text-[#0070BC] underline cursor-pointer">{item?.user?.refferalCode}</td>

                  <td>
                   {getDateFromISOString(item?.createdAt)} <span className="text-[#0070BC]">({formatTime2(item?.createdAt)})</span>
                  </td>
                  <td>
                    <div className="flex items-center gap-3">
                      <img
                        src={item?.product?.image}
                        alt=""
                        className="h-10 w-10 rounded-full"
                      />
                      <div>
                        <p className="font-semibold text-left">{item?.product?.name}</p>
                        <p className="text-[#000000B2] text-left">{item?.product?.nutrition}</p>
                      </div>
                    </div>
                  </td>
                  <td className="font-semibold text-[#000000B2]">{item?.product?._id}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data?.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
       <DialogDefault open={isOpenInfo} handleOpen={setOpenInfo} size={"xxl"}>
        <CustomeInfo handleOpen={setOpenInfo} customerInfo={customerInfo}/>
      </DialogDefault>
       <DialogDefault open={isOpenTrans} handleOpen={setOpenTrans}>
        <TransactionDetails handleOpen={setOpenTrans} brandData={singlePurchases?.outletId} userData={singlePurchases?.user} data={singlePurchases}/>
      </DialogDefault>
    </div>
  );
};

export default PurchaseTable1;
