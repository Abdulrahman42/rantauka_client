import { DefaultTheme } from "react-native-paper";

const primaryColor = "#2980b9";
const secondaryColor = "#3498db";
const thirdColor = "#bdc3c7";
const bgColor = "#f6f8f8";
const textColor = "#535c68";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#2980b9",
    accent: "#f1c40f"
  }
};

export { theme, bgColor, primaryColor, secondaryColor, thirdColor, textColor };
