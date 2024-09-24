import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createApiData,
  fetchApiData,
  updateApiData,
} from "../utiils";
import { useRecoilState } from "recoil";

import { campaignState, initialState  } from "../components/atoms/campaignState";

const useCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [liveCampaign, setLiveCampaign] = useState([]);
  const [pastCampaign, setPastCampaign] = useState([]);
  const [productId, setProductId] = useState("");
  const [selectedCat, setCat] = useState(null);
  const [selectProduct, setSelectProduct] = useState(null);
  const [category, setCategory] = useState(null);
  const [product, setProduct] = useState(null);
  const [campaignData, setCampaignData] = useRecoilState(campaignState);

  console.log(campaignData);


  const navigate = useNavigate();

  async function fetchCategory() {
    const data = await fetchApiData(
      "https://money-chat.com/api/api/v1/admin/Category/allCategory"
    );
    setCategory(data?.data);
  }

  async function getProduct() {
    const data = await fetchApiData(
      `https://money-chat.com/api/api/v1/brandLoyalty/getProductByToken`
    );
    setProduct(data?.data?.docs);
  }

  async function getMarketingCampaignByToken() {
    const data = await fetchApiData(
      "https://money-chat.com/api/api/v1/brandLoyalty/MarketingCampaign/getMarketingCampaignByToken"
    );

    setCampaigns(data?.data);
  }
  async function getLiveMarketingCampaignByToken() {
    const data = await fetchApiData(
      "https://money-chat.com/api/api/v1/brandLoyalty/MarketingCampaign/getLiveMarketingCampaignByToken"
    );

    setLiveCampaign(data?.data);
  }
  async function getPastMarketingCampaignByToken() {
    const data = await fetchApiData(
      "https://money-chat.com/api/api/v1/brandLoyalty/MarketingCampaign/getPastMarketingCampaignByToken"
    );

    setPastCampaign(data?.data);
  }

  const getMarketingCampaignById = async (id) => {
    const data = await fetchApiData(
      `https://money-chat.com/api/api/v1/brandLoyalty/MarketingCampaign/getMarketingCampaign/${id}`
    );
    console.log(data?.data);
    setCampaignData(data?.data);
    // setActivationDate(data?.data?.activationDate)
    // setExpiryDate(data?.data?.expiryDate)
  };


  useEffect(() => {
    getMarketingCampaignByToken();
    getLiveMarketingCampaignByToken()
    getPastMarketingCampaignByToken()
    fetchCategory()
    getProduct()
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setCampaignData({
      ...campaignData,
      [name]: val,
    });
  };

  const handleProduct = (event) => {
    setSelectProduct(event);
    setCampaignData({...campaignData, productIds: event.value});
  };

  const handleCategory = (event) => {
    setCat(event);
    console.log(event)
    setCampaignData({...campaignData, categoryId: event?.map((d)=> d?.value)});
    
  };

  const handleCreateCampaign = async () => {
    // event.preventDefault();
    const formData = new FormData();
    if(campaignData?.typeOfCampaign)  formData.append('typeOfCampaign', campaignData?.typeOfCampaign || "Percentage Discount");
    // formData.append('couponImage', campaignData?.couponImage || "");
    if(campaignData?.image) formData.append('image', campaignData?.image );
    if(productId) formData.append('productId', productId);
    if(campaignData?.discountValue) formData.append('discountValue', campaignData?.discountValue);
    if(campaignData?.expireDate) formData.append('expireDate', campaignData?.expireDate );
    if(campaignData?.conditionOfUse) formData.append('conditionOfUse', campaignData?.conditionOfUse );
    if(campaignData?.typeOfCustomer) formData.append('typeOfCustomer', campaignData?.typeOfCustomer );
    if(campaignData?.targetLocation) formData.append('targetLocation', campaignData?.targetLocation );
    if(campaignData?.estimateReachMin) formData.append('estimateReachMin', campaignData?.estimateReachMin );
    if(campaignData?.estimateReachMax) formData.append('estimateReachMax', campaignData?.estimateReachMax );
    if(campaignData?.locationLat) formData.append('locationLat', campaignData?.locationLat );
    if(campaignData?.locationLong) formData.append('locationLong', campaignData?.locationLong );
    if(campaignData?.title) formData.append('title', campaignData?.title );
    if(campaignData?.description) formData.append('description', campaignData?.description );
    if(campaignData?.noOfDays) formData.append('noOfDays', campaignData?.noOfDays );
    if(campaignData?.rewardType) formData.append('rewardType', campaignData?.rewardType );
    if(campaignData?.noOfPoints) formData.append('noOfPoints', campaignData?.noOfPoints );
    if(campaignData?.audienceSelection) formData.append('audienceSelection', campaignData?.audienceSelection );
    if(campaignData?.productIds?.length) formData.append('productIds', campaignData?.productIds );
    if(campaignData?.categoryId?.length) formData.append('categoryId', campaignData?.categoryId );
    
    try {
      const response = await createApiData(
        "https://money-chat.com/api/api/v1/brandLoyalty/MarketingCampaign/createMarketingCampaign",
        formData
      );

      setCampaignData(response?.data)
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const handleUpdateCampaign = async (id) => {
    const formData = new FormData();
    if(campaignData?.typeOfCampaign) formData.append('typeOfCampaign', campaignData?.typeOfCampaign || "");
    // formData.append('couponImage', campaignData?.couponImage || "");
    if(campaignData?.image) formData.append('image', campaignData?.image ||"");
    if(productId) formData.append('productId', productId || "");
    if(campaignData?.discountValue) formData.append('discountValue', campaignData?.discountValue || "");
    if(campaignData?.expireDate) formData.append('expireDate', campaignData?.expireDate || "");
    if(campaignData?.conditionOfUse) formData.append('conditionOfUse', campaignData?.conditionOfUse || "");
    if(campaignData?.typeOfCustomer) formData.append('typeOfCustomer', campaignData?.typeOfCustomer || "");
    if(campaignData?.targetLocation) formData.append('targetLocation', campaignData?.targetLocation || "");
    if(campaignData?.estimateReachMin) formData.append('estimateReachMin', campaignData?.estimateReachMin || "");
    if(campaignData?.estimateReachMax) formData.append('estimateReachMax', campaignData?.estimateReachMax || "");
    if(campaignData?.locationLat) formData.append('locationLat', campaignData?.locationLat || "");
    if(campaignData?.locationLong)  formData.append('locationLong', campaignData?.locationLong || "");
    if(campaignData?.title) formData.append('title', campaignData?.title );
    if(campaignData?.description) formData.append('description', campaignData?.description );
    if(campaignData?.noOfDays) formData.append('noOfDays', campaignData?.noOfDays );
    if(campaignData?.rewardType) formData.append('rewardType', campaignData?.rewardType );
    if(campaignData?.noOfPoints) formData.append('noOfPoints', campaignData?.noOfPoints );
    if(campaignData?.audienceSelection) formData.append('audienceSelection', campaignData?.audienceSelection );
    if(campaignData?.productIds?.length) formData.append('productIds', campaignData?.productIds );
    if(campaignData?.categoryId?.length) formData.append('categoryId', campaignData?.categoryId );
    try {
      const response = await updateApiData(
        `https://money-chat.com/api/api/v1/brandLoyalty/MarketingCampaign/updateMarketingCampaign/${id}`,
        formData
      );
      setCampaignData(response?.data);
   
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const handlePauseMarketingCampaign = async (id) => {
    console.log(id)
  
    try {
      const response = await updateApiData(
        `https://money-chat.com/api/api/v1/brandLoyalty/MarketingCampaign/pauseMarketingCampaign/${id}`
      );
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  return {
    campaigns,
    liveCampaign,
    pastCampaign,
    campaignData,
    selectedCat, setCat,
    selectProduct, setSelectProduct,
    category,
    product,
    handleProduct,
    handleCategory,
    setCampaignData,
    handleCreateCampaign,
    handleChange,
    setProductId,
    getMarketingCampaignById,
    handlePauseMarketingCampaign,
    handleUpdateCampaign
  };
};

export default useCampaign;
