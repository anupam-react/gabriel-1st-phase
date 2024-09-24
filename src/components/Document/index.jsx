import React, { useState } from "react";
import Uploadfile from "./Uploadfile";
import { useNavigate } from "react-router-dom";
import VerifySuccess from "./VerifySuccess";
import useDocument from "../../hooks/useDocument";
import axios from "axios";
import { successToast } from "../Toast";

const Document = () => {
  const {
    businessLicense,
    setBusinessLicense,
    certificateOfInCorporation,
    setCertificateOfInCorporation,
    ownerOperatorId,
    setOwnerOperatorId,
    proofOfAddress,
    setProofOfAddress,
    isSuccess,
    handleDocuments,
  } = useDocument();

  const navigate = useNavigate();

  const handleFileInputChange1 = async (event) => {
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append("image", file);
    const data = await axios.post(
      "https://money-chat.com/api/api/v1/user/get/ImageUrl",
      formData
    );
    successToast("Image Uplaod Successfully")
    setBusinessLicense(data?.data?.data);
  };

  const handleFileInputChange2 = async (event) => {
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append("image", file);
    const data = await axios.post(
      "https://money-chat.com/api/api/v1/user/get/ImageUrl",
      formData
    );
    console.log(data?.data)
    successToast("Image Uplaod Successfully")
    setCertificateOfInCorporation(data?.data?.data);
  };

  const handleFileInputChange3 = async (event) => {
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append("image", file);
    const data = await axios.post(
      "https://money-chat.com/api/api/v1/user/get/ImageUrl",
      formData
    );
    successToast("Image Uplaod Successfully")
    setOwnerOperatorId(data?.data?.data);
  };
  const handleFileInputChange4 = async (event) => {
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append("image", file);
    const data = await axios.post(
      "https://money-chat.com/api/api/v1/user/get/ImageUrl",
      formData
    );
    successToast("Image Uplaod Successfully")
    setProofOfAddress(data?.data?.data);
  };

  return (
    <>
      {!isSuccess ? (
        <div className="flex justify-center items-center h-[100vh] w-full">
          <div className="flex justify-center items-center h-[100%] w-full">
            <div className="w-2/6 px-4 bg-white border z-50 border-gray-200 rounded shadow-xl sm:p-6 md:p-6 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center mb-10  gap-2">
                <img
                  src="./image 2 (2).svg"
                  alt=""
                  className="w-36 h-18 pb-4"
                />
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className=" h-2.5 rounded-full progress"
                    style={{ width: "70%" }}
                  ></div>
                </div>
                <p className="font-bold text-2xl">Upload Documents!</p>
                <p className="text-[#000000B2] text-center">
                  Please provide the following Documents to register your
                  Account!
                </p>
              </div>
              <form className="space-y-10 h-64 p-4 overflow-auto" action="#">
                <div className="flex flex-col gap-8">
                  <p className="font-bold text-sm" style={{ color: "#0070BC" }}>
                    BUSINESS REGISTRATION & LICENSING
                  </p>
                  <Uploadfile
                    text="Business License (if any)"
                    id="file1"
                    image={businessLicense}
                    handleFileInputChange={handleFileInputChange1}
                  />
                  <Uploadfile  id="file2"  image={certificateOfInCorporation} text="Certificate of Incorporation"  handleFileInputChange={handleFileInputChange2}/>
                </div>
                <div className="flex flex-col gap-8">
                  <p className="font-bold text-sm" style={{ color: "#0070BC" }}>
                    IDENTITY VERIFICATION
                  </p>
                  <Uploadfile id="file3" image={ownerOperatorId} text="Owner/Operator ID"  handleFileInputChange={handleFileInputChange3}/>
                  <Uploadfile id="file4" image={proofOfAddress} text="Proof of Address"  handleFileInputChange={handleFileInputChange4}/>
                </div>

                {/* <div className="flex flex-col gap-4">
                  <p className="font-bold text-sm" style={{ color: "#0070BC" }}>
                    FINANCIAL INFORMATION
                  </p>
                  <div className="flex bg-white items-center shadow rounded-md gap-6 px-4 py-2">
                    <img src="./image 54.svg" alt="" className="w-6 h-6" />
                    <p>Account Number</p>
                  </div>
                  <div className="custom-select relative">
                    <img
                      src="./image 57.png"
                      alt=""
                      className="w-6 h-6 absolute top-2 left-4"
                    />
                    <select
                      id="countries"
                      className="rounded shadow-md text-gray-900 text-sm  border-none block w-full p-2.5 pl-14 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Select Business Bank</option>
                    </select>
                  </div>
                  <div className="flex bg-white items-center shadow rounded-md gap-6 px-4 py-2">
                    <img src="./image 54 (1).svg" alt="" className="w-6 h-6" />
                    <p>Sort Code</p>
                  </div>

                  <Uploadfile text="Financial Statements" />
                </div>
                <div className="flex flex-col gap-4">
                  <p
                    className="font-bold uppercase text-sm"
                    style={{ color: "#0070BC" }}
                  >
                    COMPLIANCE WITH ANTI-MONEY LAUNDERING LAWS ( AML ) DOCUMENTS
                  </p>
                  <Uploadfile text="AML Policy" />
                  <Uploadfile text="AML Training Periods" />
                </div>
                <div className="flex flex-col gap-4">
                  <p
                    className="font-bold uppercase text-sm"
                    style={{ color: "#0070BC" }}
                  >
                    KNOW YOUR CUSTOMER ( KYC ) PROCEDURES DOCUMENT
                  </p>
                  <Uploadfile text="KYC Policy" />
                  <Uploadfile text="Sample KYC Records" />
                </div>
                <div className="flex flex-col gap-4">
                  <p
                    className="font-bold uppercase text-sm"
                    style={{ color: "#0070BC" }}
                  >
                    DATA PROTECTION & PRIVACY DOCUMENT
                  </p>
                  <Uploadfile text="Data Protection Policy" />
                  <Uploadfile text="Data Processing Agreements" />
                </div>
                <div className="flex flex-col gap-4">
                  <p
                    className="font-bold uppercase text-sm"
                    style={{ color: "#0070BC" }}
                  >
                    OPERATIONAL & COMPLIANCE AUDITS DOCUMENT
                  </p>
                  <Uploadfile text="Audit Reports" />
                  <Uploadfile text="Compliance Certifications" />
                </div>
                <div className="flex flex-col gap-4">
                  <p
                    className="font-bold uppercase text-sm"
                    style={{ color: "#0070BC" }}
                  >
                    OPERATIONAL & COMPLIANCE AUDITS DOCUMENT
                  </p>
                  <Uploadfile text="Liability Insurance" />
                </div>
                <div className="flex flex-col gap-4">
                  <p
                    className="font-bold uppercase text-sm"
                    style={{ color: "#0070BC" }}
                  >
                    REFERENCE DOCUMENT
                  </p>
                  <Uploadfile text="Business References" />
                </div> */}
              </form>
              <div className="flex justify-between items-center mt-6">
                <div className="flex justify-center">
                  <button className="sign-button" onClick={handleDocuments}>
                    REGISTER
                  </button>
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                  <img src="./Mask group (4).svg" alt="" className="w-6 h-6" />
                  <p
                    className="text-sm cancel underline"
                    onClick={() => navigate("/register")}
                  >
                    Cancel
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <VerifySuccess />
      )}
    </>
  );
};

export default Document;
