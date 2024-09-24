import React, { useState } from "react";
import { DialogDefault } from "../common/DilogBox";
import AwardStamp from "./AwardStamp";
import AwardCustomer from "./AwardCustomer";

const AwardMenu = ({data}) => {
  const [openGift, setOpenGift] = useState(false);
  const [openOffer, setOpenOffer] = useState(false);
  console.log(data)
  return (
    <div className="award-menu">
      <button className="menuButton3" onClick={() => setOpenGift(true)}>
        Award Stamp
      </button>
      <button className="menuButton3" onClick={() => setOpenOffer(true)}>
        Send Target Point Promotions
      </button>
      <DialogDefault open={openGift} handleOpen={setOpenGift}>
        <AwardStamp handleOpen={setOpenGift} id={data?.brandId?._id} productId={data?.productId?._id}/>
      </DialogDefault>
      <DialogDefault open={openOffer} handleOpen={setOpenOffer}>
        <AwardCustomer handleOpen={setOpenOffer} id={data?.brandId?._id}/>
      </DialogDefault>
    </div>
  );
};

export default AwardMenu;
