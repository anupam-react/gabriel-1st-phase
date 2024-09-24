import { useState } from "react";
import { fetchApiData } from "../utiils";

const useProductInfo = () => {
  const [productInfo, setProdInfo] = useState([]);
  const [categoryInfo, setCategotyInfo] = useState([]);
  const [subCategoryInfo, setSubCategotyInfo] = useState([]);

  const getProductById = async (id) => {
    const data = await fetchApiData(
      `https://money-chat.com/api/api/v1/brandLoyalty/getProductById/${id}`
    );
    setProdInfo(data?.data);
    getCategorybyId(data?.data?.categoryId);
    getSubcategoryById(data?.data?.subCategoryId);
  };
  const getCategorybyId = async (id) => {
    const data = await fetchApiData(
      `https://money-chat.com/api/api/v1/admin/Category/getCategory/${id}`
    );
    setCategotyInfo(data?.data);
  };
  const getSubcategoryById = async (id) => {
    const data = await fetchApiData(
      `https://money-chat.com/api/api/v1/SubCategory/${id}`
    );
    setSubCategotyInfo(data?.data);
  };

  return {
    getProductById,
    productInfo,
    categoryInfo,
    subCategoryInfo,
  };
};

export default useProductInfo;
