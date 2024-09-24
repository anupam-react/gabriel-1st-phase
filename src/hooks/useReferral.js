import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createApiData,
} from "../utiils/index.js";
import { useRecoilState } from "recoil";
import { referralState } from "../components/atoms/referralState.js";

const useReferral = () => {
  const [referralData, setReferralData] = useRecoilState(referralState);
  const [productId, setProductId] = useState("");
  const [openOffer, setOpenOffer] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setReferralData({
      ...referralData,
      [name]: val,
    });
  };

  const handleCreateReferalStampsUserRewards = async (userId) => {
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('productId', productId);
    formData.append('message', referralData?.message);
    formData.append('expireDate', referralData?.expireDate);
    formData.append('exclusiveLink', referralData?.exclusiveLink);
    formData.append('typeOfReward', referralData?.typeOfReward);
    formData.append('rewardPoints', referralData?.rewardPoints);
    // formData.append('description', referralData?.description);
    formData.append('image', referralData?.image);
    
    try {
      const response = await createApiData(
        "https://money-chat.com/api/api/v1/brandLoyalty/createReferalStampsUserRewards",
        formData
      );

      setReferralData(response?.data)
      setOpenOffer(true)

    } catch (error) {
      console.log(error);
      return error;
    }
  };
 
  return {
    referralData,
    handleChange,
    setReferralData,
    openOffer, setOpenOffer,
    handleCreateReferalStampsUserRewards,
    productId, setProductId
  };
};

export default useReferral;
