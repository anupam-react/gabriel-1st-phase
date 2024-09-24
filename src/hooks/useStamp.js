import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createApiData, fetchApiData } from "../utiils";
import { successToast } from "../components/Toast";
import { useRecoilState } from "recoil";
import { singleStampState, stampState } from "../components/atoms/LoyalityState";

const useStamp = () => {
  const [stampData , setStampData] = useRecoilState(stampState)
  const [singleStampData , setSingleStampData] = useRecoilState(singleStampState)
  const [productId, setProductId] = useState("");;
  const [categoryId, setCategoryId] = useState("");
  const [subCategoryId, setSubCategoryId] = useState("");
  const [category, setCategory] = useState();
  const [subcategory, setSubcategory] = useState();
  const [selectedCat, setCat] = useState(null);


  const navigate = useNavigate();

  const getStampById = async (id) => {
    const data = await fetchApiData(
      `https://money-chat.com/api/api/v1/brandLoyalty/getStampSystemById/${id}`
    );
    setSingleStampData(data?.data);
  };


  async function fetchCategory() {
    const data = await fetchApiData(
      "https://money-chat.com/api/api/v1/admin/Category/allCategory"
    );
    setCategory(data?.data);
  }


  async function fetchSubCategory(id) {
    if (id !== "") {
      const data = await fetchApiData(
        `https://money-chat.com/api/api/v1/SubCategory/allSubcategoryById/${id}`
      );
      setSubcategory(data?.data);
    }
  }



  useEffect(() => {
    fetchCategory();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setStampData({
      ...stampData,
      [name]: val,
    });
  };

  const handleCategory = (event) => {
    setCat(event);
    setStampData({...stampData , categoryId : event.value});
    fetchSubCategory(event.value);
  };

  const handleStamp = async (event) => {
    event.preventDefault();

    const formData = {
      productId: productId,
      description : stampData?.description,
      totalNoOfStamps: stampData?.totalNoOfStamps,
      subCategoryId: stampData?.subCategoryId,
      categoryId: stampData?.categoryId,
    };

    try {
      const response = await createApiData(
        "https://money-chat.com/api/api/v1/brandLoyalty/createStampSystem",
        formData
      );
      successToast("Create Successfully");
      getStampById(response?.data?._id)
      navigate("/loyalty/stamp-system/preview");
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return {
    singleStampData,
    stampData,
    handleChange,
    setStampData,
    setProductId,
    categoryId,
    setCategoryId,
    subCategoryId,
    setSubCategoryId,
    category,
    subcategory,
    selectedCat,
    handleCategory,
    handleStamp,
  };
};

export default useStamp;
