import React, { useEffect, useState } from "react";
import "./index.scss";
import { PerformanceChart } from "./PerformanceChart";
import { DialogDefault } from "../common/DilogBox";
import { useNavigate, useParams } from "react-router-dom";
import useCampaign from "../../hooks/useCampaign";
import { fetchApiData, formatTime2, getDateFromISOString } from "../../utiils";
const ViewProduct = ({ isOfferCard = false, isPast = false }) => {
  const {getMarketingCampaignById , campaignData} = useCampaign()
  const [openInfo, setOpenInfo] = useState(false);
  const [location , setLocation] = useState()
  const [viewPerformance , setviewPerformance] = useState([])
  const {id} = useParams()

  async function getMarketingLocation() {
    const data = await fetchApiData(
      `https://money-chat.com/api/api/v1/brandLoyalty/MarketingCampaign/getReachedByLocation/${id}`
    );
    setLocation(data?.data);
  }
  async function getMarketingViewPerformance() {
    const data = await fetchApiData(
      `https://money-chat.com/api/api/v1/brandLoyalty/MarketingCampaign/getMarketingCampaignLastWeekPerformance/${id}`
    );
    setviewPerformance(data?.data);
  }
  useEffect(()=>{
    getMarketingCampaignById(id)
    getMarketingLocation()
    getMarketingViewPerformance()
  },[id])
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between">
      <p className="text-2xl font-bold">Live Campaign View</p>
      <button className="back" onClick={()=> navigate("/marketing")}> 
        <img src="../../back.png" alt="" />
        Back</button>

      </div>
      <div className="campaign-view-container">
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold">Ad preview</p>
          {isPast && (
            <button
              className="run-agains"
              onClick={() => navigate("/marketing/review-campaign")}
            >
              Run Again
            </button>
          )}
        </div>
        <div className="campaign-view-main">
          <div className="type-text">
            <p>Campaign Type</p>
            <span>:</span>
            <p className="text-[#1BB4F0]">
              {isOfferCard ? campaignData?.typeOfCampaign : "Gain More Followers"}
            </p>
          </div>
          <div className="type-text">
            <p>Campaign Type</p>
            <span>:</span>
            <div className="flex items-center gap-3">
              Live
              <p className="live-dot"></p>
            </div>
          </div>
          {/* <img src="../../Group 38313.png" alt="" className="w-[300px] " /> */}
          <div className="cardContainer" style={{width:"300px" , height:"150px"}} >
        <img src={campaignData?.couponImage} alt="" className="w-[120px] h-[80px]" />
        <p className="font-[600] text-xl">{campaignData?.typeOfCampaign}</p>
      </div>
        </div>
        <div className="campaign-view-main">
          <p className="text-xl font-bold text-[#1BB4F0]">Performance</p>
          <div className="type-text">
            <p>People Reached</p>
            <span>:</span>
            <p className="text-[#1BB4F0]">{viewPerformance?.performanceOverview?.peopleReached}</p>
          </div>
          <div className="type-text">
            <p>Current Sales</p>
            <span>:</span>
            <p className="text-[#00B050]">£{viewPerformance?.performanceOverview?.currentSales}</p>
          </div>
          <div className="type-text">
            <p>Ad Spent</p>
            <span>:</span>
            <p className="text-[#FEA82F]">£{viewPerformance?.performanceOverview?.adSpent}</p>
          </div>
          {isOfferCard && (
            <div className="type-text">
              <p>Current ROAS</p>
              <span>:</span>
              <div className="flex gap-2">
                <div className="text-[#1BB4F0]">{viewPerformance?.performanceOverview?.currentROAS}</div>
                <img
                  src="../../Group 38355.png"
                  alt=""
                  className="w-4 h-4 cursor-pointer"
                  onClick={() => setOpenInfo(true)}
                />
              </div>
            </div>
          )}
        </div>
        <div className="campaign-view-main">
          <p className="text-xl font-bold text-[#1BB4F0]">Daily Performance</p>
          <div className="flex justify-between">
            <p className="text-[#131313]">Growth</p>
     
          </div>
          <PerformanceChart data={viewPerformance?.dailyPerformance}/>
       
        </div>
        <div className="campaign-view-main">
          <p className="text-xl font-bold text-[#1BB4F0]">
            Reached by Location
          </p>
          {location?.map((d, i)=>(
          <div className="flex items-center gap-2" key={i}>
            <p>{d.location}</p>
            <p className="w-[200px] py-2 bg-[#0070BC] h-fit"></p>
            <p>{d?.total}</p>
          </div>

          ))}
        
        </div>
        <div className="campaign-view-main">
          <p className="text-xl font-bold text-[#1BB4F0]">Details</p>
          <div className="type-text">
            <p>Ad Duration</p>
            <span>:</span>
            <p className="text-[#1BB4F0]">{campaignData?.noOfDays} days</p>
          </div>
          <div className="type-text">
            <p>Start Date</p>
            <span>:</span>
            <p className="text-[#00B050]">{getDateFromISOString(campaignData?.createdAt) + " , " + formatTime2(campaignData?.createdAt)} </p>
          </div>
          <div className="type-text">
            <p>End date</p>
            <span>:</span>
            <p className="text-[#FEA82F]">{getDateFromISOString(campaignData?.expireDate) + " , " + formatTime2(campaignData?.expireDate)}</p>
          </div>
          <div className="type-text">
            <p>Created by</p>
            <span>:</span>
            <p className="text-[#1BB4F0]">Cafè Nero</p>
          </div>
          <div className="type-text">
            <p>Placements</p>
            <span>:</span>
            <p className="text-[#1BB4F0]">Moneychat</p>
          </div>
          <div className="type-text">
            <p>Current Amount Spent</p>
            <span>:</span>
            <p className="text-[#FEA82F]">£{campaignData?.campaignCost}</p>
          </div>
        </div>
        <div className="campaign-view-main">
          <p className="text-xl font-bold text-[#1BB4F0]">Payment Mode</p>
          <div className="flex items-center gap-4 bg-[#0070BC] p-4 text-white w-[330px]">
            <img src="../Rectangle 8758.png" alt="" />
            <p>Mastercard- 6500</p>
          </div>
        </div>
      </div>
      <DialogDefault open={openInfo} handleOpen={setOpenInfo}>
        <div className="text-[#121212] p-[20px] text-xl">
          ROAS is short for return on ad spend. It is a metric that helps you
          measure how much revenue was earned in comparison to how much budget
          was spent on running your ad
        </div>
      </DialogDefault>
    </div>
  );
};

export default ViewProduct;
