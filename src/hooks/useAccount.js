import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createApiData, fetchApiData } from "../utiils";
import {  useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import useProfile from "./useProfile";

const useAccount = () => {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("Staff");
  const [employeeId, setEmployeeId] = useState("");
  const [staff, setStaff] = useState([]);
  const [cardDetails, setCardDetails] = useState([]);
  const [success, setSuccess] = useState(false);

  const {profile} = useProfile()

  console.log(profile)

  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);


  // const handleSubmit = async (event) => {
  //   event.preventDefault();

   
  // }

  async function getStaffByToken() {
    const data = await fetchApiData(
      "https://money-chat.com/api/api/v1/Staff/getStaffByToken"
    );
    setStaff(data?.data);
  }
  async function getCardDetails() {
    const data = await fetchApiData(
      'https://money-chat.com/api/api/v1/brandLoyalty/getUserPaymentMethod'
    );
    setCardDetails(data?.cardSaved);
  }

  useEffect(() => {
    getStaffByToken();
    getCardDetails()
  }, []);

  const handleAddStaff = async (event) => {
    event.preventDefault();
    const formData = {
      firstName: fname,
      lastName: lname,
      email,
      phone,
      employeeId,
      Staff: role,
    };

    try {
      const response = await createApiData(
        "https://money-chat.com/api/api/v1/Staff/addStaff",
        formData
      );

      console.log(response?.data);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
      getStaffByToken();
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  
  const handleCreateCard = async (event) => {
    event.preventDefault();
    try {
      const response = await createApiData(
        'https://money-chat.com/api/api/v1/brandLoyalty/saveCardDetailsOnStripe',
      );

      const cardElement = elements.getElement(CardElement);

      if (!cardElement) {
        setError('CardElement not found.');
        return;
      }
  

      console.log( response.client_secret?.client_secret)
      const { setupIntent, error } = await stripe.confirmCardSetup(
        response?.client_secret?.client_secret,
        {
          payment_method: {
            card: cardElement,
            billing_details: {
              name: profile?.fullName,
              email: profile?.email,
            },
          },
        }
      );
  
      if (error) {
        setError(error.message);
      } else {
        // Successfully set up the payment method
        console.log('SetupIntent succeeded:', setupIntent);
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return {
    fname,
    setFName,
    lname,
    setLName,
    email,
    setEmail,
    role,
    setRole,
    phone,
    setPhone,
    employeeId,
    setEmployeeId,
    staff,
    success,
    error,
    cardDetails,
    setSuccess,
    handleAddStaff,
    handleCreateCard,

  };
};

export default useAccount;
