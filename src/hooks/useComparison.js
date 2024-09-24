import { useEffect, useState } from "react";
import { createApiData, fetchApiData } from "../utiils";


const useComparison = () => {
  const [saleComp, setSaleComp] = useState([])
  const [saleproductComp, setSaleProductComp] = useState([])
  const [roasCamp, setRoasCamp] = useState([])
  const [category, setCategory] = useState([])
  const [selectedCat, setCat] = useState(null);
  const [catId, setCatId] = useState(null);
  const [report, setReport] = useState()

  const getSaleComparision = async (type="All")=>{
    const data = await fetchApiData(`https://money-chat.com/api/api/v1/brandLoyalty/getSaleComparision?type=${type}`)
    console.log(data)
    setSaleComp(data)
  }
  const getCategory = async ()=>{
    const data = await fetchApiData(`https://money-chat.com/api/api/v1/SubCategory/all/Subcategory`)
    console.log(data)
    const subCategories = data?.data?.flatMap(item => item?.subCategory);
    setCategory(subCategories)
  }
  const getTotalSaleByProductSubcategory = async (type="All", startDate="", endDate="" , categoryId="")=>{
    const data = await fetchApiData(`https://money-chat.com/api/api/v1/brandLoyalty/getTotalSaleByProductSubcategory?type=${type}&startDate=${startDate}&endDate=${endDate}&categoryId=${categoryId}`)
    console.log(data)
    setSaleProductComp(data?.data)
  }
  const getRorVsCampaignType = async (type="All",startDate="", endDate="" , categoryId="")=>{
    const data = await fetchApiData(`https://money-chat.com/api/api/v1/brandLoyalty/getRorVsCampaignType?type=${type}&startDate=${startDate}&endDate=${endDate}&categoryId=${categoryId}`)
    console.log(data)
    setRoasCamp(data?.data)
  }
  const getComparisonReport = async (type="All", startDate="", endDate="" , typeOfData="" )=>{
    const data = await createApiData(`https://money-chat.com/api/api/v1/brandLoyalty/getSaleComparisionReport?type=${type}&typeOfData=SaleComparision&startDate=${startDate}&endDate=${endDate}`)
    console.log(data)
    window.open(data?.url)
    setReport(data)
  }
  const getRORReport = async (type="All", startDate="", endDate="" , typeOfData="" )=>{
    const data = await createApiData(`https://money-chat.com/api/api/v1/brandLoyalty/getSaleComparisionReport?type=${type}&typeOfData=rorVsCampaign&startDate=${startDate}&endDate=${endDate}`)
    console.log(data)
    window.open(data?.url)
    setReport(data)
  }
  const getSaleCategoryReport = async (type="All", startDate="", endDate="" )=>{
    const data = await createApiData(`https://money-chat.com/api/api/v1/brandLoyalty/getSaleComparisionReport?type=${type}&typeOfData=SaleCategory&startDate=${startDate}&endDate=${endDate}`)
    console.log(data)
    window.open(data?.url)
    setReport(data)
  }

  useEffect(()=>{
    getSaleComparision()
    getTotalSaleByProductSubcategory()
    getCategory()
    getRorVsCampaignType()
  },[])

  const handleCategory = (event) => {
  
  };


  return {
    saleComp,
    report,
    getComparisonReport,
    getRORReport,
    getSaleCategoryReport,
    saleproductComp,
    category,
    selectedCat,
    catId,
    roasCamp,
    setCat,
    setCatId,
    handleCategory,
    getTotalSaleByProductSubcategory,
    getRorVsCampaignType,
    getSaleComparision
  };
};

export default useComparison;