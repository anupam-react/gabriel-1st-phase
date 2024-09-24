import React, { useEffect, useState } from "react";
import "./index.scss";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { DatePickerComp2 } from "../customerInfo/DatePickerComp2";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import "./SliderRangeFilter.css";
import Select from "react-select";
import { fetchApiData, formatDate } from "../../utiils";
import useOutlate from "../../hooks/useOutlate";

const LoyaltyFilter = ({
  closeDrawer,
  open,
  getStampSystemByToken,
  getMakeASavingByToken,
  getSpendMyPointByToken,
}) => {
  const { outlate } = useOutlate();

  const [isActive, setActive] = useState(2);
  const [range, setRange] = useState([0, 5000]);
  const [productId, setProductId] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [subCategoryId, setSubCategoryId] = useState("");
  const [outletId, setOutletId] = useState("");
  const [category, setCategory] = useState();
  const [subcategory, setSubcategory] = useState();
  const [selectedSubCat, setSubCat] = useState(null);
  const [selectedCat, setCat] = useState(null);
  const [selectedOutlate, setSelectOutlate] = useState(null);
  const [product, setProduct] = useState([]);
  const [selectedProduct, setSelectProduct] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [pointEarn, setPointEarn] = useState("");

  const handleRangeChange = (newRange) => {
    setRange(newRange);
    console.log("Selected range: ", newRange);
  };

  async function fetchCategory() {
    const data = await fetchApiData(
      "https://money-chat.com/api/api/v1/admin/Category/allCategory"
    );
    setCategory(data?.data);
  }

  const handleCategory = (event) => {
    setCat(event);
    setCategoryId(event.value);
    fetchSubCategory(event.value);
  };

  async function fetchSubCategory(id) {
    if (id !== "") {
      const data = await fetchApiData(
        `https://money-chat.com/api/api/v1/SubCategory/allSubcategoryById/${id}`
      );
      setSubcategory(data?.data);
    }
  }
  async function getProduct(
    search = "",
    fromDate = "",
    toDate = "",
    page = "",
    limit = "",
    maxStock = "",
    minStock = "",
    maxPrice = "",
    minPrice = ""
  ) {
    const data = await fetchApiData(
      `https://money-chat.com/api/api/v1/brandLoyalty/getProductByToken?search=${search}&fromDate=${fromDate}&toDate=${toDate}&page=${page}&limit=${limit}&maxStock=${maxStock}&minStock=${minStock}&maxPrice=${maxPrice}&minPrice=${minPrice}`
    );
    setProduct(data?.data);
  }

  const handleOutlate = (event) => {
    setSelectOutlate(event);
    setOutletId(event.value);
  };
  const handleProduct = (event) => {
    setSelectProduct(event);
    setProductId(event.value);
  };

  useEffect(() => {
    fetchCategory();
    getProduct();
  }, []);

  return (
    <React.Fragment>
      <Drawer
        open={open}
        onClose={closeDrawer}
        direction="right"
        className="bla bla bla"
        size={400}
      >
        <div className="filterContainer">
          <div className="filter-body no-scrollbar">
            <div className="mb-6 flex items-center justify-between">
              <div onClick={closeDrawer}>
                <img
                  src="./Mask group (2).png"
                  alt=""
                  className="w-10 cursor-pointer"
                />
              </div>
              <h5 className="text-xl font-semibold">Filter</h5>
              <div onClick={closeDrawer}>
                <img
                  src="./close-outline 1.svg"
                  alt=""
                  className="w-10 cursor-pointer"
                />
              </div>
            </div>
            <hr className="my-4" style={{ backgroundColor: "#E3E3E5" }} />
            <div className="p-2">
              <div className="mt-4">
                <p className="text-lg font-semibold pb-4">Item Bought</p>
                <Select
                  className="input-loyalty2"
                  styles={{ width: "20px" }}
                  value={selectedProduct}
                  options={product?.docs?.map((user) => ({
                    value: user._id,
                    label: user?.name,
                  }))}
                  defaultValue={product?.docs?.[0]?._id}
                  onChange={handleProduct}
                  placeholder=""
                />
              </div>
              <div className="mt-4">
                <p className="text-lg font-semibold pb-4">Points Earned</p>
                <input
                  type="text"
                  className="input-loyalty"
                  value={pointEarn}
                  onChange={(e) => setPointEarn(e.target.value)}
                />
              </div>
              <div className="filterbutton-group mt-4">
                {/* <button
                  className={isActive === 1 ? "button2" : "button1"}
                  onClick={() => setActive(1)}
                >
                  Point System
                </button> */}
                <button
                  className={isActive === 2 ? "button2" : "button1"}
                  onClick={() => setActive(2)}
                >
                  Stamp System
                </button>
                <button
                  className={isActive === 3 ? "button2" : "button1"}
                  onClick={() => setActive(3)}
                >
                  Make a Saving
                </button>
                <button
                  className={isActive === 4 ? "button2" : "button1"}
                  onClick={() => setActive(4)}
                >
                  Spent my Points
                </button>
              </div>
              <div className="mt-4">
                <p className="text-lg font-semibold pb-4">Categories</p>
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
                  placeholder=""
                />
              </div>
              <div className="mt-4">
                <p className="text-lg font-semibold pb-4">Sub Categories</p>
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
                    setSubCategoryId(e.value);
                  }}
                />
              </div>
              <div className="mt-4">
                <p className="text-lg font-semibold pb-4">Choose Outlate</p>
                <Select
                  className="input-loyalty2"
                  styles={{ width: "20px" }}
                  value={selectedOutlate}
                  options={outlate?.docs?.map((user) => ({
                    value: user._id,
                    label: user?.name,
                  }))}
                  defaultValue={outlate?.docs?.[0]?._id}
                  onChange={handleOutlate}
                  placeholder=""
                />
              </div>
              <div className="mt-4">
                <p className="text-lg font-semibold pb-4">Amount</p>
                <div class="relative mb-10">
                  {/* <input id="labels-range-input" type="range" value="1000" min="100" max="1500" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" /> */}
                  <Slider
                    range
                    min={0}
                    max={5000}
                    value={range}
                    onChange={handleRangeChange}
                    allowCross={false}
                  />
                  <span className="text-sm font-[500] text-black dark:text-gray-400 absolute start-0 -bottom-8">
                    0
                  </span>
                  <span className="text-sm font-[500] text-black dark:text-gray-400 absolute start-1/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-8">
                    £100
                  </span>
                  <span className="text-sm font-[500] text-black dark:text-gray-400 absolute start-2/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-8">
                    £500
                  </span>
                  <span className="text-sm font-[500] text-black dark:text-gray-400 absolute start-3/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-8">
                    £1,000
                  </span>
                  <span className="text-sm font-[500] text-black dark:text-gray-400 absolute end-0 -bottom-8">
                    £5,000
                  </span>
                </div>
              </div>
              <div className="calender" style={{ marginTop: "60px" }}>
                <div>
                  <p>From</p>
                  <input
                    type="text"
                    className="input-loyalty"
                    placeholder=""
                    value={range?.[0]}
                    onChange={(e) => setRange()}
                  />
                </div>
                <div>
                  <p>To</p>
                  <input
                    type="text"
                    className="input-loyalty"
                    placeholder=""
                    value={range?.[1]}
                  />
                </div>
              </div>
              <div className="mt-4">
                <p className="text-lg font-semibold pb-4">Date Range</p>
                <select
                  id="countries"
                  // value={selectedOption}
                  // onChange={handleChange}
                  className="input-loyalty"
                >
                  <option className="font-semibold" value="custom">
                    WEEKLY
                  </option>
                  <option className="font-semibold" value="custom">
                    MONTHLY
                  </option>
                  <option className="font-semibold" value="custom">
                    YEARLY
                  </option>
                  <option className="font-semibold" value="custom">
                    CUSTOM
                  </option>
                </select>
              </div>
              <div className="calender">
                <div>
                  <p>From</p>
                  <DatePickerComp2
                    startDate={startDate}
                    setStartDate={setStartDate}
                  />
                </div>
                <div>
                  <p>To</p>
                  <DatePickerComp2
                    startDate={endDate}
                    setStartDate={setEndDate}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="button-container">
            <button
              className="button2"
              onClick={() => {
                if (isActive === 2)
                  getStampSystemByToken(
                    "",
                    "",
                    "",
                    productId,
                    pointEarn,
                    subCategoryId,
                    categoryId,
                    outletId,
                    range[0],
                    range[1],
                    startDate,
                    endDate
                  );
                else if (isActive === 3)
                  getMakeASavingByToken(
                    "",
                    "",
                    "",
                    productId,
                    pointEarn,
                    subCategoryId,
                    categoryId,
                    outletId,
                    range[0],
                    range[1],
                    startDate,
                    endDate
                  );
                else if (isActive === 4)
                  getSpendMyPointByToken(
                    "",
                    "",
                    "",
                    productId,
                    pointEarn,
                    subCategoryId,
                    categoryId,
                    outletId,
                    range[0],
                    range[1],
                    startDate,
                    endDate
                  );
                closeDrawer();
              }}
            >
              APPLY
            </button>
            <button
              className="button4"
              onClick={() => {
                getStampSystemByToken("");
                getMakeASavingByToken("");
                getSpendMyPointByToken("");
                closeDrawer();
              }}
            >
              RESET
            </button>
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default LoyaltyFilter;
