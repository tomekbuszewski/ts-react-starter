import * as React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { theme } from "../../src/ui/theme";
import { GlobalStyle } from "../../src/ui/globalStyle";

const renderWithDeps = (ui: React.ReactElement) =>
  render(
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {ui}
    </ThemeProvider>,
  );

export { renderWithDeps };
