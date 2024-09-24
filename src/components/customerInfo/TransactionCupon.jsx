import React, { useState } from "react";
import "./index.scss";
import { DialogDefault } from "../common/DilogBox";
import TransactionDetails from "./TransactionDetails";
import ProductDetails3 from "./ProductDetails3";
import { saveAs } from "file-saver";
import ReceiptFormat from "./ReceiptFormat";
import { pdf } from "@react-pdf/renderer";
const TransactionCupon = ({ handleOpen, data }) => {
  const [openProduct, setProduct] = useState(false);
  const [openProductInfo, setProductInfo] = useState(false);
  const [isDownload, setDownload] = useState(false);

  console.log(data);

  const handleDownload = async (data) => {
    const blob = await pdf(<ReceiptFormat   userData={data?.user}
      brandData={data?.brandId}
      data={data?.orderId}/>).toBlob();
    saveAs(blob, 'receipt.pdf');
  };
  return (
    <div className="">
      <div className="trans-header p-6">
        <p className="text-white font-[500] text-[18px]">Transaction’s</p>
        <img
          src="../Mask group (2).png"
          alt=""
          className="cross-image2"
          onClick={() => handleOpen(false)}
        />
      </div>
      <table className="table3">
        <thead>
          <tr>
            <th>Coupon</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((d, i) => (
            <tr key={i}>
              <td style={{ width: "100px" }}>
                {d?.productId?.name}
                (#1234567)
              </td>
              <td>
                <div className="flex items-center justify-between gap-4">
                  <img
                    src={d?.productId?.image}
                    alt=""
                    className="cursor-pointer w-[200px] h-[100px] rounded-lg"
                    onClick={() => setProductInfo(d?.productId)}
                  />
                  <div className="text-left">
                    Redeemed , Yesterday, 10:30 pm <br />
                    <span
                      className="text-[#0070BC] underline cursor-pointer"
                      onClick={() => {
                        setProduct(d);
                      }}
                    >
                      See Transaction.
                    </span>{" "}
                  </div>
                  <img
                    src="../Vector (42).png"
                    alt=""
                    className="h-fit cursor-pointer"
                    onClick={() => {
                      setDownload(d);
                      handleDownload(d)
                      setTimeout(() => {
                        setDownload(false);
                      }, 2000);
                    }}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <div className="flex justify-center my-4">
        <button
          className="menuButton4 w-[200px]"
          onClick={() => {
            setDownload(true)
            setTimeout(() => {
           setDownload(false);
            }, 2000);
          }}
        >
          Download Invoice
        </button>
      </div>
      <DialogDefault open={openProduct} handleOpen={setProduct}>
        <TransactionDetails
          handleOpen={setProduct}
          allData={openProduct}
          userData={openProduct?.user}
          brandData={openProduct?.brandId}
          data={openProduct?.orderId}
        />
      </DialogDefault>
      <DialogDefault open={openProductInfo} handleOpen={setProductInfo}>
        <ProductDetails3 data={openProductInfo} handleOpen={setProductInfo} />
      </DialogDefault>
      <DialogDefault open={isDownload} handleOpen={setDownload}>
        <div className="alert">
          <img src="../Vector (2).png" alt="" />
          <p className="text-center text-lg">Invoice(s) downloaded</p>
        </div>
      </DialogDefault>
    </div>
  );
};

export default TransactionCupon;
