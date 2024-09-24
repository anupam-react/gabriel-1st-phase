import React, { useEffect, useState } from "react";
import "./index.scss";
import InfoHeader from "./InfoHeader";
import { DialogDefault } from "../common/DilogBox";
import BirthDayGift from "./BirthDayGift";
import CustomizedBGift from "./CustomizedBGift";
import { fetchApiData, getDateFromISOString } from "../../utiils";
const Demographic = ({ handleOpen , data , onClose}) => {
  const [openGift, setOpenGift] = useState(false);
  const [openCGift, setOpenCGift] = useState(false);

  const [dataInfo, setDataInfo] = useState()

  console.log(data)

  const getCustomerDemographicByUserId = async ()=>{
    const response = await fetchApiData(`https://money-chat.com/api/api/v1/brandLoyalty/getCustomerDemographic/ByUserId/${data?._id}`)
    console.log(response)
    setDataInfo(response?.data)
  }

  useEffect(()=>{
    getCustomerDemographicByUserId()
  },[])

  return (
    <div className="info-container">
      <div className="gift-main">
        <p className="title">Customer Demographic</p>
        <img
          src="./Mask group (2).png"
          alt=""
          className="cross-image"
          onClick={() => handleOpen(false)}
        />
      </div>
      <hr className="hr2" />
      <InfoHeader onClose={onClose} data={data}/>
      <div style={{ paddingTop: "30px", paddingBottom: "20px" , cursor:"pointer" }}  onClick={() => handleOpen(false)}>
        <p style={{ color: "#0070BC", fontWeight: 600 }}>CUSTOMER DEOGRAPHIC</p>
        <hr className="hr3" style={{ width: "205px" }} />
      </div>
      <table className="table2">
        <thead>
          <tr>
            <th>Customer</th>
            <th>ID</th>
            <th>Location</th>
            <th>DOB</th>
            <th>Occupation</th>
            <th>Gift/Offer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
            <div className="flex justify-center">
                <img src={dataInfo?.image || "./carbon_user-avatar-filled (2).png"} alt="" className="w-[40px] h-[40px] rounded-full"/>
              </div>
              <div style={{ color: "#121212B2" }}> ID : {dataInfo?.Id}</div>
            </td>
            <td>
              <div style={{ color: "#0070BC", textDecoration: "underline" }}>
                {" "}
                ID : {dataInfo?.Id}
              </div>
            </td>
            <td>
              <div style={{ color: "#000000B2" }}>{dataInfo?.city}, {dataInfo?.country}</div>
            </td>
            <td>
              <div style={{ color: "#000000B2" }}>{getDateFromISOString(dataInfo?.dob)}</div>
            </td>
            <td>
              <div style={{ color: "#000000B2" }}>{dataInfo?.occupation}</div>
            </td>
            <td className="flex justify-center items-center">
              <div className="buttonContainer2">
                <button
                  className="button3"
                  onClick={() => {
                    setOpenGift(true);
                  }}
                >
                  Send Birthday Gift
                </button>
                <button
                  className="button3"
                  onClick={() => {
                    setOpenCGift(true);
                  }}
                >
                  Send Birthday Customized Offer
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <DialogDefault open={openGift} handleOpen={setOpenGift}>
        <BirthDayGift handleOpen={setOpenGift} onClose={onClose} id={data?._id}/>
      </DialogDefault>
      <DialogDefault open={openCGift} handleOpen={setOpenCGift}>
        <CustomizedBGift handleOpen={setOpenCGift} id={data?._id}/>
      </DialogDefault>
    </div>
  );
};

export default Demographic;
