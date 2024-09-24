import { atom } from 'recoil';

export const initialState1 = {
    description:"",
    totalNoOfStamps:"",
    subCategoryId:"",
    categoryId:"",
    productId:""
    };
  export const stampState = atom({
    key: 'stampState', // unique ID (with respect to other atoms/selectors)
    default: initialState1, // default value (aka initial value)
  });
  export const singleStampState = atom({
    key: 'singleStampState', // unique ID (with respect to other atoms/selectors)
    default: {}, // default value (aka initial value)
  });

  export const singleSavingState = atom({
    key: 'singleSavingState', // unique ID (with respect to other atoms/selectors)
    default: {}, // default value (aka initial value)
  });
  export const singlePointsState = atom({
    key: 'singlePointsState', // unique ID (with respect to other atoms/selectors)
    default: {}, // default value (aka initial value)
  });
  export const pointSystemState = atom({
    key: 'pointSystemState', // unique ID (with respect to other atoms/selectors)
    default: {}, // default value (aka initial value)
  });