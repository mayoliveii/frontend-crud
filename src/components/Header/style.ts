import styled from 'styled-components';
import { CustomTheme } from '../../style/theme';

interface HeaderContainerProps {
  theme: CustomTheme;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.bayernBlue};
  padding: 20px 20px;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.font.openSans};
  font-size: ${(props) => props.theme.fontSizes.paragraph};
`;

export const CompanyLogo = styled.img`
  width: 50px;
  height: auto;
  margin-right: 10px;
`;
