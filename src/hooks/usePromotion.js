import { useState } from "react";
import {
  createApiData,
} from "../utiils";
import { useRecoilState } from "recoil";
import { promotionState } from "../components/atoms/offerState";

const usePromotion = () => {
  const [promotionData, setPromotionData] = useRecoilState(promotionState);
  const [productId, setProductId] = useState("");
  const [openOffer, setOpenOffer] = useState(false);
  const [openSuccess, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setPromotionData({
      ...promotionData,
      [name]: val,
    });
  };

  const handleCreatePromotion = async (userId) => {
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('productId', productId);
   if(promotionData?.expireDate) formData.append('expireDate', promotionData?.expireDate);
   formData.append('type', promotionData?.type || "PercentageDiscount");
   if(promotionData?.typeOfReward) formData.append('typeOfReward', promotionData?.typeOfReward);
   if(promotionData?.rewardPoints) formData.append('rewardPoints', promotionData?.rewardPoints);
   if(promotionData?.description) formData.append('description', promotionData?.description);
   if(promotionData?.discount) formData.append('discount', promotionData?.discount);
   if(promotionData?.conditionOfUse) formData.append('conditionOfUse', promotionData?.conditionOfUse);
   if(promotionData?.image) formData.append('image', promotionData?.image);
    
    try {
      const response = await createApiData(
        "https://money-chat.com/api/api/v1/brandLoyalty/createUserTargetedPromotion",
        formData
      );

      setPromotionData(response?.data)
      setOpenOffer(true)

    } catch (error) {
      console.log(error);
      return error;
    }
  };



  return {
    promotionData,
    handleChange,
    setPromotionData,
    openOffer, setOpenOffer,
    handleCreatePromotion,
    productId, setProductId,
    openSuccess, setSuccess
  };
};

export default usePromotion;
