import styled from "styled-components";

export const ModalOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => (props.$isOpen ? "rgba(0, 0, 0, 0.5)" : "none")};
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  transition: visibility 0s, opacity 0.5s linear;
`;


export const ModalContent = styled.div`
font-family: ${(props) => props.theme.font.openSans};
  background: ${(props) => props.theme.colors.background.white};
  padding: 50px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  `;


export const ModalTitle = styled.h2`
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
`;

export const FormInput = styled.input`
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid ${props => props.theme.colors.silverGray};
  border-radius: 8px;
`;

export const FormButton = styled.button`
  background-color: ${props => props.theme.colors.background.navyBlue};
  color: ${props => props.theme.colors.background.white};
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 15px;
`;

export const CloseButton = styled.button`
  background-color: ${props => props.theme.colors.background.softGreen};
  color: ${props => props.theme.colors.background.white};
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 8px;
`;
