import { useNavigate } from "react-router-dom";
import { errorToast } from "../components/Toast";
import { createApiData } from "../utiils";

const usePaymentReward = () => {
  const navigate = useNavigate();

  const handlePayment = async (id) => {
    try {
      const response = await createApiData(
        `https://money-chat.com/api/api/v1/brandLoyalty/MarketingCampaign/paymentForUserRewards/${id}`
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
        `https://money-chat.com/api/api/v1/brandLoyalty/MarketingCampaign/successForUserRewards/${id}`
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

export default usePaymentReward;
