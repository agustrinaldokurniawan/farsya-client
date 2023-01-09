import React from "react";
import { Col, Image, Layout, Row, Space, Typography } from "antd";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";

import LogoInvert from "../assets/logo_invert.png";

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

const PageContainer = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title + (title && " |") + " Farsya"}</title>
      </Helmet>
      <Layout>
        <Header style={{ backgroundColor: "white" }}>
          <Navbar />
        </Header>
        <Content style={{ background: "white" }}>{children}</Content>
        <Footer style={{ background: "var(--blue-aqua)" }}>
          <Row
            align={"middle"}
            justify="center"
            style={{ textAlign: "center" }}
          >
            <Col span={24}>
              <Space align="center">
                <Image width={"50px"} src={LogoInvert} preview={false} />
                <Title level={4} style={{ margin: 0, color: "white" }}>
                  Farsyaa Adeeva
                </Title>
              </Space>
            </Col>
            <Col span={24} style={{ marginTop: "50px" }}>
              <Text style={{ color: "white" }}>
                @Copyright Farsya Adeeva 2023
              </Text>
            </Col>
          </Row>
        </Footer>
      </Layout>
    </>
  );
};

export default PageContainer;
