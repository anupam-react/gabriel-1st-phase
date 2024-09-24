import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchApiData } from "../utiils";
import {  warnToast } from "../components/Toast";

const useRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [subCategoryId, setSubCategoryId] = useState("");
  const [category, setCategory] = useState()
  const [subcategory, setSubcategory] = useState()
  const [selectedCat, setCat] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const navigate = useNavigate();

  async function fetchCategory() {
    const data = await fetchApiData('https://money-chat.com/api/api/v1/admin/Category/allCategory');
    setCategory(data?.data);
  }
  async function fetchSubCategory(id) {
    if(id !=="" ){
      const data = await fetchApiData(`https://money-chat.com/api/api/v1/SubCategory/allSubcategoryById/${id}`);
      setSubcategory(data?.data);

    }
  }

  useEffect(()=>{
    fetchCategory()
  },[])

  const handleCategory = (event)=>{
    setCat(event)
    setCategoryId(event.value);
  }



  const handleRegister = async (event) => {
    event.preventDefault();
     if (!email || !password || !name || !phone) {
       return warnToast("Fill all the fields");
     }
     if (password !== confirmPassword ) {
       return warnToast("Password and re-enter password not match");
     }
   
     console.log(email, password);
     const formData ={
       fullName:name,
       email,
       phone,
       country,
       password,
      categoryId,
      subCategoryId
     }


     try {
       const response = await axios.post(
         "https://money-chat.com/api/api/v1/brandLoyalty/registration",
        formData
       );
      // successToast("Regsiter Successfully");
      console.log(response?.data)
    sessionStorage.setItem("userId", response?.data?.data?._id);
       navigate("/documents")

     } catch (error) {
       console.log(error);
       return error;
     }
  };
  const handleForgetPassword = async (event) => {
    event.preventDefault();
    
  
     const formData ={
       email
     }

     try {
       const response = await axios.post(
         "https://money-chat.com/api/api/v1/brandLoyalty/forgetPassword",
        formData
       );
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);

     } catch (error) {
       console.log(error);
       return error;
     }
  };

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    setConfirmPassword,
    confirmPassword,
    phone,
    setPhone,
    country,
    setCountry,
    categoryId,
    setCategoryId,
    subCategoryId, 
    setSubCategoryId,
    category,
    subcategory,
    selectedCat, 
    isSuccess,
    handleRegister,
    handleCategory,
    handleForgetPassword
  };
};

export default useRegister;
