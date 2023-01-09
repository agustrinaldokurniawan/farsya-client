import React from "react";

import SpeedImage from "../assets/speed.png";
import ServiceImage from "../assets/service.png";
import MoneyImage from "../assets/money.png";

import { Col, Image, Row, Typography } from "antd";
const { Title, Text } = Typography;

const data = [
  {
    title: "Free Shipping",
    description: "Bebas biaya ongkir kemanapun di seluruh Indonesia",
    image: SpeedImage,
  },
  {
    title: "100% Refund",
    description: "Uang kembali jika barang rusak atau tidak sampai ke tujuan",
    image: MoneyImage,
  },
  {
    title: "Support 24/7",
    description: "Bantuan dari Customer Service kami 24/7",
    image: ServiceImage,
  },
];

const Advantage = () => {
  return (
    <Row justify={"center"} align="middle">
      {data.map((item) => (
        <Col span={4} style={{ textAlign: "center" }}>
          <Image width={"40%"} src={item.image} preview={false} />
          <Title level={5}>{item.title}</Title>
          <Text>{item.description}</Text>
        </Col>
      ))}
    </Row>
  );
};

export default Advantage;
