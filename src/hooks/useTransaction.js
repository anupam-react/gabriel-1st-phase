import { useEffect, useState } from "react";
import { createApiData, fetchApiData } from "../utiils";


const useTransaction = () => {
  const [salesVolume, setSalesVolume] = useState([])
  const [transactionCount, setTransactionCount] = useState([])
  const [averageTransaction, setAverageTransaction] = useState([])
  const [topSellingItems, setTopSellingItems] = useState([])
  const [timeBaseAnalytics, setTimeBaseAnalytics] = useState([])
  const [loyaltyMetrics, setLoyaltyMetrics] = useState([])
  const [report, setReport] = useState() 

  const getTransactionSaleVolume = async (type = "All" ,startDate ="", endDate="")=>{

    const data = await fetchApiData(`https://money-chat.com/api/api/v1/Dashboard/getTransactionSaleVolume?type=${type}&startDate=${startDate}&endDate=${endDate}`)
    setSalesVolume(data?.data)
  }
  const getTransactionCount = async (type = "All",startDate ="", endDate ="")=>{
    const data = await fetchApiData(`https://money-chat.com/api/api/v1/Dashboard/getTransactionCount?type=${type}&startDate=${startDate}&endDate=${endDate}`)
    setTransactionCount(data?.data)
  }
  const getAverageTransactionValue = async (type = "All",startDate ="", endDate ="")=>{
    const data = await fetchApiData(`https://money-chat.com/api/api/v1/Dashboard/getAverageTransactionValue?type=${type}&startDate=${startDate}&endDate=${endDate}`)
    setAverageTransaction(data?.data)
  }
  const getTopSellingItems = async (type = "All", startDate ="", endDate="")=>{
    if(type === 'custom'){
 const data = await fetchApiData(`https://money-chat.com/api/api/v1/Dashboard/getTopSellingItems?type=${type}&startDate=${startDate}&endDate=${endDate}`)
    setTopSellingItems(data?.data)
    }else{
      const data = await fetchApiData(`https://money-chat.com/api/api/v1/Dashboard/getTopSellingItems?type=${type}`)
      setTopSellingItems(data?.data)
    }
 
  }
  const getTimeBaseAnalytics = async (type = "All",startDate ="", endDate ="")=>{
    const data = await fetchApiData(`https://money-chat.com/api/api/v1/Dashboard/getTimeBaseAnalytics?type=${type}&startDate=${startDate}&endDate=${endDate}`)
    setTimeBaseAnalytics(data?.data)
  }
  const getCustomerLoyaltyMetrics = async (type = "All",startDate ="", endDate ="")=>{
    const data = await fetchApiData(`https://money-chat.com/api/api/v1/brandLoyalty/getCustomerLoyaltyMetrics?type=${type}&startDate=${startDate}&endDate=${endDate}`)
    setLoyaltyMetrics(data?.data)
  }

  async function getTransactionReport(typeOfData="",type="All" , fromDate="", toDate="" ) {
    const data = await createApiData(
      `https://money-chat.com/api/api/v1/brandLoyalty/getTransactionReport?type=${type}&startDate=${fromDate}&endDate=${toDate}&typeOfData=${typeOfData}`
    );
    window.open(data?.pdfLink)
   setReport(data?.pdfLink)
  }



  useEffect(()=>{
    getTransactionSaleVolume()
    getTransactionCount()
    getAverageTransactionValue()
    getTopSellingItems()
    getTimeBaseAnalytics()
    getCustomerLoyaltyMetrics()
  },[])

  return {
    salesVolume,
    transactionCount,
    averageTransaction,
    topSellingItems,
    timeBaseAnalytics,
    loyaltyMetrics,
    getCustomerLoyaltyMetrics,
    getTransactionSaleVolume,
    getTransactionCount,
    getAverageTransactionValue,
    getTopSellingItems,
    getTimeBaseAnalytics,
    getTransactionReport
    
  };
};

export default useTransaction;