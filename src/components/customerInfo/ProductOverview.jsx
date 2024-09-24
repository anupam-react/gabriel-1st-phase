import React, { useState } from 'react'
import "./index.scss";
import { formatTime2, getDateFromISOString } from '../../utiils';
const ProductOverview = ({handleOpen , data}) => {

  return (
    <div className='details-container'>
     <p className="details-title">Product Details</p>
        <img
          src="./Mask group (2).png"
          alt=""
          className="cross-image2"
          onClick={()=> handleOpen(false)}
      />
      <img src={data?.image} alt="" className='details-image' />
      <hr className='my-4 bg-[#A2A2A2] w-full'/>
      <div className='details-info'>
        <div className='info2'>
          <p>Product <span className='pl-4'>:</span></p>
  
          <p>{data?.name}</p>
        </div>
        <div className='info2'>
          <p>Price <span className='pl-4'>:</span></p>
       
          <p>£{data?.price}</p>
        </div>
        <div className='info2'>
          <p>Last Date Visit <span className='pl-4'>:</span></p>
         
          <p>{getDateFromISOString(data?.createdAt)}</p>
        </div>
        <div className='info2'>
          <p>Timings <span className='pl-4'>:</span></p>
         
          <p>{formatTime2(data?.createdAt)}</p>
        </div>
     

      </div>
   
    </div>
  )
}

export default ProductOverview
