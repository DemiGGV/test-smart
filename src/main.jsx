import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./Redux/store.js";
import { Global  } from "@emotion/react";
import { GlobalCSS } from "./main.styled.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Global styles={GlobalCSS} />
      <App />
    </Provider>
  </StrictMode>
);
