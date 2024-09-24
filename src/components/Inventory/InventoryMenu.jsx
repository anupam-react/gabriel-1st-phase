import React, { useState } from "react";
import "./index.scss";
import { DialogDefault } from "../common/DilogBox";
import { useNavigate } from "react-router-dom";
import { deleteApiData } from "../../utiils";
import useProduct from "../../hooks/useProduct";

const InventoryMenu = ({ setOpenMenu , id , data }) => {
 const {openHighlights, setOpenHighlights ,   handleMarkAsProductOutOfStock,
  handleMarkAsProductAsHighlight} = useProduct()
  const [openProductStatus, setOpenProductStatus] = useState(false);
  const [openDeleteProduct, setOpenDeleteProduct] = useState(false);
  const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);

  const navigate = useNavigate();

  const handleDelete = () => {
    deleteApiData(`https://money-chat.com/api/api/v1/brandLoyalty/removeProduct/${id}`)
    setOpenDeleteConfirm(true);
    setTimeout(() => {
      setOpenMenu(false);
      setOpenDeleteProduct(false);
      setOpenDeleteConfirm(false);
    }, 1000);
  };


  return (
    <div className="menu-container">
      <button className="menuButton7" onClick={() => navigate(`/inventory/promote/${id}`)}>
        Promote Product
      </button>

      <button className="menuButton7" onClick={() => navigate(`/inventory/customer-gift/${id}`)}>
        Send as Gift to customer
      </button>
      <button className="menuButton7" onClick={() => navigate(`/inventory/customized-gift/${id}`)}>
        Customize and Send to customer
      </button>
      <button className="menuButton7" onClick={() => navigate(`/inventory/edit-product/${id}`)}>
        Edit Product
      </button>
      <button
        className="menuButton7"
        onClick={() => setOpenDeleteProduct(true)}
      >
        Delete Product
      </button>
      <button className="menuButton7" onClick={() => {
        handleMarkAsProductOutOfStock(id)
        setTimeout(() => {
          setOpenMenu(false);
        }, 1000);
        }}>
        Mark as out of stock
      </button>
      <button className="menuButton7" onClick={() =>{ 
        handleMarkAsProductAsHighlight(id)
        }}>
        Add To Highlights
      </button>
      <DialogDefault open={openProductStatus} handleOpen={setOpenProductStatus}>
        <div className="alert">
          <img src="./Vector (2).png" alt="" />
          <p className="text-center text-lg">
            Your product is now posted in your Moneychat app Status. Viewers can
            tab on status and they are linked to back to the product in the app.
          </p>
        </div>
      </DialogDefault>
      <DialogDefault open={openDeleteProduct} handleOpen={setOpenDeleteProduct}>
        <div className="alert">
          <p className="text-center text-lg">
            Do you want to delete this product ?
          </p>
          <div className="flex gap-6 mt-3">
            <button className="menuButton8" onClick={handleDelete}>
              Yes
            </button>
            <button
              className="menuButton8"
              onClick={() => setOpenDeleteProduct(false)}
            >
              No
            </button>
          </div>
        </div>
      </DialogDefault>
      <DialogDefault open={openDeleteConfirm} handleOpen={setOpenDeleteConfirm}>
        <div className="alert">
          <img src="../Vector (2).png" alt="" />
          <p className="text-center text-lg font-bold">
            Product Deleted
          </p>
        </div>
      </DialogDefault>
      <DialogDefault open={openHighlights} handleOpen={setOpenHighlights}>
        <div style={{ position: "relative" }} className="flex justify-center items-center">
          <img src={data?.image} alt="" className="w-[600px] h-[300px]" />
          <div className="image-text">
            <p className="text-xl">{data?.name}</p>
            <p>
              Note : Your {data?.name} product has been added to the Highlights
            </p>
          </div>
        </div>
      </DialogDefault>
    </div>
  );
};

export default InventoryMenu;
