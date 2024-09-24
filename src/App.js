import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoutes from "./utiils/PrivateRoutes";
import Login from "./components/Login";
import Register from "./components/Register";
import Document from "./components/Document";
import Help from "./components/Help";
import Forgot from "./components/Help/Forgot";
import Transaction from "./components/Transaction.jsx";
import CustomerInfo from "./components/customerInfo/index.jsx";
import SalesAnalytics from "./components/SalesAnalytics/index.jsx";
import LoyaltyProgram from "./components/LoyaltyProgram/index.jsx";
import PointSystemForm from "./components/LoyaltyProgram/PointSystemForm.jsx";
import StampSystemForm from "./components/LoyaltyProgram/StampSystemForm.jsx";
import StampPreview from "./components/LoyaltyProgram/StampPreview.jsx";
import SavingForm from "./components/LoyaltyProgram/SavingForm.jsx";
import SavingPreview from "./components/LoyaltyProgram/SavingPreview.jsx";
import PointForm from "./components/LoyaltyProgram/PointForm.jsx";
import PointPreview from "./components/LoyaltyProgram/PointPreview.jsx";
import DigitalReceipt from "./components/DigitalReceipt/index.jsx";
import Inventory from "./components/Inventory/index.jsx";
import AddProduct from "./components/Inventory/AddProduct.jsx";
import AddOutlate from "./components/Inventory/AddOutlate.jsx";
import ExitingOutlate from "./components/Inventory/ExitingOutlate.jsx";
import AddOutlate2 from "./components/Inventory/AddOutlate2.jsx";
import ProductDetails from "./components/Inventory/ProductDetails.jsx";
import CustomerGift from "./components/Inventory/CustomerGIft.jsx";
import GiftPreview from "./components/Inventory/GiftPreview.jsx";
import Promote from "./components/Inventory/Promote.jsx";
import ReviewCampaign from "./components/Inventory/ReviewCampaign.jsx";
import AdPreview from "./components/Inventory/AdPreview.jsx";
import Payment from "./components/Inventory/Payment.jsx";
import CustomizedGift from "./components/Inventory/CustomizedGift.jsx";
import CustomizedPreview from "./components/Inventory/CustomizedPreview.jsx";
import EditProduct from "./components/Inventory/EditProduct.jsx";
import EditProduct2 from "./components/Inventory/EditProduct2.jsx";
import Comparison from "./components/Comparison/index.jsx";
import PromoCode from "./components/PromoCode/index.jsx";
import Purchases from "./components/Purchases/index.jsx";
import FeedBack from "./components/FeedBack/index.jsx";
import Marketing from "./components/Marketing";
import ViewProduct from "./components/Marketing/ViewProduct";
import NewCampaign from "./components/Marketing/NewCampaign.jsx";
import MarketingReviewCampaign from "./components/Marketing/MarketingReviewCampaign.jsx";
import MarktingAdPreview from "./components/Marketing/MarktingAdPreview.jsx";
import MarketingEdit from "./components/Marketing/MarketingEdit";
import MarketingEdit1 from "./components/Marketing/MarketingEdit1.jsx";
import MarketingEdit2 from "./components/Marketing/MarketingEdit2.jsx";
import ShopAdPreview from "./components/Marketing/ShopAdPreview.jsx";
import Setting from "./components/Setting/index.jsx";
import Notifications from "./components/Setting/Notifications.jsx";
import ReportSetting from "./components/Setting/ReportSetting.jsx";
import Support from "./components/Setting/Support.jsx";
import Account from "./components/Setting/Account.jsx";
import HeatMaps from "./components/HeatMaps";
import Initialpage from "./components/common/Initialpage.jsx";
import Communications from "./components/Setting/Communications.jsx";
import Notification from "./components/Notification/index.jsx";
import AddMultipleProduct from "./components/Inventory/AddMultipleProduct.jsx";
import ReviewCampaign2 from "./components/Marketing/ReviewCampaign2.jsx";
import MarketingReviewCampaignOffer from "./components/Marketing/MarketingReviewCampaignOffer.jsx";
import MarketingReviewCampaignFree from "./components/Marketing/MarketingReviewCampaignFree.jsx";
import MarketingReviewCampaignFeatured from "./components/Marketing/MarketingReviewCampaignFeatured.jsx";
import MarktingAdPreviewFeatured from "./components/Marketing/MarktingAdPreviewFeatured.jsx";
import MarketingReviewCampaignFollower from "./components/Marketing/MarketingReviewCampaignFollower.jsx";
import FollowerAdPreview from "./components/Marketing/FollowerAdPreview.jsx";
import MarketingReviewCampaignShop from "./components/Marketing/MarketingReviewCampaignShop.jsx";
import MarktingAdPreviewCoupon from "./components/Marketing/MarktingAdPreviewCoupon.jsx";
import ThankYouPage from "./components/Marketing/ThankYouPage.jsx";
import ThankYouPageRewards from "./components/customerInfo/ThankYouPageRewards.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/customer" element={<CustomerInfo />} />
          <Route path="/sales" element={<SalesAnalytics />} />
          <Route path="/loyalty" element={<LoyaltyProgram />} />
          <Route path="/loyalty/point-system" element={<PointSystemForm />} />
          <Route
            path="/loyalty/point-system/review"
            element={<PointSystemForm isReview={true} />}
          />
          <Route path="/loyalty/stamp-system" element={<StampSystemForm />} />
          <Route
            path="/loyalty/stamp-system/review"
            element={<StampSystemForm isReview={true} />}
          />
          <Route
            path="/loyalty/stamp-system/preview"
            element={<StampPreview />}
          />
          <Route path="/loyalty/saving" element={<SavingForm />} />
          <Route
            path="/loyalty/saving/review"
            element={<SavingForm isReview={true} />}
          />
          <Route path="/loyalty/saving/preview" element={<SavingPreview />} />
          <Route path="/loyalty/point" element={<PointForm />} />
          <Route
            path="/loyalty/point/review"
            element={<PointForm isReview={true} />}
          />
          <Route path="/loyalty/point/preview" element={<PointPreview />} />
          <Route path="/receipt" element={<DigitalReceipt />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/inventory/add-product" element={<AddProduct />} />
          <Route path="/inventory/add-multi-product" element={<AddMultipleProduct />} />
          <Route path="/inventory/add-outlate" element={<AddOutlate2 />} />
          <Route
            path="/inventory/existing-outlate"
            element={<ExitingOutlate />}
          />
          {/* <Route path="/inventory/adding-outlate" element={<AddOutlate2 />} /> */}
          <Route path="/inventory/edit-product/:id" element={<EditProduct />} />
          {/* <Route path="/inventory/edit-prod" element={<EditProduct2 />} /> */}
          <Route
            path="/inventory/product-details/:id"
            element={<ProductDetails />}
          />
          <Route path="/inventory/customer-gift/:id" element={<CustomerGift />} />
          <Route path="/inventory/preview-gift/:id" element={<GiftPreview />} />
          <Route
            path="/inventory/customized-gift/:id"
            element={<CustomizedGift />}
          />
          <Route
            path="/inventory/customized-preview/:id"
            element={<CustomizedPreview />}
          />
          <Route path="/inventory/promote/:id" element={<Promote />} />
          <Route
            path="/inventory/review-campaign/:id"
            element={<ReviewCampaign />}
          />
          <Route path="/inventory/ad-preview/:id" element={<AdPreview />} />
          <Route
            path="/inventory/ad-confirm/:id"
            element={<AdPreview isPay={true} />}
          />
          <Route path="/inventory/payment/:path" element={<Payment />} />
          <Route path="/comparison" element={<Comparison />} />
          <Route path="/promo-code" element={<PromoCode />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/feedback" element={<FeedBack />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route
            path="/marketing/view:id"
            element={<ViewProduct isOfferCard={false} />}
          />
          <Route
            path="/marketing/offer-view/:id"
            element={<ViewProduct isOfferCard={true} />}
          />
          <Route
            path="/marketing/offer-view-past/:id"
            element={<ViewProduct isOfferCard={true} isPast={true} />}
          />
          <Route
            path="/marketing/view-past/:id"
            element={<ViewProduct isOfferCard={false} isPast={true} />}
          />
          <Route path="/marketing/newCampaign" element={<NewCampaign />} />
          <Route
            path="/marketing/review-campaign"
            element={<MarketingReviewCampaign />}
          />
          <Route
            path="/marketing/review-offer"
            element={<MarketingReviewCampaignOffer />}
          />
          <Route
            path="/marketing/review-free"
            element={<MarketingReviewCampaignFree />}
          />
          <Route
            path="/marketing/review-featured"
            element={<MarketingReviewCampaignFeatured />}
          />
          <Route
            path="/marketing/review-follower"
            element={<MarketingReviewCampaignFollower />}
          />
          <Route
            path="/marketing/review-shop"
            element={<MarketingReviewCampaignShop />}
          />
          <Route
            path="/marketing/review-campaign-cupon"
            element={<ReviewCampaign2 />}
          />
           <Route
            path="/marketing/ad-preview-coupon"
            element={<MarktingAdPreviewCoupon />}
          />
          <Route path="/marketing/ad-preview" element={<MarktingAdPreview />} />
          <Route path="/marketing/ad-preview-follower" element={<FollowerAdPreview />} />
          <Route path="/marketing/ad-preview-featured" element={<MarktingAdPreviewFeatured />} />
          <Route
            path="/marketing/ad-confirm"
            element={<MarktingAdPreview isPay={true} />}
          />
          <Route
            path="/marketing/ad-follower-confirm"
            element={<FollowerAdPreview isPay={true} />}
          />
             <Route
            path="/marketing/ad-confirm-coupon"
            element={<MarktingAdPreviewCoupon isPay={true} />}
          />
             <Route path="/marketing/payment/:path" element={<Payment />} />
             <Route path="/customer/payment/:path" element={<Payment />} />
          <Route path="/marketing/edit-marketing" element={<MarketingEdit />} />
          <Route
            path="/marketing/edit-followers-marketing"
            element={<MarketingEdit1 />}
          />
          <Route
            path="/marketing/edit-shop-marketing"
            element={<MarketingEdit2 />}
          />
          <Route path="/marketing/shop-ad" element={<ShopAdPreview />} />
          <Route
            path="/marketing/shop-campaign"
            element={<ShopAdPreview isPay={true} />}
          />
        
          <Route path="/setting" element={<Setting />} />
          <Route path="/setting/notifications" element={<Notifications />} />
          <Route path="/setting/report" element={<ReportSetting />} />
          <Route path="/setting/communication" element={<Communications />} />
          <Route path="/support" element={<Support />} />
          <Route path="/account" element={<Account />} />
          <Route path="/heatmap" element={<HeatMaps />} />
          <Route path="/notification" element={<Notification />} />
        </Route>
        <Route path="/" element={<Initialpage />} />
        <Route
            path="/thanks/:id"
            element={<ThankYouPage />}
          />
        <Route
            path="/thanks/:id"
            element={<ThankYouPageRewards />}
          />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/documents" element={<Document />} />
        <Route path="/help" element={<Help />} />
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
    </div>
  );
}

export default App;
