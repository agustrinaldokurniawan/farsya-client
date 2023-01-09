import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "antd/dist/reset.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/main";
import "./index.css";
import AntdProvider from "./AntdProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AntdProvider>
        <RouterProvider router={router} />
      </AntdProvider>
    </Provider>
  </React.StrictMode>
);
