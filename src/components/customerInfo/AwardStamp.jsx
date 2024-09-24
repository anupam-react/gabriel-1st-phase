import React, { useState } from 'react'
import { DialogDefault } from "../common/DilogBox";
import "./index.scss";
import useBouns from '../../hooks/useBouns';

const AwardStamp = ({handleOpen , id , productId}) => {
  const {     bouns,
    handleChange,
    setBounData,
    openSuccess,
    setSuccess,
    handleCreateAwardFreeBonus,
   } = useBouns()

    const [active , setActive] = useState(0)
  return (
 <div className="px-[24px] py-[16px] text-[black] font-[600] no-scrollbar" >
      <div className="gift-main ">
        <p className="title">Award Stamps</p>
        <img
          src="./Mask group (2).png"
          alt=""
          className="cross-image"
          onClick={() => {
            handleOpen(false);
          }}
        />
      </div>
          <hr className="hr" />
      
      <div className="button-group">
        <button className={active === 0 ? "button2" : "button1"} style={{fontSize:"18px"}} onClick={()=>{
           setActive(0)
           setBounData({...bouns, totalNoOfStamps: 5})
           }}>
          5 Stamps
        </button>
        <button className={active === 1 ? "button2" : "button1"} style={{fontSize:"18px"}} onClick={()=>{ 
          setActive(1)
          setBounData({...bouns, totalNoOfStamps: 10})
          }}>
          10 Stamps
        </button>
        <button className={active === 2 ? "button2" : "button1"} style={{fontSize:"18px"}} onClick={()=> {
          setActive(2)
          setBounData({...bouns, totalNoOfStamps: 20})
          }}>
          20 Stamps
        </button>
          </div>
           
      <div className="form-container">
        <div className="input-container">
          <label>Custom Stamps</label>
          <input type="text" name="totalNoOfStamps" id="" className="input" placeholder=""      value={bouns?.totalNoOfStamps}
            onChange={handleChange} />
        </div>

        <div className="input-container">
          <label>Description</label>
          <textarea
     id="description"
     name="description"
     rows="3"
     cols="50"
     className="input"
     value={bouns?.description}
     onChange={handleChange} 
          />
        </div>
      </div>
      <div className="flex-center">
        <button className="menuButton" onClick={() =>handleCreateAwardFreeBonus(id , productId)}>
          SEND NOTIFICATION
        </button>
      </div>
      <DialogDefault open={openSuccess} handleOpen={setSuccess}>
         <div className="p-6 ">
          <div className="cross-image2">
            <img
              src="./Mask group (2).png"
              alt=""
              className=""
              onClick={() => {
                setSuccess(false);
              
              }}
            />
          </div>
          <div className='flex justify-center '>
          <img src="./2fa7832afa749ffa404629da1ede8820.gif" alt="" className='w-[120px]' />

          </div>
          <p className='text-center text-black text-[28px] font-[500]'>
          Stamps successfully awarded to the customer
          </p>
        </div>
      </DialogDefault>
    </div>
  )
}

export default AwardStamp
