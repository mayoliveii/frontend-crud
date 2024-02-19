import styled from "styled-components";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const TableContainer = styled.div`
  margin: 20px;
  font-family: ${props => props.theme.font.openSans};
  border-radius: 8px;
  overflow: hidden;
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.background.columbiaBlue};
  font-weight: bold;
  padding: 10px;
`;

export const TableCell = styled.div`
  flex: 1;
  padding: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const EditButton = styled.button`
  font-family: ${props => props.theme.font.openSans};
  background-color: ${props => props.theme.colors.bayernBlue};
  color: ${props => props.theme.colors.white};
  margin-right: 5px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export const EditUserIcon = styled(FaEdit)`
  font-size: 18px;
`;

export const DeleteButton = styled.button`
  font-family: ${props => props.theme.font.openSans};
  background-color: ${props => props.theme.colors.bayernBlue};
  color: ${props => props.theme.colors.white};
  padding: 8px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export const DeleteUserIcon = styled(MdDelete)`
  font-size: 18px;
`;