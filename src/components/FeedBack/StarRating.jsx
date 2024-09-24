import React, { useState } from 'react';


const StarRating = ({rating}) => {

  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <img
            key={index}
            src={starValue <= rating ? './Vector (8).png' : './Vector (7).png'}
            alt={`Star ${starValue}`}
            // onClick={() => handleStarClick(starValue)}
            style={{ width: '15px', height: '15px', cursor: 'pointer', }}
          />
        );
      })}
   
    </div>
  );
};

export default StarRating;
// .star-rating{
//   margin-top: 40px;
//   display: flex;
//   align-items: center;
//   .number{
//       color: #1D1D1D;
//       font-weight: 900;
//       font-size: 38px;
//       padding: 0px 20px;
//   }
//   .descption{
//       color: #1D1D1D;
//       font-weight: 700;
//       font-size: 24px;
//   }
// }