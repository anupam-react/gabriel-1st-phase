import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createApiData,
  fetchApiData,
  updateApiData,
} from "../utiils";
import { useRecoilState } from "recoil";

import { campaignState  } from "../components/atoms/campaignState";

const usePromoteProduct = () => {
  const [campaignData, setCampaignData] = useRecoilState(campaignState);

  console.log(campaignData);


  const getMarketingCampaignById = async (id) => {
    const data = await fetchApiData(
      `https://money-chat.com/api/api/v1/brandLoyalty/MarketingCampaign/getMarketingCampaign/${id}`
    );
    console.log(data?.data);
    setCampaignData(data?.data);
    // setActivationDate(data?.data?.activationDate)
    // setExpiryDate(data?.data?.expiryDate)
  };




  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setCampaignData({
      ...campaignData,
      [name]: val,
    });
  };

  const handleCreateCampaign = async (productId) => {
    // event.preventDefault();
    const formData = new FormData();
    formData.append('typeOfCampaign', campaignData?.typeOfCampaign || "");
    formData.append('productId', productId || "");
    formData.append('discountValue', campaignData?.discountValue || "");
    formData.append('expireDate', campaignData?.expireDate || "");
    formData.append('conditionOfUse', campaignData?.conditionOfUse || "");
    formData.append('typeOfCustomer', campaignData?.typeOfCustomer || "");
    formData.append('targetLocation', campaignData?.targetLocation || "");
    formData.append('estimateReachMin', campaignData?.estimateReachMin || "");
    formData.append('estimateReachMax', campaignData?.estimateReachMax || "");
    formData.append('locationLat', campaignData?.locationLat || "");
    formData.append('locationLong', campaignData?.locationLong || "");
    
    try {
      const response = await createApiData(
        "https://money-chat.com/api/api/v1/brandLoyalty/MarketingCampaign/createMarketingCampaign",
        formData
      );

      setCampaignData(response?.data)
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const handleUpdateCampaign = async (id) => {
    const formData = new FormData();
    if(campaignData?.typeOfCampaign) formData.append('typeOfCampaign', campaignData?.typeOfCampaign || "");
    // formData.append('couponImage', campaignData?.couponImage || "");
    if(campaignData?.image) formData.append('image', campaignData?.image ||"");
    if(campaignData?.discountValue) formData.append('discountValue', campaignData?.discountValue || "");
    if(campaignData?.expireDate) formData.append('expireDate', campaignData?.expireDate || "");
    if(campaignData?.conditionOfUse) formData.append('conditionOfUse', campaignData?.conditionOfUse || "");
    if(campaignData?.typeOfCustomer) formData.append('typeOfCustomer', campaignData?.typeOfCustomer || "");
    if(campaignData?.targetLocation) formData.append('targetLocation', campaignData?.targetLocation || "");
    if(campaignData?.estimateReachMin) formData.append('estimateReachMin', campaignData?.estimateReachMin || "");
    if(campaignData?.estimateReachMax) formData.append('estimateReachMax', campaignData?.estimateReachMax || "");
    if(campaignData?.locationLat) formData.append('locationLat', campaignData?.locationLat || "");
    if(campaignData?.locationLong)  formData.append('locationLong', campaignData?.locationLong || "");
    try {
      const response = await updateApiData(
        `https://money-chat.com/api/api/v1/brandLoyalty/MarketingCampaign/updateMarketingCampaign/${id}`,
        formData
      );
      setCampaignData(response?.data);
   
    } catch (error) {
      console.log(error);
      return error;
    }
  };


  return {
    campaignData,
    getMarketingCampaignById,
    setCampaignData,
    handleCreateCampaign,
    handleChange,
    handleUpdateCampaign
  };
};

export default usePromoteProduct;
