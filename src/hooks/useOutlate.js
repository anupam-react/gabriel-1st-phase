import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createApiData, fetchApiData } from "../utiils";
import { successToast } from "../components/Toast";

const useOutlate = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [postCode, setPostCode] = useState("");
  const [firstLineAddress, setFirstLineAddress] = useState("");
  const [secondLineAddress, setSecondLineAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [openingTime, setOpeningTime] = useState("");
  const [closingTime, setClosingTime] = useState("");



  const [outlate, setOutlate] = useState([])


  const navigate = useNavigate();


  async function getOutlet() {
    const data = await fetchApiData(
      "https://money-chat.com/api/api/v1/brandLoyalty/getOutlet"
    );
    setOutlate(data?.data);
  }
 

useEffect(()=>{
  getOutlet()
},[])


const handleCreateOutlate = async (event) => {
  event.preventDefault();

  const formData = new FormData();
  formData.append('image', image);
  formData.append('name', title);
  formData.append('postCode', postCode);
  formData.append('firstLineAddress', firstLineAddress);
  formData.append('secondLineAddress', secondLineAddress);
  formData.append('city', city);
  formData.append('state', state);
  formData.append('country', country);
  formData.append('openingTime', openingTime);
  formData.append('closingTime', closingTime);


  try {
    const response = await createApiData(
      "https://money-chat.com/api/api/v1/brandLoyalty/createOutlet",
      formData
    );
    successToast("Create Successfully");
    navigate("/inventory/add-product")
  } catch (error) {
    console.log(error);
    return error;
  }
};


  return {
    outlate,
    title, setTitle,
    image, setImage,
    postCode, setPostCode,
    firstLineAddress, setFirstLineAddress,
    secondLineAddress, setSecondLineAddress,
    city, setCity,
    state, setState,
    country, setCountry,
    openingTime, setOpeningTime,
    closingTime, setClosingTime,
    handleCreateOutlate
  };
};

export default useOutlate;
