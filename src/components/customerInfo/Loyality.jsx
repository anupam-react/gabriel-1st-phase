import React, { useState } from 'react'
import './index.scss'
import InfoHeader from './InfoHeader'
import LoyalityTab1 from './LoyalityTab1';
import LoyalityTab2 from './LoyalityTab2';
const Loyality = ({ handleOpen , onClose , data }) => {

  const [activeLink, setActiveLink] = useState(0);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  return (
    <div className="info-container">
            <div className="gift-main">
        <p className="title">Customer Loyalty Program</p>
        <img
          src="./Mask group (2).png"
          alt=""
          className="cross-image"
          onClick={() => handleOpen(false)}
        />
      </div>
      <hr className="hr2" />
          <InfoHeader onClose={onClose} data={data}/>
          <div className='layality-buttons'>
              <button className={`${activeLink === 0 ? "activeButton" : ""}`} onClick={() => handleLinkClick(0)}>Points System</button>
              <button className={`${activeLink === 1 ? "activeButton" : ""}`} onClick={() => handleLinkClick(1)}>Stamp System</button>
          </div>
      {activeLink === 1 ?
        <LoyalityTab2 handleOpen={handleOpen} data={data}/> : <LoyalityTab1 handleOpen={handleOpen} onClose={onClose} data={data}/>
      }
    
    </div>
  )
}

export default Loyality
