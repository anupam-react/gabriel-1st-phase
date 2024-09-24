import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createApiData } from "../utiils/index.js";
import { useRecoilState } from "recoil";
import { bounsState } from "../components/atoms/bounsState.js";

const useBouns = () => {
  const [bouns, setBounData] = useRecoilState(bounsState);
  const [productId, setProductId] = useState("");
  const [openSuccess, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setBounData({
      ...bouns,
      [name]: val,
    });
  };

  const handleCreateAwardFreeBonus = async (userId , prodId) => {
    const formData = {
      userId,
      description: bouns?.description,
      totalNoOfStamps: bouns?.totalNoOfStamps,
      noOfPoint: bouns?.noOfPoint || 0,
      productId: productId || prodId,
    };

    try {
      const response = await createApiData(
        "https://money-chat.com/api/api/v1/brandLoyalty/createAwardFreeBonus",
        formData
      );

      setBounData(response);
      setSuccess(true);
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return {
    bouns,
    handleChange,
    setBounData,
    openSuccess,
    setSuccess,
    handleCreateAwardFreeBonus,
    productId,
    setProductId,
  };
};

export default useBouns;
