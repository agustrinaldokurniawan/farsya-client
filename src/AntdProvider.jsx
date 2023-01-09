import React from "react";
import { ConfigProvider } from "antd";

const AntdProvider = ({ children }) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#5bc0f8",
      },
    }}
  >
    {children}
  </ConfigProvider>
);

export default AntdProvider;
