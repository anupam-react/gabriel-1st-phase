import React, { useState } from 'react'
import "./index.scss";
import { DialogDefault } from '../common/DilogBox'
import BirthDayGift from './BirthDayGift'
import CustomizedBGift from './CustomizedBGift'
import AwardCustomer from './AwardCustomer'
import Bouns from './Bouns'

import Invitation from './Invitation';
const MenuCard = ({onClose,  data }) => {

  console.log(data)
    const [openGift , setOpenGift] = useState(false)
    const [openOffer , setOpenOffer] = useState(false)
    const [openPromotions , setOpenPromotions] = useState(false)
    const [openBonus , setOpenBonus] = useState(false)
    const [openEvent , setOpenEvent] = useState(false)


  return (
    <div className='menu-container '>
       <button className="menuButton2" onClick={()=> setOpenGift(true)}>Send BirthDay Gift</button>
       <button className="menuButton2" onClick={()=> setOpenOffer(true)}>Send Customized BirthDay Offer</button>
       <button className="menuButton2"  onClick={()=> setOpenPromotions(true)}>Send Target Promotions</button>
       <button className="menuButton2" onClick={()=> setOpenBonus(true)}>Awared Free Bonus</button>
          <button className="menuButton2" onClick={()=> setOpenEvent(true)}>Send Special Event Invite</button>
          <DialogDefault open={openGift} handleOpen={setOpenGift}>
            <BirthDayGift  handleOpen={setOpenGift} id={data?._id}  onClose={onClose}/>
        </DialogDefault>
          <DialogDefault open={openOffer} handleOpen={setOpenOffer}>
            <CustomizedBGift  handleOpen={setOpenOffer} id={data?._id}/>
        </DialogDefault>
          <DialogDefault open={openPromotions} handleOpen={setOpenPromotions}>
            <AwardCustomer  handleOpen={setOpenPromotions} id={data?._id}/>
        </DialogDefault>
          <DialogDefault open={openBonus} handleOpen={setOpenBonus}>
            <Bouns handleOpen={setOpenBonus} id={data?._id} onClose={onClose}/>
        </DialogDefault>
          <DialogDefault open={openEvent} handleOpen={setOpenEvent}>
            <Invitation  handleOpen={setOpenEvent} id={data?._id} onClose={onClose}/>
        </DialogDefault>
    </div>
  )
}

export default MenuCard
