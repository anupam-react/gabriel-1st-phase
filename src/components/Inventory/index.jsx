import React, { useState } from "react";
import "./index.scss";
import InventoryCard from "./InventoryCard";
import InventoryFilter from "./InventoryFilter";
import { useNavigate } from "react-router-dom";
import useProduct from "../../hooks/useProduct";
import Select from "react-select";
const Inventory = () => {
  const {
    product,
    range,
    setRange,
    range1,
    setRange1,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    fetchSubCategory,
    category,
    subcategory,
    getProduct,
  } = useProduct();

  const [isOpen, setIsOpen] = useState(false);
  const [openAddProd, setOpenAddProd] = useState(false);
  const [openCustom , setOpenCustom] = useState(false)
  const [selectedOption, setSelectedOption] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCat, setCat] = useState(null);
  const [selectedSubCat, setSubCat] = useState(null);

  const closeDrawer = () => setIsOpen(false);
  const navigate = useNavigate();

  const handleCategory = (event) => {
    setCat(event);
    getProduct("","","","","","","","","",event.value)
    fetchSubCategory(event.value);
  };


  return (
    <div>
      <div className="flex justify-between  items-start gap-10">
        <div className="flex justify-between items-center flex-1 gap-10">
          <p className="text-2xl font-bold">Inventory</p>
          <div
            className="flex items-center px-6 h-12"
            style={{
              backgroundColor: "#FFFFFF",
              width: "20rem",
              borderRadius: "12px",
              color: "#8BA3CB",
            }}
          >
            <img src="./image 2 (3).svg" alt="search" className="w-6 h-6" />
            <input
              type="text"
              className="border-none w-48 bg-transparent outline-none focus:ring-0 focus:shadow-none focus:border-none"
              placeholder="Search "
              value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              getProduct(e.target.value);
            }}
            />
          </div>
          <div className="flex">
            <button
              className="flex items-center gap-2"
              onClick={() => setIsOpen(true)}
            >
              <img src="./Mask group (8).png" alt="" className="w-5 h-5" />
              <p className="text-[#0070BC] font-semibold">FILTERS</p>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 relative">
          <div
            className="inventory-button"
            onClick={() => setOpenAddProd(!openAddProd)}
          >
            <img src="./Mask group (11).png" alt="" />
            <p>ADD PRODUCT</p>
          </div>
          <div
            className="inventory-button"
            onClick={() => navigate("/inventory/add-outlate")}
          >
            <img src="./Mask group (11).png" alt="" />
            <p>ADD MORE OUTLETS</p>
          </div>
          {openAddProd && (
            <div className="addprod-button absolute top-[60px]">
              <div
                className="flex gap-4 justify-between items-center"
                onClick={() => navigate("/inventory/add-product")}
              >
                <img src="./Mask group (11).png" alt="" />
                <p>SINGLE PRODUCT</p>
              </div>
              <div
                className="flex justify-between gap-4 items-center"
                onClick={() => navigate("/inventory/add-multi-product")}
              >
                <img src="./Mask group (11).png" alt="" />
                <p className="">MULTIPE PRODUCTS</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex gap-6 mt-4">
        <div className="w-[250px]">
      <Select
            className="input-loyalty2"
            styles={{ width: "20px" }}
            value={selectedCat}
            
            options={category?.map((user) => ({
              value: user._id,
              label: user?.name,
            }))}
            defaultValue={category?.[0]?._id}
            onChange={handleCategory}
            placeholder="CATEGORY"
          />
        </div>
        <div className="w-[250px]">
        <Select
            className="input-loyalty2"
            styles={{ width: "20px" }}
            value={selectedSubCat}
            options={subcategory?.map((user) => ({
              value: user._id,
              label: user?.name,
            }))}
            defaultValue={subcategory?.[0]?._id}
            onChange={(e) => {
              setSubCat(e);
              getProduct("","","","","","","","","","", e.value)
            }}
                 placeholder="SUB-CATEGORY"
          />

        </div>
      </div>
        <p className="pt-4 text-xl">{selectedCat ? selectedCat?.label :"All Category"}</p>
      <div className="card-main">
        {product?.docs?.map((d, i) => (
          <InventoryCard data={d} key={i} />
        ))}
      </div>
      {isOpen && (
        <InventoryFilter
          closeDrawer={closeDrawer}
          open={isOpen}
          range={range}
          setRange={setRange}
          range1={range1}
          setRange1={setRange1}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          setOpenCustom={setOpenCustom}
          openCustom={openCustom}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          getProduct={getProduct}
        />
      )}
    </div>
  );
};

export default Inventory;
