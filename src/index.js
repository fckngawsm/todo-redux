import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Provider } from "react-redux";
import "./index.css";
import App from "./components/App";
import { store } from "./store";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
  },
  typography: {
    fontFamily: `'Inter',Arial, Helvetica, sans-serif`,
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
