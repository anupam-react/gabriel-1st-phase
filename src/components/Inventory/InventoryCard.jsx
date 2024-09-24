import React, { useState } from 'react'
import './index.scss'
import { useNavigate } from 'react-router-dom';
import InventoryMenu from './InventoryMenu';
import useProduct from '../../hooks/useProduct';
const InventoryCard = ({ data , key }) => {
  const {openMenu, setOpenMenu} = useProduct();
  const navigate = useNavigate();
  return (
    <div className='relative' key={key}>
    <div className='card-container' >
          <div className='flex justify-between items-center'>
              <div className='activity'>
                 {data?.online ? <p className='dots'></p> : <p className='inActive'></p>}
                  <p className='text-[#121212] font-semibold'>{data?.inStore ? "Available Instore" : "UnAvailable Instore"}</p>
              </div>
              <img src="../../solar_menu-dots-bold.png" alt="" className='h-fit  cursor-pointer' onClick={()=>setOpenMenu(!openMenu) }/>
          </div>
          <div className='image cursor-pointer' onClick={()=> navigate(`/inventory/product-details/${data?._id}`)}>
          <img src={data?.image} alt="" className='w-[150px] rounded-lg'/>
          </div>
          <p className='text'>{data?.price}</p>
      <p className='text'>{data?.name}</p>
      
      </div>
      {openMenu &&
        <div className='menus'>
          <InventoryMenu setOpenMenu={setOpenMenu} id={data?._id} data={data}/>
          </div>
      }
    </div>
  )
}

export default InventoryCard
