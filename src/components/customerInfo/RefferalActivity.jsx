import React, { useEffect, useState } from "react";
import { DialogDefault } from "../common/DilogBox";
import InfoHeader from "./InfoHeader";
import "./index.scss";
import ProductDetails2 from "./ProductDeatils2";
import TransactionDetails from "./TransactionDetails";
import { fetchApiData, formatTime2, getDateFromISOString } from "../../utiils";


const RefferalActivity = ({ handleOpen , onClose , data }) => {
  const [openProduct, setOpenproduct] = useState(false);
  const [openHistory, setOpenHistory] = useState(false);

  const [dataInfo, setDataInfo] = useState();

  const getAllCustomerReferralActivity = async () => {
    const response = await fetchApiData(
      `https://money-chat.com/api/api/v1/brandLoyalty/getAllCustomerReferralActivity/ByUserId/${data?._id}`
    );
    console.log(response);
    setDataInfo(response?.data);
  };

  useEffect(()=>{
    getAllCustomerReferralActivity()
  },[])


  return (
    <div className="info-container">
      <div className="gift-main">
        <p className="title">Referral Activity</p>
        <img
          src="./Mask group (2).png"
          alt=""
          className="cross-image"
          onClick={() => handleOpen(false)}
        />
      </div>
      <hr className="hr2" />
      <InfoHeader onClose={onClose} data={data}/>

      <div className="cursor-pointer" onClick={() => handleOpen(false)} style={{ paddingTop: "30px", paddingBottom: "20px" }}>
        <p
          style={{
            color: "#0070BC",
            fontWeight: 600,
            textTransform: "uppercase",
          }}
        >
          REFFERAL ACTIVITY
        </p>
        <hr className="hr3" style={{ width: "160px" }} />
      </div>
      <table className="table2">
        <thead>
          <tr>
            <th>Refeered Customer</th>
            <th>Personalized Referral Link</th>
            <th>Referee Purchase</th>
            <th>Reward Earned</th>
          </tr>
        </thead>
        <tbody>
          {dataInfo?.map((data, i)=>(
          <tr key={i}>
            <td>
              <div className="flex justify-center">
                <img src={data?.user?.image || "./carbon_user-avatar-filled (2).png"} alt="" className="w-[40px] h-[40px] rounded-full"/>
              </div>
              <p style={{ color: "#121212", fontWeight: 600 }}>ID : {data?.user?.Id}</p>
            </td>
            <td>
              <div style={{ color: "#000000", fontWeight: 600 }}>
               {data?.user?.referralSource}
              </div>
            </td>
            <td>
              <div className="flex justify-center items-center gap-6">
                <div>
                  <p
                    className="pb-2"
                    style={{ color: "#000000", fontWeight: 600 }}
                  >
                    {data?.productId?.name}
                  </p>
                  <img
                    src={data?.productId?.image}
                    alt=""
                    style={{
                      cursor: "pointer",
                      width: "120px",
                      height: "100px",
                      borderRadius:"20px"
                    }}
                    onClick={() => setOpenproduct(data?.productId)}
                  />
                </div>
                <div className="mt-6">
                  {getDateFromISOString(data?.orderId?.updatedAt) + "," + formatTime2(data?.orderId?.updatedAt)} <br />
                  <span
                    className="id-link"
                    onClick={() => setOpenHistory(data)}
                  >
                    {" "}
                    See transaction
                  </span>
                </div>
              </div>
            </td>
            <td>
              <div className="flex justify-center items-center gap-6">
                <div>
                  <p
                    className="pb-2"
                    style={{ color: "#000000", fontWeight: 600 }}
                  >
                    Free {data?.userRewardsId?.productId?.name}
                  </p>
                  <img
                    src={data?.userRewardsId?.productId?.image}
                    alt=""
                    style={{
                      cursor: "pointer",
                      width: "120px",
                      height: "100px",
                      borderRadius:"20px"
                    }}
                    onClick={() => setOpenproduct(data?.userRewardsId?.productId)}
                  />
                </div>
                <div className="mt-6">
                  <span className={data?.userRewardsId?.isRewardUsed ? " text-[#3BB54A]" : " text-[#FEA82F]"} >{data?.userRewardsId?.isRewardUsed ? "Claimed" :"Unclaimed"}</span> <br />
                  {getDateFromISOString(data?.userRewardsId?.expireDate) + "," + formatTime2(data?.userRewardsId?.expireDate)}
                </div>
              </div>
            </td>
          </tr>
          ))}
        
        </tbody>
      </table>
      <DialogDefault open={openProduct} handleOpen={setOpenproduct}>
        <ProductDetails2 handleOpen={setOpenproduct} data={openProduct}/>
      </DialogDefault>
      <DialogDefault open={openHistory} handleOpen={setOpenHistory}>
        <TransactionDetails handleOpen={setOpenHistory} allData={openHistory} userData={openHistory?.user} brandData={openHistory?.brandId} data={openHistory?.orderId}/>
      </DialogDefault>
    </div>
  );
};

export default RefferalActivity;
