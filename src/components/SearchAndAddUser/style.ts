import { GrAdd } from 'react-icons/gr';
import styled from 'styled-components';

export const SearchAndAddUserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
`;

export const SearchInput = styled.input`
  font-size: ${props => props.theme.fontSizes.paragraph};
  flex: 1;
  padding:11px;
  border-radius: 5px;
  border: 2px solid ${(props) => props.theme.colors.argentinanBlue};
  margin: 10px;

  &:focus {
    outline: none;
  }
`;

export const AddUserButton = styled.button`
  background-color: ${props => props.theme.colors.bayernBlue};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.paragraph};
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export const AddUserIcon = styled(GrAdd)`
  margin-right: 8px;
  font-size: 12px;
`;