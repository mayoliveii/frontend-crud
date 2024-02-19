import { FilterContainer } from "./style";
import FilterSelection from "../FilterSelection/FilterSelection";

interface FilterProps {
  onFilterSelect: (selectedFilter: string, startDate: Date | null, endDate: Date | null) => void;
}

function Filter({ onFilterSelect }: FilterProps) {
  const filterOptions = ["Smallest to Largest", "Largest to Smallest"];

  const handleSelect = (selectedOption: string, startDate: Date | null, endDate: Date | null) => {
    onFilterSelect(selectedOption, startDate, endDate);
  };

  return (
    <FilterContainer>
      <FilterSelection options={filterOptions} onSelect={handleSelect} />
    </FilterContainer>
  );
}

export default Filter;
