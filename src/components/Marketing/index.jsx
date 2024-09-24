import React from "react";
import "./index.scss";
import CampaignCard1 from "./CampaignCard1";
import { useNavigate } from "react-router-dom";
import useCampaign from "../../hooks/useCampaign";
const Marketing = () => {
  const { campaigns, liveCampaign, pastCampaign } = useCampaign();
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-2xl font-bold">Marketing Campaign</p>

        <div
          className="inventory-button gap-2"
          style={{ width: "280px" }}
          onClick={() => navigate("/marketing/newCampaign")}
        >
          <img src="./Mask group (13).png" alt="" />
          <p className="text-lg">Set Up New Campaign</p>
        </div>
      </div>
      <div className="campaign-container">
        <div className="comapaign-main">
          <div className="campaign-header">
            <p>Live Campaigns</p>
            <div className="live-dot"></div>
          </div>
          {liveCampaign?.map((data, i) => (
            <CampaignCard1
              image={data?.couponImage}
              title={data?.typeOfCampaign}
              isGift={true}
              isStar={true}
              isLive={true}
              data={data}
            />
          ))}
          {/* <CampaignCard1
            image="Untitled (1).png"
            title="% Discount"
            isLive={true}
          />
          <CampaignCard1
            image="./Untitled (1).png"
            title="% Discount"
            isPause={true}
            isLive={true}
          />
          <CampaignCard2
            title="Gain More Followers"
            isShop={false}
            isLive={true}
          />
          <CampaignCard2 title="Gain more shop visitors" isLive={true} /> */}
        </div>
        <div>
          <div className="comapaign-main">
            <div className="campaign-header">
              <p>Past Campaigns</p>
              <div className="Past-dot"></div>
            </div>
            {pastCampaign?.map((data, i) => (
              <CampaignCard1
                image={data?.couponImage}
                title={data?.typeOfCampaign}
                isGift={true}
                data={data}
                isButton={true}
              />
            ))}
            {/* <CampaignCard1
              image="./Untitled (1).png"
              title="% Discount"
              isGift={true}
              isButton={true}
            />
            <CampaignCard1
              image="./Group 38198.png"
              title="Buy 1 Get 1 Free "
              isButton={true}
            />
            <CampaignCard2
              title="Gain More Followers"
              isShop={false}
              isButton={true}
            />
            <CampaignCard2 title="Gain more shop visitors" isButton={true} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
