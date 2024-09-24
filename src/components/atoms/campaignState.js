import { atom } from 'recoil';

// Atom
export const initialState = {
    typeOfCampaign: "Percentage Discount",
    couponImage: "",
    discountValue: "",
    expireDate: "",
    conditionOfUse: "Select specific product attached to Coupon ( Burger)",
    typeOfCustomer: "Active",
    targetLocation: "",
    estimateReachMin: "",
    estimateReachMax: "",
    locationLat: "",
    locationLong: "",
    image:"",
    title:"",
    description:"",
    noOfDays:"",
    rewardType:"Points",
    noOfPoints:"",
    audienceSelection:"",
    productIds:[],
    categoryId:[]
  };
export const campaignState = atom({
  key: 'campaignState', // unique ID (with respect to other atoms/selectors)
  default: initialState, // default value (aka initial value)
});