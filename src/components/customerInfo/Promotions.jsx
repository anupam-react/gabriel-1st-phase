import React, { useEffect, useState } from "react";
import "./index.scss";
import InfoHeader from "./InfoHeader";
import { DialogDefault } from "../common/DilogBox";
import HistoryDetails from "./HistoryDetails";
import TransactionCupon from "./TransactionCupon";
import TransactionDiscount from "./TransactionDiscount";
import ProductDetails3 from "./ProductDetails3";
import TransactionDetails from "./TransactionDetails";
import { fetchApiData, formatTime2, getDateFromISOString } from "../../utiils";

const Promotions = ({ handleOpen , onClose , data}) => {
  const [openProduct, setOpenproduct] = useState(false);
  const [openHistory, setOpenHistory] = useState(false);
  const [openCupon, setOpenCupon] = useState(false);
  const [openDiscount, setOpenDiscount] = useState(false);
  const [openTransaction, setOpenTransaction] = useState(false);

  const [dataInfo, setDataInfo] = useState();

  const getAllCustomerParticipationInPromotions = async () => {
    const response = await fetchApiData(
      `https://money-chat.com/api/api/v1/brandLoyalty/getAllCustomerParticipationInPromotions/ByUserId/${data?._id}`
    );
    console.log(response);
    setDataInfo(response?.data);
  };

  useEffect(()=>{
    getAllCustomerParticipationInPromotions()
  },[])
  return (
    <div className="info-container">
      <div className="gift-main">
        <p className="title">Participation In Promotions</p>
        <img
          src="./Mask group (2).png"
          alt=""
          className="cross-image"
          onClick={() => handleOpen(false)}
        />
      </div>
      <hr className="hr2" />
      <InfoHeader onClose={onClose} data={data}/>

      <div style={{ paddingTop: "30px", paddingBottom: "20px" }}>
        <p
          style={{
            color: "#0070BC",
            fontWeight: 600,
            textTransform: "uppercase",
          }}
          className="cursor-pointer"
          onClick={()=> handleOpen(false)}
        >
          Participation in Promotions
        </p>
        <hr className="hr3" style={{ width: "270px" }} />
      </div>
      <table className="table2">
        <thead>
          <tr>
            <th>Promotion Type</th>
            <th>Participation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ width: "100px"}}>Percentage Discount</td>
            <td style={{ textAlign: "left", paddingLeft: "50px" }}>
              {dataInfo?.percentageDiscount?.length} Purchases made on discounts –{" "}
              <span
                style={{
                  color: "#0070BC",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={()=>setOpenDiscount(dataInfo?.percentageDiscount)}
              >
                {" "}
                See Transactions
              </span>
            </td>
          </tr>
          <tr>
            <td style={{ width: "100px" }}>Coupons</td>
            <td style={{ textAlign: "left", paddingLeft: "50px" }}>
              Redeemed {dataInfo?.coupons?.length} Coupons –{" "}
              <span
                style={{
                  color: "#0070BC",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={()=>setOpenCupon(dataInfo?.coupons)}
              >
                {" "}
                See Transactions
              </span>
            </td>
          </tr>
          <tr>
            <td style={{ width: "100px" }}>Featured Deals</td>
            <td>
          {dataInfo?.featuredDeals?.map((data, i)=>(
            <div key={i}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginLeft: "40px",
              }}
            >
              <img
                src={data?.productId?.image}
                alt=""
                 className="rounded-lg"
                style={{ cursor: "pointer", width: "180px" }}
                onClick={() => setOpenproduct(data?.productId)}
              />
              <div className="text-left">
                Viewed{" "}
                <span
                  style={{
                    color: "#0070BC",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  onClick={() => setOpenHistory(true)}
                >
                  30 times
                </span>
                ,<br />
                Last view: Yesterday, 10:30 pm
              </div>
            </div>
            <hr className="hr5" />
            </div>
          )) }
           
            </td>
          </tr>
          <tr>
            <td style={{ width: "100px" }}>Make A Saving</td>
            <td>
            {dataInfo?.makeASaving?.map((data, i)=>(
            <>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginLeft: "40px",
              }}
            >
              <img
                src={data?.productId?.image}
                alt=""
                className="rounded-lg"
                style={{ cursor: "pointer", width: "180px" }}
                onClick={() => setOpenproduct(data?.productId)}
              />
              <div className="text-left">
                Viewed{" "}
                <span
                  style={{
                    color: "#0070BC",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  onClick={() => setOpenHistory(true)}
                >
                  30 times
                </span>
                ,<br />
                Last view: {getDateFromISOString(data?.createdAt)} , {formatTime2(data?.createdAt)}
              </div>
            </div>
            <hr className="hr5" />
            </>
          )) }
            </td>
          </tr>
          <tr>
            <td style={{ width: "100px" }}>Buy 1 Get 1 Free Deal</td>
            <td>
            {dataInfo?.BuyGetFree?.map((data, i)=>(
              <>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  marginLeft: "40px",
                }}
              >
                <img
                  src={data?.productId?.image}
                  alt=""
                  className="rounded-lg"
                  style={{ cursor: "pointer", width: "180px" }}
                  onClick={() => setOpenproduct(data?.productId)}
                />
                <div className="text-left cursor-pointer" onClick={()=> setOpenTransaction(data)}>
                  Bought 2 times,
                  <span
                    style={{
                      color: "#0070BC",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    see transactions
                  </span>
                  .<br />
                  Last purchase: {getDateFromISOString(data?.orderId?.createdAt)} , {formatTime2(data?.orderId?.createdAt)}
                </div>
              </div>
              <hr className="hr5" />
              </>
                  ))}
            </td>
          </tr>
          <tr>
            <td style={{ width: "100px" }}>Offer</td>
            <td>
            {dataInfo?.Offer?.map((data, i)=>(
              <>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  marginLeft: "40px",
                }}
              >
                <img
                  src={data?.productId?.image}
                  alt=""
                  className="rounded-lg"
                  style={{ cursor: "pointer", width: "180px" }}
                  onClick={() => setOpenproduct(data?.productId)}
                />
                <div className="text-left cursor-pointer" onClick={()=> setOpenTransaction(data)}>
                  Bought 1 times,
                  <span
                    style={{
                      color: "#0070BC",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    see transactions
                  </span>
                  .<br />
                  Last purchase: {getDateFromISOString(data?.orderId?.createdAt)} , {formatTime2(data?.orderId?.createdAt)}
                </div>
              </div>
              <hr className="hr5" />
              </>
                  ))}
            </td>
          </tr>
        </tbody>
      </table>
      <DialogDefault open={openProduct} handleOpen={setOpenproduct}>
        <ProductDetails3 handleOpen={setOpenproduct} data={openProduct}/>
      </DialogDefault>
      <DialogDefault open={openHistory} handleOpen={setOpenHistory}>
        <HistoryDetails handleOpen={setOpenHistory} isType={false}/>
      </DialogDefault>
      <DialogDefault open={openCupon} handleOpen={setOpenCupon} size={"lg"}>
        <TransactionCupon handleOpen={setOpenCupon} data={openCupon}/>
      </DialogDefault>
      <DialogDefault open={openDiscount} handleOpen={setOpenDiscount} size={"lg"}>
        <TransactionDiscount handleOpen={setOpenDiscount} data={openDiscount}/>
      </DialogDefault>
      <DialogDefault open={openTransaction} handleOpen={setOpenTransaction}>
        <TransactionDetails handleOpen={setOpenTransaction} allData={openTransaction} userData={openTransaction?.user} brandData={openTransaction?.brandId} data={openTransaction?.orderId}/>
      </DialogDefault>
    </div>
  );
};

export default Promotions;
