import React from 'react'

const Uploadfile = ({text="" , id="", handleFileInputChange , image}) => {
  return (
   <div className="flex items-center justify-center w-full">
          <label for={id} className="flex bg-white items-center justify-between shadow rounded-md  w-full">
           { !!image?.length 
           ?  <img src={image} alt="" className='w-[30px] h-[25px] rounded-sm pl-[5px]'/>
          :<div className='pl-6'>{text}</div>
          }
        <div className="flex items-center justify-center py-2 px-4 rounded-md text-white gap-2" style={{backgroundColor:"#00AAEA"}}>
          <img src="./Mask group (5).svg" alt="" className='w-8 h-6'/>
          <p className='text-sm'>UPLOAD</p>
        </div>
        <input id={id} type="file" className="hidden" onChange={handleFileInputChange}/>
    </label>
</div> 
  )
}

export default Uploadfile
