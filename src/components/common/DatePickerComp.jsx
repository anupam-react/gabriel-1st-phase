import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerComp = ({startDate , setStartDate }) => {

  return (
    <div>
      <DatePicker
        showIcon
        toggleCalendarOnIconClick
        dateFormat="dd/MM/yyyy"
        selected={startDate}
        className='rounded-md shadow border-none'
      onChange={(date) => setStartDate(date)}
    />
    </div>
  );
}
export default DatePickerComp;