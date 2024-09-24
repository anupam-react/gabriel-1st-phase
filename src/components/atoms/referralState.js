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
  exclusiveLink: "",
  image: {},
  description: "",
  };
export const referralState = atom({
  key: 'referralState', // unique ID (with respect to other atoms/selectors)
  default: initialState, // default value (aka initial value)
});