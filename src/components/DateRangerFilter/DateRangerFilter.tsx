import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { DateRangeFilterContainer, DatePickerWrapper } from "./style";
import DatePicker from "react-datepicker";

interface DateRangeFilterProps {
  onDateChange: (startDate: Date, endDate: Date) => void;
  startDate: Date | null;
  endDate: Date | null;
}

function DateRangeFilter({ onDateChange, startDate: propStartDate, endDate: propEndDate }: DateRangeFilterProps) {
  const [startDate, setStartDate] = useState<Date | null>(propStartDate);
  const [endDate, setEndDate] = useState<Date | null>(propEndDate);

  const handleDateChange = (date: Date | null, isStart: boolean) => {
    isStart ? setStartDate(date) : setEndDate(date);
  };

  const applyFilter = () => startDate !== null && endDate !== null && onDateChange(startDate, endDate);

  return (
    <DateRangeFilterContainer>
      <DatePickerWrapper>
        <DatePicker
          placeholderText="Start date"
          selected={startDate}
          onChange={(date) => handleDateChange(date, true)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
      </DatePickerWrapper>
      <DatePickerWrapper>
        <DatePicker
          placeholderText="End date"
          selected={endDate}
          onChange={(date) => handleDateChange(date, false)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
      </DatePickerWrapper>
      <button onClick={applyFilter}>Apply filter</button>
    </DateRangeFilterContainer>
  );
}

export default DateRangeFilter;
