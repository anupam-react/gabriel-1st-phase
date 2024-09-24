import { useEffect, useState } from "react";
import { fetchApiData, updateApiData } from "../utiils";

const useProfile = () => {
  const [profile, setProfile] = useState([]);
  const [fullName , setFullName] = useState("")
  const [phones , setPhones] = useState("")
  const [emails , setEmails] = useState("")
  const [password , setPassword] = useState("")
  const [securityQuestion , setSecurityQuestion] = useState("")
  const [securityAnswer , setSecurityAnswer] = useState("")
  const [categoryId , setCategoryId] = useState("")
  const [subCategoryId , setSubCategoryId] = useState("")


  const getProfile = async () => {
    const data = await fetchApiData(
      `https://money-chat.com/api/api/v1/brandLoyalty/getProfile`
    );
    setProfile(data?.data);
    sessionStorage.setItem("userId", data?.data?._id);
  };

  useEffect(() => {
    getProfile();
  }, []);

  const handleUpdateProfileImage = async (image) => {
    const formData = new FormData()
    formData?.append("image",image)

    try {
      const response = await updateApiData(
        `https://money-chat.com/api/api/v1/business/updateProfile`,
        formData
      );
   
      window.location.reload();
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const handleUpdateProfile = async () => {
    const formData = {}
      if(fullName) formData.fullName = fullName
      if(phones) formData.phone = phones
      if(emails) formData.email = emails
      if(password) formData.password = password
      if(securityQuestion) formData.securityQuestion = securityQuestion
      if(securityAnswer) formData.securityAnswer = securityAnswer
      if(categoryId) formData.categoryId = categoryId
      if(subCategoryId) formData.subCategoryId = subCategoryId
    


    try {
      const response = await updateApiData(
        `https://money-chat.com/api/api/v1/business/updateProfile`,
        formData
      );
   
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return {
    profile,
    fullName , setFullName,
    phones , setPhones,
    emails , setEmails,
    password , setPassword,
    securityQuestion , setSecurityQuestion,
    securityAnswer , setSecurityAnswer,
    categoryId , setCategoryId,
    subCategoryId , setSubCategoryId,
    handleUpdateProfile,
    handleUpdateProfileImage
  };
};

export default useProfile;
