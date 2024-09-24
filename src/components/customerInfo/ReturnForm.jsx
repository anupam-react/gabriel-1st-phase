import React, { useEffect, useState } from "react";
import InfoHeader from "./InfoHeader";
import "./index.scss";
import { fetchApiData, getDateFromISOString } from "../../utiils";
import { DialogDefault } from "../common/DilogBox";
const ReturnForm = ({ handleOpen, onClose, data }) => {
  const [isAddEmp, setAddEmp] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const [dataInfo, setDataInfo] = useState();

  console.log(dataInfo?.order);

  const getReturnAndExchangeByUserId = async () => {
    const response = await fetchApiData(
      `https://money-chat.com/api/api/v1/brandLoyalty/AllReturnAndExchange/ByUserId/${data?._id}`
    );
    console.log(response);
    setDataInfo(response?.data);
  };

  useEffect(() => {
    getReturnAndExchangeByUserId();
  }, []);
  return (
    <div className="info-container">
      <div className="gift-main">
        <p className="title">Return & Exchange</p>
        <img
          src="./Mask group (2).png"
          alt=""
          className="cross-image"
          onClick={() => handleOpen(false)}
        />
      </div>
      <hr className="hr2" />
      <InfoHeader onClose={onClose} data={data} />

      <div
        style={{ paddingTop: "30px", paddingBottom: "20px", cursor: "pointer" }}
        onClick={() => handleOpen(false)}
      >
        <p style={{ color: "#0070BC", fontWeight: 600 }} className="uppercase">
          Return & Exchange
        </p>
        <hr className="hr3" style={{ width: "205px" }} />
      </div>
      <table className="table2">
        <thead>
          <tr>
            <th>Product</th>
            <th>Condition Of Product</th>
            <th>Type Of Return</th>
            <th>Reason</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {dataInfo?.map((d, i) => (
            <tr key={i}>
              <td>
                <div className="flex justify-center">
                  <img
                    src={d?.order?.productId?.image}
                    alt=""
                    className="w-[80px] h-[80px] rounded-lg"
                  />
                </div>
                <div style={{ color: "#121212B2" }}>
                  {d?.order?.productId?.name}
                </div>
              </td>
              <td>
                <div>{d?.conditionOfProduct}</div>
              </td>
              <td>
                <div style={{ color: "#000000B2" }}>{d?.typeOfReturn}</div>
              </td>
              <td>
                <div style={{ color: "#000000B2" }}>{d?.reasonForReturn}</div>
              </td>

              <td>
                <div style={{ color: "#000000B2" }}>{d?.returnStatus}</div>
                <button
                  className="button3"
                  onClick={() => {
                    setShowDetails(d);
                  }}
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <DialogDefault open={showDetails} handleOpen={setShowDetails} size={"xxl"}>
        <div className="info-container">
          <div className="gift-main">
            <p className="title">Return & Exchange</p>
            <img
              src="./Mask group (2).png"
              alt=""
              className="cross-image"
              onClick={() => setShowDetails(false)}
            />
          </div>
          <hr className="hr2" />
          <p className="heading-title">Customer Information</p>
          <div className="form-container">
            <div className="input-container">
              <label>Moneychat ID</label>
              <input
                type="text"
                name=""
                id=""
                value={showDetails?.user?.Id}
                className="input"
                placeholder=""
              />
            </div>
          </div>
          <p className="heading-title">Original Purchase Details</p>
          <div className="form-container">
            <div className="input-container">
              <label>Order number</label>
              <input
                type="text"
                name=""
                id=""
                value={showDetails?.order?.orderId}
                className="input"
                placeholder=""
              />
            </div>
            <div className="input-container">
              <label>Date of purchase</label>
              <input
                type="text"
                name=""
                id=""
                value={getDateFromISOString(showDetails?.order?.createdAt)}
                className="input"
                placeholder=""
              />
            </div>
            <div className="input-container">
              <label>Payment method</label>
              <input
                type="text"
                name=""
                id=""
                value="Linked Card"
                className="input"
                placeholder=""
              />
            </div>
          </div>
          <p className="heading-title">Product Information</p>
          <div className="form-container">
            <div className="input-container">
              <label>Product name or description</label>
              <input
                type="text"
                name=""
                id=""
                value={showDetails?.order?.productId?.name + "(" + showDetails?.order?.productId?.description + ")"}
                className="input"
                placeholder=""
              />
            </div>
            <div className="input-container">
              <label>Product ID</label>
              <input
                type="text"
                name=""
                id=""
                value={showDetails?.order?.productId?._id}
                className="input"
                placeholder=""
              />
            </div>
            <div className="input-container">
              <label>Type of Product (Return / Exchange)</label>
              <input
                type="text"
                name=""
                id=""
                value={showDetails?.typeOfReturn}
                className="input"
                placeholder=""
              />
            </div>
            <div className="input-container">
              <label>
                Condition of the product (unused, worn, damaged, etc.)
              </label>
              <input
                type="text"
                name=""
                id=""
                value={showDetails?.conditionOfProduct}
                className="input"
                placeholder=""
              />
            </div>
          </div>
          <p className="heading-title">Reason for Return or Exchange</p>
          <div className="form-container">
            <div className="input-container">
              <label>Type of Product</label>
              <input
                type="text"
                name=""
                id=""
                value="Defective"
                className="input"
                placeholder=""
              />
            </div>
            <div className="input-container">
              <label>Condition of Product</label>
              <input
                type="text"
                name=""
                id=""
                value={showDetails?.conditionOfProduct}
                className="input"
                placeholder=""
              />
            </div>
            <div className="input-container">
              <label>Type of Product (Return / Exchange)</label>
              <input
                type="text"
                name=""
                id=""
                value={showDetails?.typeOfReturn}
                className="input"
                placeholder=""
              />
            </div>
            <div className="input-container">
              <label>Reason for Return</label>
              <input
                type="text"
                name=""
                id=""
                value={showDetails?.reasonForReturn}
                className="input"
                placeholder=""
              />
            </div>
          </div>
          <p className="heading-title">Return Policy Verification</p>
          <div className="form-container">
            <div>
              <input
                type="checkbox"
                name=""
                id=""
                value="Requirement"
                className="mr-4"
                placeholder=""
              />
              <label>
                Checking the product against the company’s return policy
              </label>
            </div>
          </div>
          <p className="heading-title">Method of Refund or Exchange</p>
          <div className="form-container">
            <div className="input-container">
              <label>Refund Request</label>
              <input
                type="text"
                name=""
                id=""
                value="To Bank"
                className="input"
                placeholder=""
              />
            </div>
          </div>
          <p className="heading-title">
            Shipping and Handling Information (for online purchases)
          </p>
          <div className="form-container">
            <div className="input-container">
              <label>Original shipping address.</label>
              <input
                type="text"
                name=""
                id=""
                value={showDetails?.order?.billingAddress?.address + "," + showDetails?.order?.billingAddress?.city}
                className="input"
                placeholder=""
              />
            </div>
            <div className="input-container">
              <label>
                Return shipping address (if different from the original)
              </label>
              <input
                type="text"
                name=""
                id=""
                value={showDetails?.returnAddressSameAsShipping ? "" : showDetails?.order?.deliveryAddress?.address + "," + showDetails?.order?.deliveryAddress?.city}
                className="input"
                placeholder=""
              />
            </div>
            <div>
              <input
                type="checkbox"
                name=""
                id=""
                value="Requirement"
                className="mr-4"
                placeholder=""
              />
              <label>Same as Original</label>
            </div>
            <div className="input-container">
              <label>
                Tracking number for the return shipment (if the return is via
                mail or courier).
              </label>
              <input
                type="text"
                name=""
                id=""
                value="************"
                className="input"
                placeholder=""
              />
            </div>
          </div>
          <p className="heading-title">
            Employee Handling the Return (for in-store returns)
          </p>
          <div className="form-container">
            <div className="input-container">
              <label>
                Name or ID of the employee processing the return or exchange
              </label>
              <div className="relative w-full">
                <input
                  type="text"
                  name=""
                  id=""
                  value="(Lorem ipsum)"
                  className="input w-full"
                  placeholder=""
                />
                <p
                  className="absolute top-2 right-6 text-[#0070BC] underline cursor-pointer"
                  onClick={() => setAddEmp(true)}
                >
                  Edit
                </p>
              </div>
              {isAddEmp && (
                <div
                  className="addstaf bg-[white] flex flex-col gap-2  rounded-md p-4"
                  style={{ width: "100%" }}
                >
                  <div
                    className="cursor-pointer text-gray-500"
                    onClick={() => setAddEmp(false)}
                  >
                    123 (larm)
                  </div>
                  <div
                    className="cursor-pointer text-gray-500"
                    onClick={() => setAddEmp(false)}
                  >
                    123 (larm)
                  </div>
                  <div
                    className="cursor-pointer text-gray-500"
                    onClick={() => setAddEmp(false)}
                  >
                    123 (larm)
                  </div>
                  <div
                    className="cursor-pointer text-gray-500"
                    onClick={() => setAddEmp(false)}
                  >
                    123 (larm)
                  </div>
                  <div
                    className="cursor-pointer text-gray-500"
                    onClick={() => setAddEmp(false)}
                  >
                    123 (larm)
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* <div className="flex justify-center my-6">
        <button className="menuButton3"  onClick={() =>  onClose()}>DONE</button>
      </div> */}
        </div>
      </DialogDefault>
    </div>
  );
};

export default ReturnForm;
