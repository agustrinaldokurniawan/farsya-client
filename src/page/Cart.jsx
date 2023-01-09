import React from "react";
import PageContainer from "../component/PageContainer";
import {
  Row,
  Col,
  Typography,
  Image,
  Table,
  Space,
  Button,
  Divider,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { PlusOutlined, MinusOutlined, CloseOutlined } from "@ant-design/icons";
import { addToCart, decfromCart } from "../redux/cart";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const produk = useSelector((state) => state.cart.value);
  const columns = [
    {
      title: "",
      render: (_, record) => (
        <Button danger shape="circle" icon={<CloseOutlined />} />
      ),
    },
    {
      title: "Produk",
      render: (_, record) => (
        <Space>
          <Image width={150} src={record.produk.image} />
          <Text style={{ marginLeft: "20px" }}>{record.produk.name}</Text>
        </Space>
      ),
    },
    {
      title: "@Harga",
      render: (_, record) => (
        <Text>IDR {record.produk.price.toLocaleString("id")}</Text>
      ),
    },
    {
      title: "Qty",
      dataIndex: "quantity",
      key: "quantity",
      render: (text, record) => (
        <Space>
          <Button
            type="primary"
            shape="circle"
            icon={<MinusOutlined />}
            onClick={() => dispatch(decfromCart(record.produk), 1)}
          />
          <Text>{text}</Text>
          <Button
            type="primary"
            shape="circle"
            icon={<PlusOutlined />}
            onClick={() => dispatch(addToCart(record.produk), 1)}
          />
        </Space>
      ),
    },
    {
      title: "Jumalah",
      render: (_, record) => (
        <Text>
          IDR {(record.produk.price * record.quantity).toLocaleString("id")}
        </Text>
      ),
    },
  ];
  const getTotalPrice = () => {
    return produk.reduce((a, b) => a + b.produk.price * b.quantity, 0);
  };

  const handleBuy = () => {
    navigate("/payment");
  };

  return (
    <PageContainer title={"Cart"}>
      <Row justify={"center"}>
        <Col span={18} style={{ marginTop: "50px" }}>
          <Row justify={"center"}>
            <Col span={24}>
              <Table columns={columns} dataSource={produk} />
            </Col>
            <Divider />

            <Col span={24} style={{ marginBottom: "50px" }}>
              <Row justify={"end"}>
                <Col span={6}>
                  <Row>
                    <Col span={24}>
                      <Divider style={{ marginTop: "50px" }} />
                    </Col>
                    <Col span={24}>
                      <Title level={3}>
                        Total &nbsp;&nbsp;IDR{" "}
                        {getTotalPrice().toLocaleString("id")}
                      </Title>
                    </Col>
                    <Col span={24}>
                      <Button
                        type="primary"
                        size="large"
                        style={{ borderRadius: 0, width: "100%" }}
                        onClick={handleBuy}
                      >
                        Bayar Sekarang
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Cart;
