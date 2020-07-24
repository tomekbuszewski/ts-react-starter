import { createGlobalStyle } from "styled-components";
import reboot from "styled-reboot";
import { theme } from "@ui/theme";

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
    scroll-behavior: smooth;
  }
  
  ${reboot({
    bodyBg: theme.colors.background,
    bodyColor: theme.colors.base,
  })}
`;
