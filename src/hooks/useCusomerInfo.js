import { useEffect, useState } from "react";
import { fetchApiData } from "../utiils";


const useCusomerInfo = () => {
  const [dashboard, setDashboard] = useState([])
  const [customer, setCustomer] = useState([])
  const [customerInfo, setCustomerInfo] = useState([])
  const [mostViewProd, setMostViewProd] = useState([])
  const [isOpenInfo, setOpenInfo] = useState(false);


  const getCustomerInfoDashboard = async ()=>{
    const data = await fetchApiData(`https://money-chat.com/api/api/v1/Dashboard/getCustomerInfoDashboard`)
    setDashboard(data?.data)
  }
  const getCustomer = async (search="", fromDate="" , toDate="" , referralSource="", page=1, limit=100, studentEmailVerification="" )=>{
    const data = await fetchApiData(`https://money-chat.com/api/api/v1/Dashboard/getCustomer?search=${search}&fromDate=${fromDate}&toDate=${toDate}&page=${page}&limit=${limit}&studentEmailVerification=${studentEmailVerification}&referralSource=${referralSource}`)
    setCustomer(data?.data?.docs)
  }
  const getCustomerInfoForParticularUser = async (id)=>{
    const data = await fetchApiData(`https://money-chat.com/api/api/v1/Dashboard/getCustomerInfoForParticularUser/${id}`)
    setCustomerInfo(data?.data)
  }
  const getMostViewProductByUserId = async (id)=>{
    const data = await fetchApiData(`https://money-chat.com/api/api/v1/brandLoyalty/getMostViewProduct/ByUserId/${id}`)
    console.log(data?.data)
    setMostViewProd(data?.data)
  }



  useEffect(()=>{
    getCustomerInfoDashboard()
    getCustomer()
  },[])

  return {
    dashboard,
    customer,
    customerInfo,
    mostViewProd,
    getMostViewProductByUserId,
    getCustomerInfoForParticularUser,
    getCustomer,
    isOpenInfo, setOpenInfo
  };
};

export default useCusomerInfo;