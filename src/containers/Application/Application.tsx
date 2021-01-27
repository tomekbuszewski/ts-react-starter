import React from "react";

import { Helmet } from "react-helmet";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { ErrorBoundary } from "@containers/ErrorBoundary";
import { Navigation } from "@containers/Navigation";
import { Routes } from "@containers/Routes";

import store from "@redux/store";

import { GlobalStyle } from "@ui/GlobalStyle";
import { theme } from "@ui/theme";

const Application: React.FC = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <React.Fragment>
            <Helmet titleTemplate="%s — my site" defaultTitle="my site" />
            <GlobalStyle />
            <Navigation />
            <hr />
            <Routes />
          </React.Fragment>
        </Router>
      </ThemeProvider>
    </Provider>
  </ErrorBoundary>
);

export { Application };
