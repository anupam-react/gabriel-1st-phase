import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createApiData, fetchApiData } from "../utiils";
import { successToast } from "../components/Toast";
import { singleSavingState } from "../components/atoms/LoyalityState";
import { useRecoilState } from "recoil";

const useSaving = () => {
  const [savingData , setSavingData] = useRecoilState(singleSavingState)
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [termAndCondition, setTermAndCondition] = useState("");
  const [price, setPrice] = useState("");
  const [outletId, setOutletId] = useState([]);
  const [productId, setProductId] = useState("");;
  const [selectedProduct, setSelectProduct] = useState(null);
  const [selectedOutlate, setSelectOutlate] = useState(null);


  const navigate = useNavigate();

  const handleOutlate = (event) => {
    setSelectOutlate(event);
    setOutletId(event?.map((data)=> data?.value));
  };

  const getMakeASavingById = async (id) => {
    const data = await fetchApiData(
      `https://money-chat.com/api/api/v1/brandLoyalty/getMakeASavingById/${id}`
    );
    setSavingData(data?.data);
  };

  const handleMySaving = async (event) => {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('productId', productId);
    {outletId?.map((d , i)=>(
      formData.append(`outletId[${i}]`, d)
    ))}
    formData.append('termAndCondition', termAndCondition);


    try {
      const response = await createApiData(
        "https://money-chat.com/api/api/v1/brandLoyalty/createMakeASaving",
        formData
      );
      getMakeASavingById(response?.data?._id)
      successToast("Create Successfully");
      navigate("/loyalty/saving/preview");
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return {
    savingData,
    description, setDescription,
    title, setTitle,
    image, setImage,
    termAndCondition, setTermAndCondition,
    price, setPrice,
    productId, setProductId,
    selectedProduct, setSelectProduct,
    selectedOutlate, setSelectOutlate,
    handleOutlate,
    handleMySaving,
  };
};

export default useSaving;
