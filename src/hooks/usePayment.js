import { useNavigate } from "react-router-dom";
import { errorToast } from "../components/Toast";
import { createApiData } from "../utiils";

const usePayment = () => {
  const navigate = useNavigate();

  const handlePayment = async (id) => {
    try {
      const response = await createApiData(
        `https://money-chat.com/api/api/v1/brandLoyalty/MarketingCampaign/paymentForMarketingCampaign/${id}`
      );
      window.location.href = response?.session?.url;
    } catch (error) {
      console.log(error);
      errorToast(error);
      return error;
    }
  };
  const handlePaymentSuccess = async (id) => {
    try {
      const response = await createApiData(
        `https://money-chat.com/api/api/v1/brandLoyalty/MarketingCampaign/successForMarketingCampaign/${id}`
      );
    } catch (error) {
      console.log(error);
      errorToast(error);
      return error;
    }
  };

  return {
    handlePayment,
    handlePaymentSuccess,
  };
};

export default usePayment;
