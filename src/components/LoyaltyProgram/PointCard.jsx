import React from 'react'

const PointCard = ({image , text , point, key}) => {
  return (
    <div key={key}>
      <div className='relative'>
          <img src={image} alt="" className='w-[320px] h-[150px] rounded-lg'/>
          <div className='absolute top-[30px] left-[46%]'>
          <img src="../img/ic_round-lock.png" alt="" />
          </div>
          <div className='absolute top-[60%] left-[5%]'>
            <p className='text-white pb-[6px] text-[14px]'>{point} Points</p>
          <img src="../img/Rectangle 8774.png" alt="" />
          </div>
      </div>
          <p className='text-[#646464] font-semibold w-[320px]'>{text}</p>
    </div>
  )
}

export default PointCard
