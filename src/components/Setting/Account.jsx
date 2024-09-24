import React, { useState } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { DialogDefault } from "../common/DilogBox";
import useAccount from "../../hooks/useAccount";
import useProfile from "../../hooks/useProfile";
import useDocument from "../../hooks/useDocument";
import axios from "axios";
import { successToast } from "../Toast";
import IconSelect from "../Register/IconSelect";
import Select from "react-select";
import { CardElement, useStripe } from "@stripe/react-stripe-js";

const Account = () => {
  const {
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
    setSuccess,
    handleAddStaff,
    handleCreateCard,
    error,
    cardDetails
  } = useAccount();
  const {
    profile,
    fullName,
    setFullName,
    phones,
    setPhones,
    emails,
    setEmails,
    password,
    setPassword,
    securityQuestion,
    setSecurityQuestion,
    securityAnswer,
    setSecurityAnswer,
    categoryId,
    setCategoryId,
    subCategoryId,
    setSubCategoryId,
    
    handleUpdateProfile,
  } = useProfile();

  const {
    accountNumber,
    setAccountNumber,
    businessBank,
    setBusinessBank,
    sortCode,
    setSortCode,
    businessLicense,
    setBusinessLicense,
    certificateOfInCorporation,
    setCertificateOfInCorporation,
    ownerOperatorId,
    setOwnerOperatorId,
    proofOfAddress,
    setProofOfAddress,
    legalNameOfBusiness,
    setlegalNameOfBusiness,
    vatRegNo,
    setVatRegNo,
    handleAccountDocument,
    handleAccountDocumentImage,
  } = useDocument();

  const [isChecked, setIsChecked] = useState(false);
  const [isAddEmp, setAddEmp] = useState(false);
  const [openAddEmp, setOpenAddEmp] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showSecurity, setShowSecurity] = useState(false);
  const [isView, setIsView] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [selectedSubCat, setSubCat] = useState(null);
  const [selectedCat, setCat] = useState(null);
  const stripe = useStripe();
  const securityQuestions = [
    "What is your mother’s maiden name?",
    "What was the name of your first pet?",
    "What was your first car?",
    "What elementary school did you attend?",
    "In what city were you born?",
  ];

  const options = [
    { value: "electronics", label: "Electronics" },
    { value: "home_garden", label: "Home and Garden" },
    { value: "sporting_goods", label: "Sporting Goods" },
    { value: "books_stationery", label: "Books and Stationery" },
    { value: "jewellery", label: "Jewellery" },
    { value: "pet_supplies", label: "Pet Supplies" },
    { value: "furniture", label: "Furniture" },
    { value: "books_comic_shops", label: "Books & Comic Book Shops" },
    { value: "speciality_food_stores", label: "Speciality Food Stores" },
    { value: "boutique_wine_spirits", label: "Boutique Wine and Spirits" },
    { value: "craft_hobby_store", label: "Craft and Hobby Store" },
  ];

