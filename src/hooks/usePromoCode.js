import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createApiData,
  deleteApiData,
  fetchApiData,
  formatDate2,
  formatDate3,
  updateApiData,
} from "../utiils";

import { useRecoilState } from "recoil";
import {
  activeDateState,
  expiryDateState,
  initialState,
  promocodeState,
} from "../components/atoms/promocodeState";

const usePromoCode = () => {
  const [openSuccess, setOpenSuccess] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [promocodes, setPromocodes] = useState([]);
  const [staff, setStaff] = useState([]);
  const [promocodeData, setPromocodeData] = useRecoilState(promocodeState);
  const [activationDate, setActivationDate] = useRecoilState(activeDateState);
  const [expiryDate, setExpiryDate] = useRecoilState(expiryDateState);
  const [staffId, setStaffId] = useState();
  const [isReactive, setReactive] = useState(false);
  const [isDeactive, setDeactive] = useState(false);

  const navigate = useNavigate();

  async function getPromoCodeByToken(search="", fromDate="", toDate="", page=1, limit=1000, maxAmount="", minAmount=""  ) {
    const data = await fetchApiData(
      `https://money-chat.com/api/api/v1/PromoCode/getPromoCodeByToken?search=${search}&fromDate=${fromDate}&toDate=${toDate}&page=${page}&limit=${limit}&maxAmount=${maxAmount}&minAmount=${minAmount}`
    );

    setPromocodes(data?.data);
  }

  const getPromoCodeById = async (id) => {
    const data = await fetchApiData(
      `https://money-chat.com/api/api/v1/PromoCode/getPromoCodeById/${id}`
    );
    console.log(data?.data);
    setPromocodeData(data?.data);
    // setActivationDate(data?.data?.activationDate)
    // setExpiryDate(data?.data?.expiryDate)
  };

  async function getStaffByToken() {
    const data = await fetchApiData(
      "https://money-chat.com/api/api/v1/Staff/getStaffByToken"
    );
    setStaff(data?.data);
  }

  useEffect(() => {
    getPromoCodeByToken();
    getStaffByToken();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setPromocodeData({
      ...promocodeData,
      [name]: val,
    });
  };

  const handleCreatePromocode = async (event) => {
    // event.preventDefault();
    const formData = {
      ...promocodeData,
      staffId: staffId,
      activationDate: formatDate2(activationDate),
      expiryDate: formatDate2(expiryDate),
    };
    console.log(formData);
    try {
      const response = await createApiData(
        "https://money-chat.com/api/api/v1/PromoCode/addPromoCode",
        formData
      );
      getPromoCodeByToken();
      setPromocodeData(initialState);
      setOpenSuccess(true);
      setTimeout(() => {
        setOpenSuccess(false);
        setIsOpen(false);
      }, 2000);
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  const handleUpdatePromocode = async (id) => {
    const formData = {
      title: promocodeData?.title,
      promoCodeId: promocodeData?.promoCodeId,
      description: promocodeData?.description,
      discountType: promocodeData?.discountType,
      discountValue: promocodeData?.discountValue,
      promoCodeLimit: promocodeData?.promoCodeLimit,
      isEmail: promocodeData?.isEmail,
      isSms: promocodeData?.isSms,
      isAppNotification: promocodeData?.isAppNotification,
      isActive: promocodeData?.isActive,
      staffId: staffId || promocodeData?.staffId,
      activationDate:
        formatDate2(activationDate) ||
        formatDate3(promocodeData?.activationDate),
      expiryDate:
        formatDate2(expiryDate) || formatDate3(promocodeData?.expiryDate),
    };
    try {
      const response = await updateApiData(
        `https://money-chat.com/api/api/v1/PromoCode/updatePromoCode/${id}`,
        formData
      );
      getPromoCodeByToken();
      setOpenSuccess(true);
      setPromocodeData(initialState);
      setTimeout(() => {
        setOpenSuccess(false);
        setIsOpen(false);
      }, 2000);
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const handleReactivePromocode = async (id) => {
    const formData = {
      isActive: true,
      activationDate: formatDate2(activationDate),
      expiryDate: formatDate2(expiryDate),
    };
    try {
      const response = await updateApiData(
        `https://money-chat.com/api/api/v1/PromoCode/updatePromoCode/${id}`,
        formData
      );
      getPromoCodeByToken();
      setReactive(false);
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  const handleDeactivePromocode = async (id) => {
    const formData = {
      isActive: false,
    };
    try {
      const response = await updateApiData(
        `https://money-chat.com/api/api/v1/PromoCode/updatePromoCode/${id}`,
        formData
      );
      getPromoCodeByToken();
      setDeactive(false);
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const handleDeletePromocode = async (id) => {
    await deleteApiData(
      `https://money-chat.com/api/api/v1/PromoCode/removePromoCode/${id}`
    );
    getPromoCodeByToken();
  };

  return {
    promocodeData,
    promocodes,
    staff,
    activationDate,
    setActivationDate,
    expiryDate,
    setExpiryDate,
    staffId,
    setStaffId,
    openSuccess,
    setOpenSuccess,
    isOpen,
    setIsOpen,
    isReactive,
    setReactive,
    isDeactive,
    setDeactive,
    setPromocodeData,
    handleChange,
    handleCreatePromocode,
    handleUpdatePromocode,
    handleReactivePromocode,
    handleDeactivePromocode,
    handleDeletePromocode,
    getPromoCodeById,
    getPromoCodeByToken
  };
};

export default usePromoCode;
