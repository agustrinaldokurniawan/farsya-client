import React, { useState } from "react";
import PageContainer from "../component/PageContainer";
import { Row, Input, Col, Typography, Button } from "antd";

const { Title, Text } = Typography;
const { TextArea } = Input;

const Kontak = () => {
  const [state, setState] = useState({ fullName: "", email: "", message: "" });
  const handleChange = (key, value) => {
    setState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  const handleSubmit = () => {};
  return (
    <PageContainer title={"Kontak"}>
      <Row
        justify={"center"}
        align="middle"
        style={{ marginTop: "50px", marginBottom: "50px" }}
      >
        <Col span={18} style={{ marginTop: "50px" }}>
          <Row gutter={48} justify="center">
            <Col
              span={10}
              style={{ backgroundColor: "var(--blue-aqua)", padding: "40px" }}
            >
              <Title level={2} style={{ color: "white" }}>
                Kontak Kami
              </Title>
              <Text style={{ color: "white" }}>contact@farsyadeeva.com</Text>
              <br />
              <Text style={{ color: "white" }}>contact@farsyadeeva.com</Text>
              <br />
              <Text style={{ color: "white" }}>
                Jl. Bali Matraman No 16 Tanah Abang
              </Text>
            </Col>
            <Col span={10}>
              <Row>
                <Col span={24}>
                  <Text>Nama Lengkap</Text>
                  <Input
                    placeholder="John Doe"
                    size="large"
                    style={{ borderRadius: 0 }}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                  />
                </Col>
                <Col span={24} style={{ marginTop: "20px" }}>
                  <Text>Email</Text>
                  <Input
                    placeholder="johndoe@email.com"
                    size="large"
                    style={{ borderRadius: 0 }}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                </Col>
                <Col span={24} style={{ marginTop: "20px" }}>
                  <Text>Pesa</Text>
                  <TextArea
                    placeholder="tulis pesan disini"
                    size="large"
                    rows={8}
                    style={{ borderRadius: 0 }}
                    onChange={(e) => handleChange("message", e.target.value)}
                  />
                </Col>
                <Col span={24} style={{ marginTop: "20px" }}>
                  <Button
                    type="primary"
                    size="large"
                    style={{ width: "100%", borderRadius: 0 }}
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Kontak;
