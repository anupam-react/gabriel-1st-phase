import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import { DialogDefault } from "../common/DilogBox";
import ProductDetails from "./ProductDetails";
import useProduct from "../../hooks/useProduct";
const InventoryProduct = ({
  handleOpen,
  isProdInfo = false,
  allProduct,
  setProduct,
}) => {
  const { product } = useProduct();
  const [isView, setView] = useState();
  const [openDetails, setDetails] = useState();
  const [isSelect, setSelect] = useState([]);
  const [selectNewProd, setSelectNewProd] = useState();

  const toggleProductSelection = (prod, id) => {
    const isSelected = isSelect.includes(id);
    console.log(prod);
    setSelectNewProd(prod);
    setSelect([...isSelect, id]);
  };

  const handleProduct = () => {
    handleOpen(false);
    allProduct.unshift(selectNewProd);

    console.log(allProduct);
  };
  const divRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setView(-1);
      }
    };

    if (isView !== -1) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isView]);

  return (
    <div className="gift-container">
      <div className="gift-main">
        <p className="title">Inventory</p>
        <img
          src="../Mask group (2).png"
          alt=""
          className="cross-image"
          onClick={() => {
            handleOpen(false);
          }}
        />
      </div>
      <hr className="hr" />
      <div className="catalogue">
        <label>Select Product from catalogue</label>
        <div
          className="flex items-center px-6 w-full my-3 h-12 shadow"
          style={{
            backgroundColor: "#FFFFFF",

            borderRadius: "12px",
            color: "#8BA3CB",
          }}
        >
          <img src="../image 2 (3).svg" alt="search" className="w-6 h-6" />
          <input
            type="text"
            className="border-none w-full bg-transparent outline-none focus:ring-0 focus:shadow-none focus:border-none"
            placeholder="Search Products  , Ex : Coffee , Donuts etc...."
          />
        </div>
        <div className="catalogue-flex flex-wrap catalogue-container">
          {product?.docs?.map((d, i) => (
            <div
              className="catelogue-main"
              key={i}
              onClick={() => toggleProductSelection(d, i)}
            >
              <div className="relative">
                <img
                  src={d?.image}
                  alt=""
                  className={
                    isSelect?.includes(i)
                      ? "border-4 rounded-xl border-[#FE903C] w-full h-[100px]"
                      : " w-full h-[100px] rounded-xl"
                  }
                />
                <img
                  src="../Group (9).png"
                  alt=""
                  className="absolute top-2 right-2 cursor-pointer "
                  onClick={() => setView(i)}
                />
                {isView === i && (
                  <div
                    className="absolute top-8 right-2 cursor-pointer"
                    ref={divRef}
                    onClick={() => setDetails(true)}
                  >
                    <p className="viewProd text-[14px]">View Product</p>
                  </div>
                )}
              </div>
              <p
                className={
                  isSelect?.includes(i)
                    ? "prod-name2"
                    : "text-[#000000B2] text-center"
                }
                style={{ fontSize: "14px" }}
              >
                {d?.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-center mt-6">
        <button className="menuButton4" onClick={handleProduct}>
          {isProdInfo ? "Back" : "Select Product"}
        </button>
      </div>
      <DialogDefault open={openDetails} handleOpen={setDetails}>
        <ProductDetails handleOpen={setDetails} />
      </DialogDefault>
    </div>
  );
};

export default InventoryProduct;
