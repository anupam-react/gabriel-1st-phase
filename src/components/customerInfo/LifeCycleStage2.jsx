import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'


const LifeCycleStage2 = ({data}) => {
    return (
       <div>
      <p className="font-semibold text-xl pb-4">Life Cycle Stage</p>
          <div className="rounded-lg shadow-md flex flex-col justify-center items-center bg-white p-4 h-[330px]">
        
       <CircularProgressbar
            value={data?.Active}
            text={`Active`}
        styles={buildStyles({
          textColor: "black",
          pathColor: "#00B050",
          trailColor: "gray",
          width:"200px"
        })}
          />
          <p style={{fontWeight:600}}>Active {data?.Active}%</p>
      </div>
    </div>
  )
}

export default LifeCycleStage2
