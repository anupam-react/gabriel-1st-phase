// src/state.js

import { atom } from 'recoil';

// Atom
export const initialState = {
    title: "",
    promoCodeId: "",
    description: "",
    discountType: "buyOneGetOneFree",
    discountValue: 0,
    promoCodeLimit: 0,
    isEmail: false,
    isSms: false,
    isAppNotification: false,
    isActive: false,
  };
export const promocodeState = atom({
  key: 'promocodeState', // unique ID (with respect to other atoms/selectors)
  default: initialState, // default value (aka initial value)
});
export const activeDateState = atom({
  key: 'activeDateState', // unique ID (with respect to other atoms/selectors)
  default: new Date(), // default value (aka initial value)
});
export const expiryDateState = atom({
  key: 'expiryDateState', // unique ID (with respect to other atoms/selectors)
  default: new Date(), // default value (aka initial value)
});


