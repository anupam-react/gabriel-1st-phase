import React, { useEffect, useState } from 'react'
import { fetchApiData, formatTime2, getDateFromISOString } from '../../utiils';
import { DialogDefault } from '../common/DilogBox';
import ProductDetails from './ProductDetails';
import ImageCard from './ImageCard';

const RedeemedStamp = ({data}) => {

  const [dataInfo, setDataInfo] = useState();
  const [isOpenProd, setOpenProd] = useState(false);

  const getAllRedeemedStampVouchers = async () => {
    const response = await fetchApiData(
      `https://money-chat.com/api/api/v1/brandLoyalty/getAllRedeemedStampVouchers/ByUserId/${data?._id}`
    );
    console.log(response);
    setDataInfo(response?.data);
  };

  useEffect(() => {
    getAllRedeemedStampVouchers();
  }, []);
  return (
    <div>
      <table className="table2">
        <thead>
          <tr>
            <th>Voucher</th>
            <th>Voucher ID</th>
            <th>Date Redeemed</th>
            <th>Product Claimed</th>
            <th>Outlet Location</th>
          </tr>
        </thead>
        <tbody>
          {dataInfo?.map((data, i)=>(
          <tr key={i}>
            <td>
              <div style={{ color: "#000000", fontWeight: 600 }}>{i+1}</div>
            </td>
            <td>
              <div style={{ color: "#000000B2" }}>{data?.Id}</div>
            </td>
            <td>
              <div style={{ color: "#000000B2" }}>
              {getDateFromISOString(data?.redeemedDate)},
                  <br /> {formatTime2(data?.redeemedDate)}
              </div>
            </td>
            <td>
            <div onClick={() => setOpenProd(data?.productId)} className="cursor-pointer" style={{ display: "flex", justifyContent: "center" }}>
                  <ImageCard image={data?.productId?.image} stamps={data?.totalNoOfStamps} completeNoOfStamps={data?.completeNoOfStamps}/>
                </div>
            </td>
            <td>
              <div style={{ color: "#000000B2" }}>{data?.purchaseBy === "App" ? "N/A" : data?.outletId?.firstLineAddress + " , " + data?.outletId?.secondLineAddress + " , " + data?.outletId?.city }</div>
            </td>
          </tr>

          ))}
         
        </tbody>
      </table>
      <DialogDefault open={isOpenProd} handleOpen={setOpenProd}>
        <ProductDetails handleOpen={setOpenProd} data={isOpenProd} />
      </DialogDefault>
    </div>
  )
}

export default RedeemedStamp
