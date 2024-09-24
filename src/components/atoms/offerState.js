import { atom } from 'recoil';

// Atom
export const initialState = {
  userId: "",
  productId: "",
  message: "",
  expireDate: "",
  price: "",
  typeOfReward: "Points",
  rewardPoints: "",
  amount: "",
  discount: "",
  type: "PercentageDiscount",
  image: {},
  description: "",
  };

export const initialStatePromotion = {
  userId: "",
  productId: "",
  outletId:"",
  message: "",
  expireDate: "",
  price: "",
  typeOfReward: "Points",
  rewardPoints: "",
  amount: "",
  discount: "",
  type: "PercentageDiscount",
  image: {},
  description: "",
  conditionOfUse:""
  };
export const offerState = atom({
  key: 'offerState', // unique ID (with respect to other atoms/selectors)
  default: initialState, // default value (aka initial value)
});
export const promotionState = atom({
  key: 'promotionState', // unique ID (with respect to other atoms/selectors)
  default: initialStatePromotion, // default value (aka initial value)
});