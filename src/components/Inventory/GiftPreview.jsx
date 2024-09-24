import React, { useEffect, useState } from "react";
import "./index.scss";
import { DialogDefault } from "../common/DilogBox";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { initialState, offerState } from "../atoms/offerState";
import useProduct from "../../hooks/useProduct";
import { getDateFromISOString } from "../../utiils";
const GiftPreview = () => {
  const {id} = useParams()
  const {getProductById , productInfo} = useProduct()
    const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);
    const [giftData , setGiftData] = useRecoilState(offerState)
    console.log(giftData)
    const navigate = useNavigate()
    useEffect(()=>{
      getProductById(id);

    },[id])
    const handleSubmit = () => {
        setOpenDeleteConfirm(true);
        setGiftData(initialState)
        setTimeout(() => {
            navigate('/inventory')
        },1000)
    }
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-2xl font-bold">Preview Gift</p>
        <div
          className="flex items-center px-6 h-12"
          style={{
            backgroundColor: "#FFFFFF",
            width: "20rem",
            borderRadius: "12px",
            color: "#8BA3CB",
          }}
        >
          <img src="../../image 2 (3).svg" alt="search" className="w-6 h-6" />
          <input
            type="text"
            className="border-none w-48 bg-transparent outline-none focus:ring-0 focus:shadow-none focus:border-none"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="gift-container2">
        <div className="gift-main2">
          <img src={productInfo?.image} alt="" className="back-image2" />
          <div className="image-text2">
            <p className="text-2xl">Gift {productInfo?.name}</p>
            <p className="text-[12px]">Gift a {productInfo?.name} for £{giftData?.price}</p>
          </div>
        </div>
        <div className="w-[500px] font-bold mt-2">
          <p className="pb-2">
        {giftData?.description}
          </p>
          <p className="pb-2">Expiry Date - {getDateFromISOString(giftData?.expireDate)}</p>
          <button
            className="loyalty-button1"
            style={{ width: "300px" }}
            onClick={handleSubmit}
          >
            Sent To Customer Gift Folder
          </button>
        </div>
          </div>
                <DialogDefault open={openDeleteConfirm} handleOpen={setOpenDeleteConfirm}>
        <div className="alert">
          <img src="../../Vector (2).png" alt="" />
          <p className="text-center text-lg">
            Product successfully sent to customer Gift Folder'
          </p>
        </div>
      </DialogDefault>
    </div>
  );
};

export default GiftPreview;
