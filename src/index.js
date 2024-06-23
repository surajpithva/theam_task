import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";

import App from "./App";
import { Provider } from "react-redux";
import store from "./redux-toolkit/store";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
