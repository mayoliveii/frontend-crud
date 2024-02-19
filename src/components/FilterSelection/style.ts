import styled from "styled-components";

export const FilterSelectionContainer = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

export const FilterSelect = styled.select`
  font-size: ${(props) => props.theme.fontSizes.paragraph};
  font-family: ${(props) => props.theme.font.openSans};
  color: ${(props) => props.theme.colors.gray};
  padding: 10px;
  cursor: pointer;
  user-select: none;
  border: 2px solid ${(props) => props.theme.colors.argentinanBlue};
  border-radius: 5px;
  font-weight: normal;
  transition: border-color 0.3s;

  &:hover {
    border-color: ${(props) => props.theme.colors.skyBlue};
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.skyBlue};
  }
`;