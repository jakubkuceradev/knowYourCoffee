import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./theme/imports.css";
import theme from "./theme/theme.tsx";
import GlobalStyles from "./theme/GlobalStyles.tsx";
import { ThemeProvider } from "styled-components";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
