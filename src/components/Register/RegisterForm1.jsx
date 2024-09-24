import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import useRegister from "../../hooks/useRegister";
import Select from "react-select";
import { useState } from "react";
import IconSelect from "./IconSelect";
const RegisterForm1 = () => {
 const { 
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  phone,
  setPhone,
  country,
  setCountry,
  categoryId,
  setCategoryId,
  subCategoryId, 
  setSubCategoryId,
  category,
  subcategory,
  selectedCat, 
  setConfirmPassword,
  confirmPassword,
  handleRegister,
  handleCategory
} = useRegister()
const [selectedSubCat, setSubCat] = useState(null);

  const navigate = useNavigate();
  const countryOptions = [
    { option: "UK", value: "UK" },
    { option: "CANADA", value: "CANADA" },
    { option: "AUSTRALIA", value: "AUSTRALIA" },
    { option: "LONDON", value: "LONDON" },
    { option: "DUBAI", value: "DUBAI" },
    { option: "USA", value: "USA" },
   
  ];

  const options = [
    { value: 'electronics', label: 'Electronics' },
    { value: 'home_garden', label: 'Home and Garden' },
    { value: 'sporting_goods', label: 'Sporting Goods' },
    { value: 'books_stationery', label: 'Books and Stationery' },
    { value: 'jewellery', label: 'Jewellery' },
    { value: 'pet_supplies', label: 'Pet Supplies' },
    { value: 'furniture', label: 'Furniture' },
    { value: 'books_comic_shops', label: 'Books & Comic Book Shops' },
    { value: 'speciality_food_stores', label: 'Speciality Food Stores' },
    { value: 'boutique_wine_spirits', label: 'Boutique Wine and Spirits' },
    { value: 'craft_hobby_store', label: 'Craft and Hobby Store' },
  ];
  return (
    <div className="flex justify-center items-center h-[100vh] w-full">
      <div className="w-2/6 px-4 bg-white border z-50 border-gray-200 rounded shadow-xl sm:p-6 md:p-6 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center mb-10  gap-2">
          <img src="./image 2 (2).svg" alt="" className="w-36 h-18 pb-4" />
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className=" h-2.5 rounded-full progress"
              style={{ width: "36%" }}
            ></div>
          </div>
          <p className="font-bold text-2xl">New Registration!</p>
          <p className="text-gray-500">
            Please provide the following Information to Continue!
          </p>
        </div>
        <form
          className="space-y-4 h-64 p-4 overflow-auto bg-gray-100"
          action="#"
        >
          <>
            <div className="relative">
              <img
                src="./Mask group.svg"
                alt=""
                className="w-5 h-6 absolute top-2 left-2"
              />
              <input
                type="text"
                name="name"
                id="name"
                style={{ color: "#0070BC" }}
                placeholder="Full Name"
                className="rounded shadow-md border-none text-sm block w-full pl-10 p-2.5 "
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="relative">
              <img
                src="./Vector (38).png"
                alt=""
                className="w-6 h-6 absolute top-2 left-2"
              />
              <div className="custom-select">
              <select
                id="countries"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="rounded shadow-md  pl-10  text-gray-900 text-sm  border-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option disabled selected>
                Choose Country
                </option>
                {countryOptions?.map((data, i) => (
                  <>
                    <option key={i} value={data?.value}>
                      {data?.option}
                    </option>
                  </>
                ))}
              </select>
            </div>
            </div>
            <div className="relative">
              <img
                src="./image 32.svg"
                alt=""
                className="w-5 h-6 absolute top-2 left-2"
              />
              <input
                type="text"
                name="phone"
                id="phone"
                style={{ color: "#0070BC" }}
                placeholder="Contact Number"
                className="rounded shadow-md border-none text-sm block  w-full pl-10 p-2.5 "
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="relative">
              <img
                src="./image 33.svg"
                alt=""
                className="w-5 h-6 absolute top-2 left-2"
              />
              <input
                type="text"
                name="email"
                id="email"
                style={{ color: "#0070BC" }}
                placeholder="Email Address"
                className="rounded shadow-md border-none text-sm block  w-full pl-10 p-2.5 "
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative">
              <img
                src="./image 34.svg"
                alt=""
                className="w-5 h-6 absolute top-2 left-2"
              />
              <input
                type="password"
                name="password"
                id="password"
                style={{ color: "#0070BC" }}
                placeholder="New Password"
                className="rounded shadow-md border-none text-sm block  w-full pl-10 p-2.5 "
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="relative">
              <img
                src="./image 35.svg"
                alt=""
                className="w-5 h-6 absolute top-2 left-2"
              />
              <input
                type="password"
                name="confirmPass"
                id="confirmPass"
                style={{ color: "#0070BC" }}
                placeholder="Re - Enter Password"
                className="rounded shadow-md border-none text-sm block  w-full pl-10 p-2.5 "
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <p className="text-xl font-bold text-center">Business Industry</p>
            <p className="text-sm text-center">
              Please provide the following Information to Continue!
            </p>
            <div className="custom-select">
              
            <IconSelect selectedOption={selectedCat} handleChange={handleCategory}/>
            </div>
            <p className="text-xl font-bold text-center">
            Business Type
            </p>
            <p className="text-sm text-center">
              Please provide the following Information to Continue!
            </p>
            <div className="custom-select">
               <Select
                        className="rounded shadow-md text-gray-900 text-sm  border-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        styles={{ width: "20px" }}
                        value={selectedSubCat}
                        options={options}
                        defaultValue={options?.[0]?.value}
                        onChange={(e) => {
                          setSubCat(e)
                          setSubCategoryId(e.value)
                        }}
                    />
            </div>
          </>
        </form>
        <div className="flex justify-between items-center mt-6">
          <div className="flex justify-center">
            <button
              className="sign-button"
              type="submit"
              onClick={handleRegister}
            >
              CONTINUE
            </button>
          </div>
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            <img src="./Mask group (4).svg" alt="" className="w-6 h-6" />
            <p className="text-sm cancel underline">Cancel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm1;
