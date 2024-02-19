import React, { useEffect, useState } from "react";
import { FilterSelectionContainer, FilterSelect } from "./style";
import DateRangeFilter from "../DateRangerFilter/DateRangerFilter";

interface FilterSelectionProps {
  options: string[];
  onSelect: (selectedOption: string, startDate: Date | null, endDate: Date | null) => void;
}

function FilterSelection({ options, onSelect }: FilterSelectionProps) {
  const [selectedOption, setSelectedOption] = useState<string>("Smallest to Largest");
  const [dateRange, setDateRange] = useState<{ startDate: Date | null; endDate: Date | null }>({
    startDate: null,
    endDate: null,
  });

  const { startDate, endDate } = dateRange;

  useEffect(() => {
    onSelect(selectedOption, startDate, endDate);
  }, [selectedOption, startDate, endDate, onSelect]);

  const handleDateChange = (start: Date | null, end: Date | null) => {
    setDateRange({ startDate: start, endDate: end });
  };

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <FilterSelectionContainer>
      <FilterSelect value={selectedOption} onChange={handleOptionChange}>
        <option value="" disabled>
          Choose a filter option
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </FilterSelect>
      <DateRangeFilter onDateChange={handleDateChange} startDate={startDate} endDate={endDate} />
    </FilterSelectionContainer>
  );
}

export default FilterSelection;
