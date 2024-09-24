import React, { useEffect, useState } from "react";
import InfoHeader from "./InfoHeader";
import { fetchApiData, getDateFromISOString } from "../../utiils";

const OffersTable = ({ handleOpen , onClose , data }) => {
  const [dataInfo, setDataInfo] = useState();

  const getAllOffers = async () => {
    const response = await fetchApiData(
      `https://money-chat.com/api/api/v1/brandLoyalty/getAllOffers/ByUserId/${data?._id}`
    );
    console.log(response);
    setDataInfo(response?.data);
  };

  useEffect(()=>{
    getAllOffers()
  },[])

  return (
    <div className="info-container">
      <div className="gift-main">
        <p className="title">Offers</p>
        <img
          src="./Mask group (2).png"
          alt=""
          className="cross-image"
          onClick={() => handleOpen(false)}
        />
      </div>
      <hr className="hr2" />
      <InfoHeader  onClose={onClose} data={data}/>
      <div className="cursor-pointer" onClick={() => handleOpen(false)} style={{ paddingTop: "30px", paddingBottom: "20px" }}>
        <p style={{ color: "#0070BC", fontWeight: 600 }}>OFFERS</p>
        <hr className="hr3" style={{ width: "70px" }} />
      </div>
      <table className="table2">
        <thead>
          <tr>
            <th>Offer</th>
            <th>Date Sent</th>
            <th>Read Status</th>
          </tr>
        </thead>
        <tbody>
          {dataInfo?.map((data, i)=>(
          <tr key={i}>
            <td>
              <div className="flex justify-center">
                <img src={data?.image} alt="" className="w-[300px] h-[150px] rounded-md" />
              </div>
            </td>
            <td>{getDateFromISOString(data?.createdAt)}</td>
            <td>
              <span className={data?.isRewardUsed ? "underline text-[#3BB54A]" : "underline text-[#FEA82F]"}>
               {data?.isRewardUsed ? "Read" : "Unread" }
              </span>
              <br />
              {/* Yesterday 6:00 pm. */}
            </td>
          </tr>

          ))}
          {/* <tr>
            <td>
              <div className="flex justify-center">
                <img src="./Group 38082.png" alt="" />
              </div>
            </td>
            <td>10/12/2023</td>
            <td>
              <span className="id-link" style={{ color: "#3BB54A" }}>
                Read
              </span>
              <br />
              Yesterday 6:00 pm.
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default OffersTable;
