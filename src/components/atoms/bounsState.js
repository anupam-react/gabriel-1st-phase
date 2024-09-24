import { atom } from 'recoil';

// Atom
export const initialState = {
  userId: "",
  productId: "",
  description:"",
  totalNoOfStamps:0,
  noOfPoint:0
  };
  
export const bounsState = atom({
  key: 'bounsState', // unique ID (with respect to other atoms/selectors)
  default: initialState, // default value (aka initial value)
});