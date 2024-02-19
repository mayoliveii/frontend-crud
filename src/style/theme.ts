import { DefaultTheme } from 'styled-components';

export interface CustomTheme extends DefaultTheme {
  colors: {
    silverGray: string;
    gray: string;
    midGray: string;
    darkGray: string;
    white: string;
    tealBlue: string;
    franceBlue: string;
    argentinanBlue: string;
    bayernBlue: string;
    babyBlue: string;
    background: {
      black: string;
      bsGray: string;
      lightGray: string;
      darkGray: string;
      lightGrayish: string;
      white: string;
      crystalWhite: string;
      pearlGray: string;
      softGreen: string;
      redCoral: string;
      purplish: string;
      navyBlue: string;
      aliceBlue: string;
      columbiaBlue: string;
      skyBlue: string;
    };
    border: string;
  };
  font: {
    openSans: string;
  };
  fontSizes: {
    paragraph: string;
    xSmall: string;
    small: string;
    medium: string;
    large: string;
  };
}

const theme: CustomTheme = {
  colors: {
    silverGray: "#DBDBDB",
    gray: "#848484",
    midGray: "rgba(227, 79, 79, 1)",
    darkGray: "#555555",
    white: "#FFFFFF",
    tealBlue: "#4DA6B3",
    franceBlue: "#318CE7",
    argentinanBlue: "#6CB4EE",
    bayernBlue: "#6070ff",
    babyBlue: "#89CFF0",
    background: {
      bsGray: "#f0f0f0",
      black: "#000000",
      lightGray: "#E4E4E4",
      darkGray: "#555555",
      softGreen: "#3FC67D",
      redCoral: "#E34F4F",
      crystalWhite: "#F7F7F7",
      pearlGray: "#F7F7F8",
      lightGrayish: "#F4F4F4",
      white: "#FFFFFF",
      aliceBlue: "#F0F8FF",
      purplish:"radial-gradient(93% 87% at 87% 89%, rgba(0, 0, 0, 0.23) 0%, transparent 86.18%), radial-gradient(66% 87% at 26% 20%, rgba(255, 255, 255, 0.41) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%);" ,
      navyBlue: "#4C43CD",
      columbiaBlue: "#d5f0ff",
      skyBlue: "#00BFFF",
    },
    border: "1px solid",
  },
  font: {
    openSans: "Open-Sans, Helvetica, Sans-Serif",
  },
  fontSizes: {
    paragraph: "1em",
    xSmall: "1.3em",
    small: "2em",
    medium: "2.4em",
    large: "3.2em",
  },
};

export { theme };