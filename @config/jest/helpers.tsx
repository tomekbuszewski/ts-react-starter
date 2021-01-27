import * as React from "react";

import { render, RenderResult } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "@ui/globalStyle";
import { theme } from "@ui/theme";


const renderWithDeps = (ui: React.ReactElement): RenderResult =>
  render(
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {ui}
    </ThemeProvider>,
  );

export { renderWithDeps };
