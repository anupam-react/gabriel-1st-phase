
import { useEffect, useState } from "react";
import {  createApiData, fetchApiData } from "../utiils";


const useLoyality = () => {
  const [stamps, setStamps] = useState([]);
  const [saving, setSaving] = useState([]);
  const [points, setPoints] = useState([]);
  const [report, setReport] = useState() 


  async function getStampSystemByToken(search="",page=1, limit=1000, productId="", pointEarned="", subCategoryId="", categoryId="", outletId="",minPrice="",maxPrice="",fromDate="", toDate="") {
    const data = await fetchApiData(
      `https://money-chat.com/api/api/v1/brandLoyalty/getLoyaltyProgramFilterSerachByToken?search=${search}&page=${page}&limit=${limit}&type=stampSystem&productId=${productId}&pointEarned=${pointEarned}&subCategoryId=${subCategoryId}&categoryId=${categoryId}&outletId=${outletId}&minPrice=${minPrice}&maxPrice=${maxPrice}&fromDate=${fromDate}&toDate=${toDate}`
    );
    console.log(data?.data?.docs)
    setStamps(data?.data?.docs || []);
  }

  // https://money-chat.com/api/api/v1/brandLoyalty/getLoyaltyProgramFilterSerachByToken?page=1&limit=10&type=stampSystem

  async function getMakeASavingByToken(search="",page= 1, limit= 1000, productId="", pointEarned="", subCategoryId="", categoryId="", outletId="",minPrice="",maxPrice="",fromDate="", toDate="") {
    const data = await fetchApiData(
      `https://money-chat.com/api/api/v1/brandLoyalty/getLoyaltyProgramFilterSerachByToken?search=${search}&page=${page}&limit=${limit}&type=makeASaving&productId=${productId}&pointEarned=${pointEarned}&subCategoryId=${subCategoryId}&categoryId=${categoryId}&outletId=${outletId}&minPrice=${minPrice}&maxPrice=${maxPrice}&fromDate=${fromDate}&toDate=${toDate}`
    );
    setSaving(data?.data?.docs);
  }

// https://money-chat.com/api/api/v1/brandLoyalty/getLoyaltyProgramFilterSerachByToken?page=1&limit=10&type=makeASaving 

  async function getSpendMyPointByToken(search="",page= 1, limit= 1000, productId="", pointEarned="", subCategoryId="", categoryId="", outletId="",minPrice="",maxPrice="",fromDate="", toDate="") {
    const data = await fetchApiData(
      `https://money-chat.com/api/api/v1/brandLoyalty/getLoyaltyProgramFilterSerachByToken?search=${search}&page=${page}&limit=${limit}&type=spendMyPoint&productId=${productId}&pointEarned=${pointEarned}&subCategoryId=${subCategoryId}&categoryId=${categoryId}&outletId=${outletId}&minPrice=${minPrice}&maxPrice=${maxPrice}&fromDate=${fromDate}&toDate=${toDate}`
    );
    setPoints(data?.data?.docs);
  }

  async function getLoyalityReport(typeOfData="",type="All" , fromDate="", toDate="" ) {
    const data = await createApiData(
      `https://money-chat.com/api/api/v1/brandLoyalty/getLoyaltyProgramReport?type=${type}&startDate=${fromDate}&endDate=${toDate}&typeOfData=${typeOfData}`
    );
    window.open(data?.pdfLink)
   setReport(data?.pdfLink)
  }


// https://money-chat.com/api/api/v1/brandLoyalty/getLoyaltyProgramFilterSerachByToken?page=1&limit=10&type=spendMyPoint 

  useEffect(() => {
    getStampSystemByToken();
    getMakeASavingByToken();
    getSpendMyPointByToken()
  }, []);

 

  return {
    stamps,
    saving,
    points,
    getStampSystemByToken,
    getMakeASavingByToken,
    getSpendMyPointByToken,
    getLoyalityReport
  };
};

export default useLoyality;
