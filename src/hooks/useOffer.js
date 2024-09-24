import { useState } from "react";
import {
  createApiData,
  updateApiData,
} from "../utiils";
import { useRecoilState } from "recoil";
import { offerState } from "../components/atoms/offerState.js";
import { warnToast } from "../components/Toast/index.js";



const useOffer = () => {
  const [offerData, setOfferData] = useRecoilState(offerState);
  const [productId, setProductId] = useState("");
  const [openOffer, setOpenOffer] = useState(false);
  const [openSuccess, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setOfferData({
      ...offerData,
      [name]: val,
    });
  };

  const handleCreateUserRewards = async (userId , type) => {
    if(!userId || !productId || !offerData?.message || !offerData?.description || !offerData?.image) {
      return warnToast("Fill all the fields");
    }
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('productId', productId);
    formData.append('message', offerData?.message);
    formData.append('type', type);
    formData.append('discount', offerData?.discount);
    formData.append('description', offerData?.description);
    formData.append('image', offerData?.image);
    
    try {
      const response = await createApiData(
        "https://money-chat.com/api/api/v1/brandLoyalty/createUserRewards",
        formData
      );

      setOfferData(response?.data)
      setOpenOffer(true)

    } catch (error) {
      console.log(error);
      return error;
    }
  };
  
  const handleUpdateUserRewards = async (userId , type, id) => {
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('productId', productId);
    formData.append('message', offerData?.message);
    formData.append('type', type);
    formData.append('discount', offerData?.discount);
    formData.append('description', offerData?.description);
    formData.append('image', offerData?.image);
    
    try {
      const response = await updateApiData(
        `https://money-chat.com/api/api/v1/brandLoyalty/updateUserRewards/${id}`,
        formData
      );

      setOfferData(response?.data)
      setOpenOffer(true)

    } catch (error) {
      console.log(error);
      return error;
    }
  };



  return {
    offerData,
    handleChange,
    setOfferData,
    openOffer, setOpenOffer,
    handleCreateUserRewards,
    handleUpdateUserRewards,
    productId, setProductId,
    openSuccess, setSuccess
  };
};

export default useOffer;
