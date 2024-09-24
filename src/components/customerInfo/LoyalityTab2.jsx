import React, { useState } from "react";
import "./index.scss";
import CurrentStamp from "./CurrentStamp";
import RedeemedStamp from "./RedeemedStamp";
import IncompleteStamp from "./IncompleteStamp";
const LoyalityTab2 = ({handleOpen , data}) => {
  const [activeLink, setActiveLink] = useState(0);
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  return (
    <div>
      <div className="tabs2-container">
        <div
          style={{ paddingBottom: "30px" }}
          onClick={() =>{
            if(activeLink === 0) {
              handleOpen(false)
            }else{
              handleLinkClick(0)
            }
          }
           }
        >
          <p
            className={`${activeLink === 0 ? "activeButton1" : "normalButton"}`}
          >
            Current Stamp Vouchers
          </p>
          {activeLink === 0 && <hr className="hr4" />}
        </div>
        <div
          style={{ paddingBottom: "30px" }}
          onClick={() =>{
            if(activeLink === 1) {
              handleOpen(false)
            }else{
              handleLinkClick(1)
            }
          }
           }
        >
          <p
            className={`${activeLink === 1 ? "activeButton1" : "normalButton"}`}
          >
            Redeemed Stamp Vouchers
          </p>
          {activeLink === 1 && <hr className="hr4" />}
        </div>
        <div
          style={{ paddingBottom: "30px" }}
          onClick={() =>{
            if(activeLink === 2) {
              handleOpen(false)
            }else{
              handleLinkClick(2)
            }
          }
           }
        >
          <p
            className={`${activeLink === 2 ? "activeButton1" : "normalButton"}`}
          >
            Incomplete Stamps
          </p>
          {activeLink === 2 && <hr className="hr4" />}
        </div>
      </div>

      {activeLink === 0 && <CurrentStamp data={data}/>}
      {activeLink === 1 && <RedeemedStamp data={data}/>}
      {activeLink === 2 && <IncompleteStamp data={data}/>}
    </div>
  );
};

export default LoyalityTab2;
