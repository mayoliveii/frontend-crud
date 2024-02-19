import styled from "styled-components";

export const DateRangeFilterContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  
  button {
    font-size: ${(props) => props.theme.fontSizes.paragraph};
    font-family: ${(props) => props.theme.font.openSans};
    padding: 5px;
    background-color: ${(props) => props.theme.colors.bayernBlue};
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    padding: 10px;
  }
`;

export const DatePickerWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .react-datepicker__input-container {
    display: block;
  }

  .react-datepicker__input-container input {
    padding: 11px;
    font-size: 16px;
    border-radius: 5px;
    border: 2px solid ${(props) => props.theme.colors.argentinanBlue};

    &:focus {
      outline: none;
      border-color: ${(props) => props.theme.colors.skyBlue};
    }
  }
`;