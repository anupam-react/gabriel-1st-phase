import React, { useState } from "react";
import "./index.scss";
import MenuCard2 from "./MenuCard2";
import { DialogDefault } from "../common/DilogBox";
import TransactionDetails from "./TransactionDetails";
import { formatTime2 } from "../../utiils";
const AppPurchase = ({data}) => {
  const [openTransaction, setOpenTransaction] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div>
      <table className="table2">
        <thead>
          <tr>
            <th>Item Purchased</th>
            <th>Price</th>
            <th>Applied Promotion type</th>
            <th>Quantity</th>
            <th>Payment Method</th>
            <th>Transaction ID</th>
            <th>Time of Purchase</th>
            <th>Receipt</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((d, i)=>(
          <tr key={i}>
            <td>
              <p>{d?.productId?.name}</p>
            </td>
            <td>
              <div>£{d?.orderId?.price}</div>
            </td>
            <td>{d?.promotionType}</td>
            <td>{d?.orderId?.quantity}</td>
            <td>{d?.paymentMethod}</td>
            <td>
              <span
                className="id-link"
                onClick={() => setOpenTransaction(d)}
              >
                 {d?.Id}
              </span>
            </td>
            <td>{formatTime2(d?.date)}</td>
            <td className="flex justify-center">
              <div style={{ position: "relative", width: "120px" }}>
                <img src="./Group 38061.png" alt="" />
                <img
                  src="./Group 38060.png"
                  alt=""
                  on
                  style={{
                    position: "absolute",
                    top: "18%",
                    right: "18%",
                    cursor: "pointer",
                  }}
                />
                <img
                  src="./Group 38060.png"
                  alt=""
                  onClick={() =>{ 
                    if(openMenu === i+1) setOpenMenu(false) 
                    else setOpenMenu(i+1)
                  }}
                  style={{
                    position: "absolute",
                    top: "18%",
                    right: "18%",
                    cursor: "pointer",
                  }}
                />
              {openMenu === i+1 && <MenuCard2 data={d}/>}
              </div>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
      <DialogDefault open={openTransaction} handleOpen={setOpenTransaction}>
        <TransactionDetails handleOpen={setOpenTransaction} allData={openTransaction} brandData={openTransaction?.brandId} userData={openTransaction?.user} data={openTransaction?.orderId}/>
      </DialogDefault>
    </div>
  );
};

export default AppPurchase;
