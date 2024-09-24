import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchApiData } from "../utiils";
import { successToast } from "../components/Toast";

const useDigitalReceipt = () => {
  const [receipt, setReceipt] = useState([]);
  const [receiptInfo, setReceiptInfo] = useState([]);
  const [range, setRange] = useState([1, 100]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startDate1, setStartDate1] = useState(new Date());
  const [endDate1, setEndDate1] = useState(new Date());
  const [openCustom , setOpenCustom] = useState(false)
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption1, setSelectedOption1] = useState("");



  async function getDigitalReceiptByToken(search="", fromDate="", toDate="", page="", limit="", toSizeInMbNumber="", fromSizeInMbNumber="", documentType="") {
    const data = await fetchApiData(
      `https://money-chat.com/api/api/v1/brandLoyalty/getDigitalReceiptByToken?search=${search}&fromDate=${fromDate}&toDate=${toDate}&page=${page}&limit=${limit}&toSizeInMbNumber=${toSizeInMbNumber}&fromSizeInMbNumber=${fromSizeInMbNumber}&documentType=${documentType}`
    );
    setReceipt(data?.data?.docs);
  }

  const getDigitalReceiptById = async (id)=>{
    const data = await fetchApiData(`https://money-chat.com/api/api/v1/brandLoyalty/getDigitalReceiptById/${id}`)
    setReceiptInfo(data?.data)
  }


  useEffect(() => {
    getDigitalReceiptByToken();
  }, []);

 

  return {
    receipt,
    receiptInfo,
    getDigitalReceiptById,
    range, setRange,startDate, setStartDate,endDate, setEndDate, startDate1, setStartDate1,endDate1, setEndDate1,openCustom , setOpenCustom,selectedOption, setSelectedOption,selectedOption1, setSelectedOption1,
    getDigitalReceiptByToken
  };
};

export default useDigitalReceipt;