console.log(cardDetails)

  const handleSave = () => {
    console.log("Security Question:", question);
    console.log("Answer:", answer);
    handleUpdateProfile();
    setShowSecurity(false);
  };

  const handleCategory = (event) => {
    setCat(event);
    setCategoryId(event.value);
  };

  console.log(profile);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleFileInputChange1 = async (event) => {
    console.log(event);
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append("image", file);
    const data = await axios.post(
      "https://money-chat.com/api/api/v1/user/get/ImageUrl",
      formData
    );
    successToast("Image Uplaod Successfully");
    console.log(data?.data?.data);
    setBusinessLicense(data?.data?.data);
    handleAccountDocumentImage(data?.data?.data);
  };

  const handleFileInputChange2 = async (event) => {
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append("image", file);
    const data = await axios.post(
      "https://money-chat.com/api/api/v1/user/get/ImageUrl",
      formData
    );
    console.log(data?.data);
    successToast("Image Uplaod Successfully");
    setCertificateOfInCorporation(data?.data?.data);
    handleAccountDocumentImage("", data?.data?.data);
  };

  const handleFileInputChange3 = async (event) => {
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append("image", file);
    const data = await axios.post(
      "https://money-chat.com/api/api/v1/user/get/ImageUrl",
      formData
    );
    successToast("Image Uplaod Successfully");
    setOwnerOperatorId(data?.data?.data);
    handleAccountDocumentImage("", "", data?.data?.data);
  };
  const handleFileInputChange4 = async (event) => {
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append("image", file);
    const data = await axios.post(
      "https://money-chat.com/api/api/v1/user/get/ImageUrl",
      formData
    );
    successToast("Image Uplaod Successfully");
    setProofOfAddress(data?.data?.data);
    handleAccountDocumentImage("", "", "", data?.data?.data);
  };

  const navigate = useNavigate();




  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-xl font-semibold">Account Details</p>
        <div className="flex gap-8">
          <div className="account-status-Main">
            <p className="text-[#000000B2]">STATUS - </p>
            <div className="account-status">
              <p className="dot"></p>
              <p className="text-[#3BB54A]">ACTIVE</p>
            </div>
          </div>
          <button className="back" onClick={() => navigate("/transaction")}>
            <img src="../back.png" alt="" />
            Back
          </button>
        </div>
      </div>
      <div className="supportContainer">
        <p className="text-[#0070BC] font-semibold">PROFILE INFORMATION</p>
        <div className="flex flex-col gap-4">
          <div className="relative w-[50vw] group ">
            <img
              src="./image 54.svg"
              alt=""
              className="w-5 h-6 absolute top-2 left-4"
            />
            <input
              type="name"
              name="name"
              id="name"
              placeholder="Full Name"
              className="account-input"
              required
              value={fullName || profile?.fullName}
              onClick={() => {
                setIsEditing(1);
              }}
              onChange={(e) => setFullName(e.target.value)}
            />
            {isEditing === 1 ? (
              <span
                onClick={() => {
                  handleUpdateProfile();

                  setIsEditing(false);
                }}
                className="text-green-500 font-semibold absolute top-2 right-4 cursor-pointer"
              >
                SAVE
              </span>
            ) : (
              <img
                src="./Mask group (16).png"
                alt=""
                onClick={() => {
                  setIsEditing(1);
                }}
                className="w-5 h-5 absolute top-2 right-4 cursor-pointer opacity-0 group-hover:opacity-100"
              />
            )}
          </div>
          <div className="relative w-[50vw] group ">
            <img
              src="./Mask group (1).svg"
              alt=""
              className="w-5 h-6 absolute top-2 left-4"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="PASSWORD"
              className="account-input"
              required
              value={password}
              onClick={() => {
                setIsEditing(2);
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
            {isEditing === 2 ? (
              <span
                onClick={() => {
                  // handleUpdateProfile();
                  setShowSecurity(true);
                  setIsEditing(false);
                }}
                className="text-green-500 font-semibold absolute top-2 right-4 cursor-pointer"
              >
                SAVE
              </span>
            ) : (
              <img
                src="./Mask group (16).png"
                alt=""
                onClick={() => {
                  setIsEditing(2);
                }}
                className="w-5 h-5 absolute top-2 right-4 cursor-pointer opacity-0 group-hover:opacity-100"
              />
            )}
          </div>

          {/* <div className="relative">
            <img
              src="./image 59.png"
              alt=""
              className="w-5 h-5 absolute top-2 left-4"
            />
            <select
              id="countries"
              //   value={selectedOption}
              //   onChange={handleChange}
              className="account-input"
            >
              <option className="font-semibold">Security Question</option>
            </select>
          </div> */}
          <div
            className="relative w-[50vw]"
            onClick={() => setAddEmp(!isAddEmp)}
          >
            <img
              src="./image 54.svg"
              alt=""
              className="w-5 h-5 absolute top-2 left-4"
            />
            <input
              id="countries"
              //   value={selectedOption}
              //   onChange={handleChange}
              className="account-input"
              placeholder="Add Your Staff/ Employee"
            />

            <img
              src="../Arrow 6.png"
              alt=""
              className="absolute top-3 right-2 cursor-pointer w-4"
            />
            {isAddEmp && (
              <div className="addstaf bg-[white] flex flex-col gap-2  rounded-md p-4">
                {staff?.docs?.map((d, i) => (
                  <div className="flex items-center gap-2" key={i}>
                    <img
                      src={d?.image}
                      alt=""
                      className="w-[20px] h-[20px] rounded-full "
                    />
                    <p>{d?.firstName + " " + d?.lastName}, </p>
                    <p>Id :{d?.employeeId}.</p>
                  </div>
                ))}

                <button
                  className="back"
                  style={{ width: "140px" }}
                  onClick={() => setOpenAddEmp(true)}
                >
                  ADD NEW
                </button>
              </div>
            )}
          </div>
        </div>
        <p className="pt-4 text-black">Contacts</p>
        <div className="flex flex-col gap-4">
          <div className="relative">
            <img
              src="./image 32.svg"
              alt=""
              className="w-5 h-6 absolute top-2 left-4"
            />
            <input
              type="name"
              name="phone"
              id="name"
              placeholder="1234567890"
              className="account-input"
              required
              value={phones || profile?.phone}
              onChange={(e) => setPhones(e.target.value)}
            />
          </div>
          <div className="relative w-[50vw] group ">
            <img
              src="./image 33.svg"
              alt=""
              className="w-5 h-6 absolute top-2 left-4"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="loremipsum@gmail.com"
              className="account-input"
              required
              value={emails || profile?.email}
              onClick={() => {
                setIsEditing(3);
              }}
              onChange={(e) => setEmails(e.target.value)}
            />
            {isEditing === 3 ? (
              <span
                onClick={() => {
                  handleUpdateProfile();
                  setIsEditing(false);
                }}
                className="text-green-500 font-semibold absolute top-2 right-4 cursor-pointer"
              >
                SAVE
              </span>
            ) : (
              <img
                src="./Mask group (16).png"
                alt=""
                onClick={() => {
                  setIsEditing(3);
                }}
                className="w-5 h-5 absolute top-2 right-4 cursor-pointer opacity-0 group-hover:opacity-100"
              />
            )}
          </div>
        </div>
        <p className="pt-4 text-black">My Documents</p>
        {/* <div className="flex gap-2 items-center">
          <img src="./image 671.png" alt="" className="w-5 h-5" />
          <p className="text-[#FC0005]">
            {" "}
            3 Documents are missing.{" "}
            <span className="text-[#000000B2]">
              Please<span className="text-[#000000]"> Upload</span> the
              Remaining Documents!
            </span>
          </p>
        </div> */}
        {/* <div className="flex gap-2 items-center">
          <p className="text-black">Business Registration & Licensing</p>
          <div className="text-[#FC0005] flex items-center gap-2">
            <img src="./image 671.png" alt="" className="w-5 h-5" />
            <p>Missing</p>
          </div>
        </div> */}

        <div className="flex flex-col gap-4">
          <div className="flex gap-[20px]">
            <div className="relative w-[50vw] group ">
              <img
                src="./image 52 (2).png"
                alt=""
                className="w-6 h-6 absolute top-2 left-4"
              />
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Business License"
                className="account-input"
                required
                onClick={() => {
                  setIsView(1);
                }}
                // onChange={(e) => setPassword(e.target.value)}
              />

              <span onClick={()=> {window.open(profile?.documentId?.businessLicense)}} className="w-5 h-5 absolute top-2 right-[150px] font-semibold text-[#fea82f] cursor-pointer opacity-0 group-hover:opacity-100">
                VIEW
              </span>
              {/* <img
                src=""
                alt="view"
                onClick={() => {
                  setIsView(1);
                }}
                className="w-5 h-5 absolute top-2 right-[100px] cursor-pointer opacity-0 group-hover:opacity-100"
              /> */}
            </div>

            <div className="">
              <label
                for="dropzone-file3"
                className="flex bg-white items-center shadow rounded-md justify-center "
              >
                <div
                  className="flex items-center justify-center py-2 px-4 rounded-md text-white gap-2 cursor-pointer"
                  style={{ backgroundColor: "#00AAEA80" }}
                >
                  <img src="./Mask group (5).svg" alt="" className="w-6 h-6" />
                  <p className="text-sm">UPLOAD</p>
                </div>
                <input
                  id="dropzone-file3"
                  type="file"
                  className="hidden"
                  onChange={handleFileInputChange1}
                  
                />
              </label>
            </div>
          </div>
          <div className="flex gap-[20px]">
            <div className="relative w-[50vw] group ">
              <img
                src="./image 52 (2).png"
                alt=""
                className="w-6 h-6 absolute top-2 left-4"
              />
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Certificate of Incorporation"
                className="account-input"
                required
                onClick={() => {
                  setIsView(1);
                }}
                // onChange={(e) => setPassword(e.target.value)}
              />

              <span onClick={()=> {window.open(profile?.documentId?.certificateOfInCorporation)}} className="w-5 h-5 absolute top-2 right-[150px] font-semibold text-[#fea82f] cursor-pointer opacity-0 group-hover:opacity-100">
                VIEW
              </span>
              {/* <img
                src=""
                alt="view"
                onClick={() => {
                  setIsView(1);
                }}
                className="w-5 h-5 absolute top-2 right-[100px] cursor-pointer opacity-0 group-hover:opacity-100"
              /> */}
            </div>

            <div className="">
              <label
                for="dropzone-file"
                className="flex bg-white items-center shadow rounded-md justify-center "
              >
                <div
                  className="flex items-center justify-center py-2 px-4 rounded-md text-white gap-2 cursor-pointer"
                  style={{ backgroundColor: "#00AAEA80" }}
                >
                  <img src="./Mask group (5).svg" alt="" className="w-6 h-6" />
                  <p className="text-sm">UPLOAD</p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={handleFileInputChange2}
                  
                />
              </label>
            </div>
          </div>
      
        </div>
        <p className="text-black">Identity Verification</p>
        <div className="flex flex-col gap-4">
          <div className="flex gap-[20px]">
            <div className="relative w-[50vw] group ">
              <img
                src="./image 52 (2).png"
                alt=""
                className="w-6 h-6 absolute top-2 left-4"
              />
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Owner / Operator ID"
                className="account-input"
                required
                onClick={() => {
                  setIsView(1);
                }}
                // onChange={(e) => setPassword(e.target.value)}
              />

              <span onClick={()=> {window.open(profile?.documentId?.ownerOperatorId)}} className="w-5 h-5 absolute top-2 right-[150px] font-semibold text-[#fea82f] cursor-pointer opacity-0 group-hover:opacity-100">
                VIEW
              </span>
              {/* <img
                src=""
                alt="view"
                onClick={() => {
                  setIsView(1);
                }}
                className="w-5 h-5 absolute top-2 right-[100px] cursor-pointer opacity-0 group-hover:opacity-100"
              /> */}
            </div>

            <div className="">
              <label
                for="dropzone-file1"
                className="flex bg-white items-center shadow rounded-md justify-center "
              >
                <div
                  className="flex items-center justify-center py-2 px-4 rounded-md text-white gap-2 cursor-pointer"
                  style={{ backgroundColor: "#00AAEA80" }}
                >
                  <img src="./Mask group (5).svg" alt="" className="w-6 h-6" />
                  <p className="text-sm">UPLOAD</p>
                </div>
                <input
                  id="dropzone-file1"
                  type="file"
                  className="hidden"
                  onChange={handleFileInputChange3}
                />
              </label>
            </div>
          </div>
          <div className="flex gap-[20px]">
            <div className="relative w-[50vw] group ">
              <img
                src="./image 52 (2).png"
                alt=""
                className="w-6 h-6 absolute top-2 left-4"
              />
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Proof of Address"
                className="account-input"
                required
                onClick={() => {
                  setIsView(1);
                }}
                // onChange={(e) => setPassword(e.target.value)}
              />

              <span onClick={()=> {window.open(profile?.documentId?.proofOfAddress)}} className="w-5 h-5 absolute top-2 right-[150px] font-semibold text-[#fea82f] cursor-pointer opacity-0 group-hover:opacity-100">
                VIEW
              </span>
              {/* <img
                src=""
                alt="view"
                onClick={() => {
                  setIsView(1);
                }}
                className="w-5 h-5 absolute top-2 right-[100px] cursor-pointer opacity-0 group-hover:opacity-100"
              /> */}
            </div>
            <div className="">
              <label
                for="dropzone-file2"
                className="flex bg-white items-center shadow rounded-md justify-center "
              >
                <div
                  className="flex items-center justify-center py-2 px-4 rounded-md text-white gap-2 cursor-pointer"
                  style={{ backgroundColor: "#00AAEA80" }}
                >
                  <img src="./Mask group (5).svg" alt="" className="w-6 h-6" />
                  <p className="text-sm">UPLOAD</p>
                </div>
                <input
                  id="dropzone-file2"
                  type="file"
                  className="hidden"
                  onChange={handleFileInputChange4}
                />
              </label>
            </div>
          </div>
        </div>
        {/* <div className="text-[#FC0005] flex items-center gap-2 ml-[10vw]">
          <img src="./image 671.png" alt="" className="w-5 h-5" />
          <p>Missing</p>
        </div> */}
      </div>
      <div className="supportContainer">
        <p className="text-[#0070BC] font-semibold">BUSINESS INFORMATION</p>
        <div className="flex flex-col gap-4">
          <div className="relative w-[50vw] group ">
            <img
              src="./image 54.svg"
              alt=""
              className="w-5 h-6 absolute top-2 left-4"
            />
            <input
              type="name"
              name="name"
              id="name"
              placeholder="Business Name"
              className="account-input"
              required
              value={ legalNameOfBusiness || profile?.documentId?.legalNameOfBusiness}
              onClick={() => {
                setIsEditing(4);
              }}
              onChange={(e) => setlegalNameOfBusiness(e.target.value)}
            />
            {isEditing === 4 ? (
              <span
                onClick={() => {
                  handleAccountDocument();
                  setIsEditing(false);
                }}
                className="text-green-500 font-semibold absolute top-2 right-4 cursor-pointer"
              >
                SAVE
              </span>
            ) : (
              <img
                src="./Mask group (16).png"
                alt=""
                onClick={() => {
                  setIsEditing(4);
                }}
                className="w-5 h-5 absolute top-2 right-4 cursor-pointer opacity-0 group-hover:opacity-100"
              />
            )}
          </div>

          <div className="relative">
            <img
              src="./image 56.png"
              alt=""
              className="w-5 h-6 absolute top-2 left-4"
            />
            <div className="account-input">
              <IconSelect
                selectedOption={selectedCat}
                handleChange={handleCategory}
              />
            </div>
          </div>
          <div className="relative">
            <img
              src="./image 57.png"
              alt=""
              className="w-5 h-5 absolute top-4 left-4"
            />
            <Select
              className="account-input"
              styles={{ width: "20px" }}
              value={selectedSubCat}
              options={options}
              defaultValue={ profile?.category?.[0] || options?.[0]?.value}
              placeholder="Industry"
              onChange={(e) => {
                setSubCat(e);
                setSubCategoryId(e.value);
              }}
            />
          </div>
          <div className="relative w-[50vw] group ">
            <img
              src="./image 54.svg"
              alt=""
              className="w-5 h-6 absolute top-2 left-4"
            />
            <input
              type="name"
              name="name"
              id="name"
              placeholder="VAT REG. No"
              className="account-input"
              required
              value={vatRegNo || profile?.documentId?.vatRegNo}
              onClick={() => {
                setIsEditing(5);
              }}
              onChange={(e) => setVatRegNo(e.target.value)}
            />
            {isEditing === 5 ? (
              <span
                onClick={() => {
                  handleAccountDocument();
                  setIsEditing(false);
                }}
                className="text-green-500 font-semibold absolute top-2 right-4 cursor-pointer"
              >
                SAVE
              </span>
            ) : (
              <img
                src="./Mask group (16).png"
                alt=""
                onClick={() => {
                  setIsEditing(5);
                }}
                className="w-5 h-5 absolute top-2 right-4 cursor-pointer opacity-0 group-hover:opacity-100"
              />
            )}
          </div>
        </div>
      </div>
      <div className="supportContainer">
        <p className="text-[#0070BC] font-semibold">
          BANK DETAILS & PAYMENT INFORMATION
        </p>
        <div>
          <p className="text-[#000000]">Bank Account</p>
          {/* <label className="containerLogin font-semibold">
            I prefer to get paid through my
            <span className="px-2 text-[#000000]"> UK Bank Account </span>{" "}
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span class="checkmark"></span>
          </label> */}
          {isChecked ? (
            <div className="flex flex-col gap-4">
              <div className="relative w-[50vw] group ">
                <img
                  src="./image 54.svg"
                  alt=""
                  className="w-5 h-6 absolute top-2 left-4"
                />
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Account Number"
                  className="account-input"
                  required
                  value={accountNumber || profile?.documentId?.accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  onClick={() => {
                    setIsEditing(6);
                  }}
                  // onChange={(e) => setPassword(e.target.value)}
                />
                {isEditing === 6 ? (
                  <span
                    onClick={() => {
                      handleAccountDocument();
                      setIsEditing(false);
                    }}
                    className="text-green-500 font-semibold absolute top-2 right-4 cursor-pointer"
                  >
                    SAVE
                  </span>
                ) : (
                  <img
                    src="./Mask group (16).png"
                    alt=""
                    onClick={() => {
                      setIsEditing(6);
                    }}
                    className="w-5 h-5 absolute top-2 right-4 cursor-pointer opacity-0 group-hover:opacity-100"
                  />
                )}
              </div>

              <div className="relative">
                <img
                  src="./image 57.png"
                  alt=""
                  className="w-5 h-5 absolute top-2 left-4"
                />
                <select
                  id="countries"
                  value={businessBank || profile?.documentId?.businessBank}
                  onChange={(e) => setBusinessBank(e.target.value)}
                  className="account-input"
                >
                  <option className="font-semibold">
                    Select Business Bank
                  </option>
                </select>
              </div>
              <div className="relative w-[50vw] group ">
                <img
                  src="./image 54.svg"
                  alt=""
                  className="w-5 h-6 absolute top-2 left-4"
                />
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Sort Code"
                  className="account-input"
                  required
                  value={sortCode || profile?.documentId?.sortCode}
                  onChange={(e) => setSortCode(e.target.value)}
                  onClick={() => {
                    setIsEditing(9);
                  }}
                />
                {isEditing === 9 ? (
                  <span
                    onClick={() => {
                      handleAccountDocument();
                      setIsEditing(false);
                    }}
                    className="text-green-500 font-semibold absolute top-2 right-4 cursor-pointer"
                  >
                    SAVE
                  </span>
                ) : (
                  <img
                    src="./Mask group (16).png"
                    alt=""
                    onClick={() => {
                      setIsEditing(9);
                    }}
                    className="w-5 h-5 absolute top-2 right-4 cursor-pointer opacity-0 group-hover:opacity-100"
                  />
                )}
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <div className="relative w-[50vw] group ">
                <img
                  src="./image 54.svg"
                  alt=""
                  className="w-5 h-6 absolute top-2 left-4"
                />
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Account Number"
                  className="account-input"
                  required
                  value={accountNumber || profile?.documentId?.accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  onClick={() => {
                    setIsEditing(6);
                  }}
                />
                {isEditing === 6 ? (
                  <span
                    onClick={() => {
                      handleAccountDocument();
                      setIsEditing(false);
                    }}
                    className="text-green-500 font-semibold absolute top-2 right-4 cursor-pointer"
                  >
                    SAVE
                  </span>
                ) : (
                  <img
                    src="./Mask group (16).png"
                    alt=""
                    onClick={() => {
                      setIsEditing(6);
                    }}
                    className="w-5 h-5 absolute top-2 right-4 cursor-pointer opacity-0 group-hover:opacity-100"
                  />
                )}
              </div>
              <div className="relative">
                <img
                  src="./image 57.png"
                  alt=""
                  className="w-5 h-5 absolute top-2 left-4"
                />
                <select
                  id="countries"
                  //   value={selectedOption}
                  //   onChange={handleChange}
                  className="account-input"
                >
                  <option className="font-semibold">Select Bank</option>
                </select>
              </div>
              <div className="relative w-[50vw] group ">
                <img
                  src="./image 54.svg"
                  alt=""
                  className="w-5 h-6 absolute top-2 left-4"
                />
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Swift Code / BIC"
                  className="account-input"
                  required
                  //  value={profile?.email}
                  onClick={() => {
                    setIsEditing(7);
                  }}
                  // onChange={(e) => setPassword(e.target.value)}
                />
                {isEditing === 7 ? (
                  <span
                    onClick={() => setIsEditing(false)}
                    className="text-green-500 font-semibold absolute top-2 right-4 cursor-pointer"
                  >
                    SAVE
                  </span>
                ) : (
                  <img
                    src="./Mask group (16).png"
                    alt=""
                    onClick={() => {
                      setIsEditing(7);
                    }}
                    className="w-5 h-5 absolute top-2 right-4 cursor-pointer opacity-0 group-hover:opacity-100"
                  />
                )}
              </div>
              <div className="relative w-[50vw] group ">
                <img
                  src="./image 57.png"
                  alt=""
                  className="w-5 h-6 absolute top-2 left-4"
                />
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Routing Number"
                  className="account-input"
                  required
                  //  value={profile?.email}
                  onClick={() => {
                    setIsEditing(8);
                  }}
                  // onChange={(e) => setPassword(e.target.value)}
                />
                {isEditing === 8 ? (
                  <span
                    onClick={() => setIsEditing(false)}
                    className="text-green-500 font-semibold absolute top-2 right-4 cursor-pointer"
                  >
                    SAVE
                  </span>
                ) : (
                  <img
                    src="./Mask group (16).png"
                    alt=""
                    onClick={() => {
                      setIsEditing(8);
                    }}
                    className="w-5 h-5 absolute top-2 right-4 cursor-pointer opacity-0 group-hover:opacity-100"
                  />
                )}
              </div>
            </div>
          )}
        </div>
        <p className="text-[#000000]">Debit Card</p>
        {/* <div className="flex flex-col gap-4">
          <div className="relative w-[50vw] group ">
            <img
              src="./Rectangle 78.png"
              alt=""
              className="w-10 h-6 absolute top-2 left-4"
            />
            <input
              type="name"
              name="name"
              id="name"
              placeholder="XXXX - XXXX - XXXX - 0324"
              className="account-input"
              style={{ paddingLeft: "70px" }}
              required
              //  value={profile?.email}
              onClick={() => {
                setIsEditing(10);
              }}
              // onChange={(e) => setPassword(e.target.value)}
            />
            {isEditing === 10 ? (
              <span
                onClick={() => setIsEditing(false)}
                className="text-green-500 font-semibold absolute top-2 right-4 cursor-pointer"
              >
                SAVE
              </span>
            ) : (
              <img
                src="./Mask group (16).png"
                alt=""
                onClick={() => {
                  setIsEditing(10);
                }}
                className="w-5 h-5 absolute top-2 right-4 cursor-pointer opacity-0 group-hover:opacity-100"
              />
            )}
          </div>

          <div className="flex gap-4">
            <div className="relative">
              <select
                id="countries"
                //   value={selectedOption}
                //   onChange={handleChange}
                className="account-input"
                style={{ width: "24.5vw" }}
              >
                <option className="font-semibold">January</option>
              </select>
            </div>
            <div className="relative">
              <select
                id="countries"
                //   value={selectedOption}
                //   onChange={handleChange}
                className="account-input"
                style={{ width: "24.5vw" }}
              >
                <option className="font-semibold">Year</option>
              </select>
            </div>
          </div>
        </div> */}
       
        <form onSubmit={handleCreateCard}>
      <CardElement />
      <button className="account-add-button" type="submit" disabled={!stripe}>
      <img src="./Mask group (17).png" alt="" />
          <p>ADD NEW PAYMENT METHOD</p>
        {/* {isProcessing ? "Processing..." : "Save Card"} */}
      </button>
      {error && <div>{error}</div>}
      {success && <div>Card saved successfully!</div>}
    </form>
      </div>
      <DialogDefault open={openAddEmp} handleOpen={setOpenAddEmp}>
        <div className="p-4">
          <p className="text-[#0070BC] text-[20px] font-semibold pb-6">
            ADD NEW EMPLOYEE
          </p>
          <div className="flex flex-col gap-4">
            <div className="relative">
              <img
                src="./image 54.svg"
                alt=""
                className="w-5 h-6 absolute top-2 left-4"
              />
              <input
                type="name"
                name="name"
                id="name"
                placeholder="First Name"
                className="new-input"
                required
                value={fname}
                onChange={(e) => setFName(e.target.value)}
              />
            </div>
            <div className="relative">
              <img
                src="./image 54.svg"
                alt=""
                className="w-5 h-6 absolute top-2 left-4"
              />
              <input
                type="text"
                name="Last Name"
                id="Last Name"
                placeholder="Last Name"
                className="new-input"
                required
                value={lname}
                onChange={(e) => setLName(e.target.value)}
              />
            </div>
            <div className="relative">
              <img
                src="./image 56.png"
                alt=""
                className="w-5 h-5 absolute top-2 left-4"
              />
              <select
                id="countries"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="new-input"
              >
                <option className="font-semibold" selected>
                  Staff
                </option>
              </select>
            </div>
            <div className="relative">
              <img
                src="./image 54.svg"
                alt=""
                className="w-5 h-6 absolute top-2 left-4"
              />
              <input
                type="text"
                name="Last Name"
                id="Last Name"
                placeholder="Employee ID"
                className="new-input"
                required
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
              />
            </div>
            <div className="relative">
              <img
                src="./image 33.svg"
                alt=""
                className="w-5 h-6 absolute top-2 left-4"
              />
              <input
                type="text"
                name="Email"
                id="Email"
                placeholder="Email"
                className="new-input"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative">
              <img
                src="./image 32.svg"
                alt=""
                className="w-5 h-6 absolute top-2 left-4"
              />
              <input
                type="text"
                name="Contact"
                id="Contact"
                placeholder="Contact"
                className="new-input"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <button
            className="add mt-4 text-center"
            style={{ width: "140px" }}
            onClick={handleAddStaff}
          >
            ADD
          </button>
        </div>
      </DialogDefault>
      <DialogDefault open={success} handleOpen={setSuccess}>
        <div className="alert">
          <img src="../../Vector (2).png" alt="" />
          <p className="text-center text-lg">
            You’ve successfully added an employee
          </p>
        </div>
      </DialogDefault>
      <DialogDefault open={showSecurity} handleOpen={setShowSecurity}>
        <div className="p-4">
          <div>
            <h2 className="text-lg font-semibold mb-4">Security Question</h2>
            <label className="block mb-2">
              <span className="text-[#0070BC]">Choose a question:</span>
              <select
                value={securityQuestion}
                onChange={(e) => setSecurityQuestion(e.target.value)}
                className="block w-full mt-1 rounded border-gray-300"
              >
                <option value="" disabled>
                  Select a question
                </option>
                {securityQuestions.map((q, index) => (
                  <option key={index} value={q}>
                    {q}
                  </option>
                ))}
              </select>
            </label>
            <label className="block mb-4">
              <span className="text-gray-700">Your Answer:</span>
              <input
                type="text"
                value={securityAnswer}
                onChange={(e) => setSecurityAnswer(e.target.value)}
                className="block w-full mt-1 rounded border-gray-300"
              />
            </label>
            <div className="flex justify-end">
              <button
                onClick={() => setShowSecurity(false)}
                className="px-4 py-2 mr-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </DialogDefault>
    </div>
  );
};

export default Account;
