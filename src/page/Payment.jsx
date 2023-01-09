import React, { useState } from "react";
import PageContainer from "../component/PageContainer";
import { Row, Col, Typography, Image, Input, Button } from "antd";

const { Title, Text } = Typography;
const { TextArea } = Input;

const Payment = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    alamat: "",
    phoneNumber: "",
  });
  const handleChange = (key, value) => {
    setState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  const handleSubmit = () => {};
  return (
    <PageContainer title={"Payment"}>
      <Row justify={"center"}>
        <Col span={18} style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Row justify={"center"}>
            <Col span={24} style={{ marginBottom: "50px" }}>
              <Title
                style={{ textAlign: "center", color: "var(--blue-aqua)" }}
                level={3}
              >
                Isi Form Untuk Metode Pembayaran
              </Title>
            </Col>

            <Row gutter={[48, 32]}>
              <Col span={12}>
                <Input
                  placeholder="Nama depan"
                  size="large"
                  onChange={(e) => handleChange("firstName", e.target.value)}
                />
              </Col>
              <Col span={12}>
                <Input
                  placeholder="Nama belakang"
                  size="large"
                  onChange={(e) => handleChange("lastName", e.target.value)}
                />
              </Col>
              <Col span={12}>
                <Input
                  placeholder="Email"
                  size="large"
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </Col>
              <Col span={12}>
                <TextArea
                  placeholder="Alamat pengiriman"
                  size="large"
                  rows={4}
                  onChange={(e) => handleChange("alamat", e.target.value)}
                />
              </Col>
              <Col span={12}>
                <Text>Metode Pembayaran akan dipilih setelah proses ini</Text>
              </Col>
              <Col span={12}>
                <Input
                  placeholder="Telp/Hp"
                  size="large"
                  onChange={(e) => handleChange("phoneNumber", e.target.value)}
                />
              </Col>
              <Col span={24} style={{ textAlign: "center" }}>
                <Button type="primary" size="large" style={{ width: "300px" }}>
                  Proses Pembayaran
                </Button>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Payment;
