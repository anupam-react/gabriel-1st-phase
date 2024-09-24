import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createApiData,
  fetchApiData,
  updateApiData,
} from "../utiils/index.js";
import { useRecoilState } from "recoil";

import { inviteState } from "../components/atoms/inviteState.js";
import { warnToast } from "../components/Toast/index.js";



const useInvite = () => {
  const [inviteData, setInviteData] = useRecoilState(inviteState);
  const [productId, setProductId] = useState("");
  const [openOffer, setOpenOffer] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setInviteData({
      ...inviteData,
      [name]: val,
    });
  };

  const handleCreateEventInvite = async (userId ) => {
    if(!userId || !productId || !inviteData?.customMessage || !inviteData?.expireDate || !inviteData?.exclusiveLink || !inviteData?.image || !inviteData?.referUser || !inviteData?.discount) {
      return warnToast("Fill all the fields");
    }
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('productId', productId);
    formData.append('customMessage', inviteData?.customMessage);
    formData.append('expireDate', inviteData?.expireDate);
    formData.append('exclusiveLink', inviteData?.exclusiveLink);
    formData.append('image', inviteData?.image);
    formData.append('referUser', inviteData?.referUser);
    formData.append('discount', inviteData?.discount);
    
    try {
      const response = await createApiData(
        "https://money-chat.com/api/api/v1/brandLoyalty/createEventInvite",
        formData
      );

      setInviteData(response?.data)
      setOpenOffer(true)

    } catch (error) {
      console.log(error);
      return error;
    }
  };
  const handleUpdateEventInvite = async (userId, id ) => {
    if(!userId || !productId || !inviteData?.customMessage || !inviteData?.expireDate ||  !inviteData?.exclusiveLink || !inviteData?.image || !inviteData?.referUser || !inviteData?.discount) {
      return warnToast("Fill all the fields");
    }
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('productId', productId);
    formData.append('customMessage', inviteData?.customMessage);
    formData.append('expireDate', inviteData?.expireDate);
    formData.append('exclusiveLink', inviteData?.exclusiveLink);
    formData.append('image', inviteData?.image);
    formData.append('referUser', inviteData?.referUser);
    formData.append('discount', inviteData?.discount);
    
    try {
      const response = await updateApiData(
        `https://money-chat.com/api/api/v1/brandLoyalty/updateEventInvite/${id}`,
        formData
      );

      setInviteData(response?.data)
      setOpenOffer(true)

    } catch (error) {
      console.log(error);
      return error;
    }
  };
 
  return {
    inviteData,
    handleChange,
    setInviteData,
    openOffer, setOpenOffer,
    productId, setProductId,
    handleCreateEventInvite,
    handleUpdateEventInvite
  };
};

export default useInvite;
