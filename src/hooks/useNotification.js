
import { createApiData } from "../utiils/index.js";


const useNotification = () => {

  const handleNotification = async (userId , title , body , date) => {
    const formData = {
   sendTo: "USER",
    total: "SINGLE",
    _id: userId,
    title: title,
    body: body,
    date: date
    };

    try {
      const response = await createApiData(
        "https://money-chat.com/api/api/v1/notification/sendNotification",
        formData
      );
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return {
    handleNotification,
  };
};

export default useNotification;
