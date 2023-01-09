import { Badge, Button, Col, Image, Row, Space } from "antd";
import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { Typography } from "antd";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

const { Title } = Typography;

const menu = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Produk",
    path: "/produk",
  },
  {
    label: "Tentang Kami",
    path: "/tentang-kami",
  },
  {
    label: "Kontak",
    path: "/kontak",
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.value);

  return (
    <Row>
      <Col span={5}>
        <Space align="center">
          <Image width={50} src={Logo} preview={false} />
          <Title level={4} className="title" onClick={() => navigate("/")}>
            Farsya Adeeva
          </Title>
        </Space>
      </Col>
      <Col span={15}>
        <Space align="center" size={50}>
          {menu.map((item) => (
            <Title
              level={5}
              className="title"
              onClick={() => navigate(item.path)}
            >
              {item.label.toUpperCase()}
            </Title>
          ))}
        </Space>
      </Col>
      <Col span={4}>
        <Space align="center" size={50}>
          <Button type="text" onClick={() => navigate("#")}>
            Akun saya
          </Button>
          <Badge count={cart.total_items} showZero>
            <Button
              type="text"
              shape="circle"
              icon={<ShoppingCartOutlined />}
              onClick={() => navigate("/cart")}
            />
          </Badge>
        </Space>
      </Col>
    </Row>
  );
};

export default Navbar;
