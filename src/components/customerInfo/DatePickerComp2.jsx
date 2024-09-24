import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function DatePickerComp2({ startDate, setStartDate}) {
   

  return (
    <div>
      <DatePicker
        showIcon
        toggleCalendarOnIconClick
        dateFormat="dd/MM/yyyy"
        selected={startDate}
        className='rounded-md shadow border-none date'
      onChange={(date) => setStartDate(date)}
    />
    </div>
  );
}