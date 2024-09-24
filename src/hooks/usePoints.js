import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { createApiData, fetchApiData } from "../utiils";
import { successToast } from "../components/Toast";
import { useRecoilState } from "recoil";
import { singlePointsState } from "../components/atoms/LoyalityState";

const usePoints = () => {
  const [pointsData , setPointsData] = useRecoilState(singlePointsState)
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [termAndCondition, setTermAndCondition] = useState("");
  const [noOfPoint, setNoOfPoint] = useState("");
  const [outletId, setOutletId] = useState("");
  const [productId, setProductId] = useState("");;
  const [selectedProduct, setSelectProduct] = useState(null);
  const [selectedOutlate, setSelectOutlate] = useState(null);


  const navigate = useNavigate();

  const getSpendMyPointById = async (id) => {
    const data = await fetchApiData(
      `https://money-chat.com/api/api/v1/brandLoyalty/getSpendMyPointById/${id}`
    );
    setPointsData(data?.data);
  };


  const handleOutlate = (event) => {
    setSelectOutlate(event);
    setOutletId(event?.map((data)=> data?.value));
  };

  const handleMyPoints = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title);
    formData.append('noOfPoint', noOfPoint);
    formData.append('description', description);
    formData.append('productId', productId);
    {outletId?.map((d , i)=>(
      formData.append(`outletId[${i}]`, d)
    ))}
    formData.append('termAndCondition', termAndCondition);


    try {
      const response = await createApiData(
        "https://money-chat.com/api/api/v1/brandLoyalty/createSpendMyPoint",
        formData
      );
      getSpendMyPointById(response?.data?._id)
      successToast("Create Successfully");
      navigate("/loyalty/point/preview");
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return {
    pointsData,
    description, setDescription,
    title, setTitle,
    image, setImage,
    termAndCondition, setTermAndCondition,
    noOfPoint, setNoOfPoint,
    productId, setProductId,
    selectedProduct, setSelectProduct,
    selectedOutlate, setSelectOutlate,
    handleOutlate,
    handleMyPoints,
  };
};

export default usePoints;
