import React from "react";

const ImageCard = ({ image, key, stamps , completeNoOfStamps }) => {
  function createArrayWithLength(length) {
    return Array.from({ length }, (_, index) => index + 1); // Fills array with values starting from 1
  }
  const completeNoOfStampsArray = createArrayWithLength(completeNoOfStamps)
  const stampArray = createArrayWithLength(stamps - completeNoOfStamps);
  return (
    <div key={key}>
      <div className="relative">
        <img src={image} alt="" className="w-[320px] h-[150px] rounded-lg" />
        <div className="absolute top-[30px] left-[30px]">
          <div className="grid grid-cols-4 w-[250px] gap-3">
            {completeNoOfStampsArray?.map((d, i) => (
              <div key={i} className="bg-[#FFFF] w-[30px] h-[30px] rounded-full relative flex justify-center items-center">
                <img src="../img/mdi_tick-circle.png" alt="" className=''/>
      
              </div>
            ))}
            {stampArray?.map((d, i) => (
              <div key={i} className="bg-[#FFFF] w-[30px] h-[30px] rounded-full relative flex justify-center items-center">
                {/* <img src="../img/mdi_tick-circle.png" alt="" className='absolute top-[5px] left-[5px] w-[20px] h-[20px]'/> */}
                <p className="text-center font-[600] text-[14px]">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
