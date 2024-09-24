import React, { useRef, useState } from "react";
import { DialogDefault } from "../common/DilogBox";
import TransactionDetails from "./TransactionDetails";

const MenuCard2 = ({data}) => {
  const [openView, setOpenView] = useState(false);
  const [openShare, setOpenShare] = useState(false);
  const [openPrint, setOpenPrint] = useState(false);

  return (
    <div className="menu-container2">
      <button className="menuButton3" onClick={() => setOpenView(true)}>
        View
      </button>
      <button className="menuButton3" onClick={() => setOpenShare(true)}>
        Share
      </button>
      <button className="menuButton3" >
        Print
      </button>

  
      <DialogDefault open={openView} handleOpen={setOpenView}>
        <TransactionDetails isButton={false} handleOpen={setOpenView} allData={data} userData={data?.user} brandData={data?.brandId} data={data?.orderId}/>
      </DialogDefault>
      <DialogDefault open={openShare} handleOpen={setOpenShare}>
        <div className="details-container">
          <p className="details-title">Copied Url Successfully</p>
          <img
            src="./Mask group (2).png"
            alt=""
            className="cross-image2"
            onClick={() => setOpenShare(false)}
          />
        </div>
      </DialogDefault>
      <DialogDefault open={openPrint} handleOpen={setOpenPrint}>
        <div className="details-container">
          <p className="details-title">Select Format To Print</p>
          <img
            src="./Mask group (2).png"
            alt=""
            className="cross-image2"
            onClick={() => setOpenPrint(false)}
          />
          <div className="flex w-full mt-4 justify-between">
            <button className="menuButton5" onClick={() => setOpenPrint(true)}>
              A4
            </button>
            <button className="menuButton5" onClick={() => setOpenPrint(true)}>
              A5
            </button>
            <button className="menuButton5" onClick={() => setOpenPrint(true)}>
              A6
            </button>
            <button className="menuButton5" onClick={() => setOpenPrint(true)}>
              Letter
            </button>
          </div>
        </div>
      </DialogDefault>
    </div>
  );
};

export default MenuCard2;
