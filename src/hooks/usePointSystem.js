import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createApiData, fetchApiData } from "../utiils";


const usePointSystem = () => {
  const [categoryId, setCategoryId] = useState("");
  const [subCategoryId, setSubCategoryId] = useState("");
  const [category, setCategory] = useState();
  const [subcategory, setSubcategory] = useState();
  const [selectedCat, setCat] = useState(null);
  const [selectedSubCat, setSubCat] = useState(null);


  const navigate = useNavigate();


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



  const handleCategory = (event) => {
    setCat(event);
  setCategoryId(event.value)
    fetchSubCategory(event.value);
  };

  const handlePoint = async (event) => {
    // event.preventDefault();

    const formData = {
      subCategoryId: subCategoryId,
      categoryId: categoryId,
    };

    try {
      const response = await createApiData(
        "https://money-chat.com/api/api/v1/brandLoyalty/attachedPointSystem",
        formData
      );
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return {
    categoryId,
    setCategoryId,
    subCategoryId,
    setSubCategoryId,
    category,
    subcategory,
    selectedCat,
    selectedSubCat, setSubCat,
    handlePoint,
    handleCategory,
  };
};

export default usePointSystem;
