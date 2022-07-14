import React from "react";
import ReactDOM from "react-dom";
import "./global/globalStyles.css";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import Themes from "./themes";
import App from "./components/App";
import { LayoutProvider } from "./context/LayoutContext";
import { UserProvider } from "./context/UserContext";
import { QueryClient, QueryClientProvider } from "react-query";
import SimpleReactLightbox from "simple-react-lightbox";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <LayoutProvider>
      <UserProvider>
        <ThemeProvider theme={Themes.default}>
          <CssBaseline />
          <SimpleReactLightbox>
            <App />
          </SimpleReactLightbox>
        </ThemeProvider>
      </UserProvider>
    </LayoutProvider>
  </QueryClientProvider>,
  document.getElementById("root"),
);
