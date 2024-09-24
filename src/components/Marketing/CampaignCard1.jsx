import React, { useState } from "react";
import "./index.scss";
import CampaignMenu from "./CampaignMenu";
import { useNavigate } from "react-router-dom";
import { DialogDefault } from "../common/DilogBox";
import { formatDate } from "../../utiils";
import useCampaign from "../../hooks/useCampaign";

const CampaignCard1 = ({
  isButton = false,
  isStar = false,
  isGift = false,
  image,
  isLive = false,
  title,
  data
}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openunPause, setOpenunPause] = useState(false);
  const navigate = useNavigate();
  const {handlePauseMarketingCampaign} = useCampaign()
  
  return (
    <>
      <div className="campaign-card1-container">
        <div className="card-hearder">
          <p className="">
            Campaign : <span className="text-[#1BB4F0]">{title}</span>
          </p>
          <p>
            Current Sales made : <span className="text-[#00B050]">£2500</span>{" "}
          </p>
          <p>
            Ad Spent : <span className="text-[#FEA82F]">£{data?.campaignCost}</span>
          </p>
        </div>
        <div className="campaign-image">
        <div className="cardContainer" style={{width:"100%" , height:"200px"}} >
        <img src={image} alt="" className="w-[150px] h-[100px]" />
        <p className="font-[600] text-xl">{data?.typeOfCampaign}</p>
      </div>
          {/* <img src={image} alt="" /> */}
          <img
            src="./solar_menu-dots-bold.png"
            alt=""
            className="menu-dots"
            onClick={() =>{
              if(openMenu === data?._id) setOpenMenu(false)
              else
               setOpenMenu(data?._id)}}
          />
          {openMenu === data?._id && (
            <CampaignMenu
              isLive={isLive}
              isPause={data?.isPause}
              isOfferCard={true}
              id={data?._id}
              onClose={()=> setOpenMenu(false)}
              openMenu={openMenu}
            />
          )}
          {isGift && (
            <div className="flex justify-end mt-2 items-center gap-2 mr-2">
              <img src="./mdi_gift.png" alt="" />
              <p>500</p>
              {isStar ? (
                <img src="./image 698 (2).png" alt="" />
              ) : (
                <img src="./Vector (11).png" alt="" />
              )}
            </div>
          )}
        </div>
        <p className="text-center font-[500]">Expiry Date : {formatDate(data?.expireDate) }</p>
        {isButton && (
          <button
            className="run-again"
            onClick={() => navigate("/marketing/review-campaign")}
          >
            Run Again
          </button>
        )}
        {data?.isPause && (
          <button className="unpause" onClick={() => {
            handlePauseMarketingCampaign(data?._id)
            setOpenunPause(true)
            setTimeout(()=>{
              setOpenunPause(false)
            },1000)
            }}>
            Unpause to continue run your ad campaign
          </button>
        )}
      </div>
      <DialogDefault open={openunPause} handleOpen={setOpenunPause}>
        <div className="flex flex-col justify-center items-center h-[200px] px-8">
          <img src="./Vector (12).png" alt="" />
          <p className="text-black font-semibold pt-4 text-center">
            ‘Your have Successfully Un pause the Ad”
          </p>
        </div>
      </DialogDefault>
    </>
  );
};

export default CampaignCard1;
