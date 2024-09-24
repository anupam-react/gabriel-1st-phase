import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import usePaymentReward from '../../hooks/usePaymentReward';

const ThankYouPageRewards = () => {
  const navigate =  useNavigate()
  const {id} = useParams()
  const {handlePaymentSuccess} = usePaymentReward()
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-green-500 mb-4">Thank You!</h1>
        <p className="text-gray-700 mb-6">Your payment was successful. Your ad is under review. We will let you know when it is Live.</p>
        <div
        onClick={()=>{
          handlePaymentSuccess(id)
           navigate('/customer')
          }}
          className="inline-block px-6 py-3 cursor-pointer bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-300"
        >
          Return to Home
        </div>
      </div>
    </div>
  );
};

export default ThankYouPageRewards;
