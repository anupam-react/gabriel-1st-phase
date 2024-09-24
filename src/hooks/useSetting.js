import React, { useEffect, useState } from 'react'
import { fetchApiData, updateApiData } from '../utiils';

const useSetting = () => {

    const [receiveNotificationSms , setReceiveNotificationSms] = useState(false)
    const [receiveNotificationEmail , setReceiveNotificationEmail] = useState(false)
    const [communicationNotificationEmail , setCommunicationNotificationEmail] = useState(false)
    const [communicationNotificationSms , setCommunicationNotificationSms] = useState(false)
    const [image , setImage] = useState({})
    const [automaticReportSchedule , setAutomaticReportSchedule] = useState("Daily")
    const [sendReportTo , setSendReportTo] = useState([])
    const [isMaximumFailedTransactionStatus , setIsMaximumFailedTransactionStatus] = useState(false)
    const [isMaximumFailedTransactionValueCrossed , setIsMaximumFailedTransactionValueCrossed] = useState(false)
    const [maximumFailedTransactionStatus , setMaximumFailedTransactionStatus] = useState("")
    const [maximumFailedTransactionValueCrossed , setMaximumFailedTransactionValueCrossed] = useState("")
    const [profile, setProfile] = useState();

    const getProfile = async () => {
      const data = await fetchApiData(
        `https://money-chat.com/api/api/v1/brandLoyalty/getProfile`
      );
      setProfile(data?.data);
      setReceiveNotificationSms(data?.data?.receiveNotificationSms)
      setReceiveNotificationEmail(data?.data?.receiveNotificationEmail)
      setCommunicationNotificationEmail(data?.data?.communicationNotificationEmail)
      setCommunicationNotificationSms(data?.data?.communicationNotificationSms)
      setAutomaticReportSchedule(data?.data?.automaticReportSchedule)
      setSendReportTo(data?.data?.sendReportTo)
      setImage(data?.data?.exportLocation)
      setIsMaximumFailedTransactionValueCrossed(data?.data?.isMaximumFailedTransactionValueCrossed)
      setIsMaximumFailedTransactionStatus(data?.data?.isMaximumFailedTransactionStatus)
      setMaximumFailedTransactionStatus(data?.data?.maximumFailedTransactionStatus)
      setMaximumFailedTransactionValueCrossed(data?.data?.maximumFailedTransactionValueCrossed)
    };

    useEffect(()=>{
      getProfile()
    },[])

    const handleUpdateNotification = async () => {
        const formData = {
            receiveNotificationSms,
            receiveNotificationEmail
        };

        try {
          const response = await updateApiData(
            `https://money-chat.com/api/api/v1/brandLoyalty/notificationAndReportSetting`,
            formData
          );
       
       
        } catch (error) {
          console.log(error);
          return error;
        }
      };

    const handleUpdateCommunication = async () => {
        const formData = {
            communicationNotificationEmail,
            communicationNotificationSms
        };

        try {
          const response = await updateApiData(
            `https://money-chat.com/api/api/v1/brandLoyalty/notificationAndReportSetting`,
            formData
          );
       
       
        } catch (error) {
          console.log(error);
          return error;
        }
      };
    const handleUpdateReport = async () => {
        const formData = new FormData()
        formData?.append("image",image)
        formData?.append("automaticReportSchedule",automaticReportSchedule)
        sendReportTo?.map((d,i)=>(
            formData?.append("sendReportTo", d)
        ))
        formData?.append("isMaximumFailedTransactionStatus",isMaximumFailedTransactionStatus)
        formData?.append("isMaximumFailedTransactionValueCrossed",isMaximumFailedTransactionValueCrossed)
        formData?.append("maximumFailedTransactionStatus",maximumFailedTransactionStatus)
        formData?.append("maximumFailedTransactionValueCrossed",maximumFailedTransactionValueCrossed)
        

        try {
          const response = await updateApiData(
            `https://money-chat.com/api/api/v1/brandLoyalty/notificationAndReportSetting`,
            formData
          );
       
       
        } catch (error) {
          console.log(error);
          return error;
        }
      };


  return{
    receiveNotificationSms , setReceiveNotificationSms,
    receiveNotificationEmail , setReceiveNotificationEmail,
    communicationNotificationEmail , setCommunicationNotificationEmail,
    communicationNotificationSms , setCommunicationNotificationSms,
    image , setImage,
    automaticReportSchedule , setAutomaticReportSchedule,
    sendReportTo , setSendReportTo,
    isMaximumFailedTransactionStatus , setIsMaximumFailedTransactionStatus,
    isMaximumFailedTransactionValueCrossed , setIsMaximumFailedTransactionValueCrossed,
    maximumFailedTransactionStatus , setMaximumFailedTransactionStatus,
    maximumFailedTransactionValueCrossed , setMaximumFailedTransactionValueCrossed,
    profile,
    handleUpdateReport,
    handleUpdateNotification,
    handleUpdateCommunication
  }
}

export default useSetting