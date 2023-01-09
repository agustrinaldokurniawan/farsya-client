import React, { useEffect } from "react";
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
import { addToCart, decfromCart, setCart } from "../redux/cart";
import { useNavigate } from "react-router-dom";
import CartService from "../service/Cart";

const { Title, Text } = Typography;

const Cart = () => {
  const dispatch = useDispatch();
  const cartService = new CartService();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.value);

  useEffect(() => {
    fetchCart();
  }, [cart]);

  const fetchCart = async () => {
    const response = await cartService.getCart();
    dispatch(setCart(response));
  };
  const columns = [
    {
      title: "",
      render: (_, record) => (
        <Button
          danger
          shape="circle"
          icon={<CloseOutlined />}
          onClick={() => {
            cartService.removeFromCart(record.id);
          }}
        />
      ),
    },
    {
      title: "Produk",
      render: (_, record) => (
        <Space>
          <Image width={150} src={record.image.url} />
          <Text style={{ marginLeft: "20px" }}>{record.name}</Text>
        </Space>
      ),
    },
    {
      title: "@Harga",
      render: (_, record) => (
        <Text>IDR {record.price.raw.toLocaleString("id")}</Text>
      ),
    },
    {
      title: "Qty",
      render: (_, record) => (
        <Space>
          <Button
            type="primary"
            shape="circle"
            icon={<MinusOutlined />}
            onClick={() => {
              cartService.updateCart(record.id, record.quantity - 1);
            }}
          />
          <Text>{record.quantity}</Text>
          <Button
            type="primary"
            shape="circle"
            icon={<PlusOutlined />}
            onClick={() => {
              cartService.addToCart(record.product_id);
            }}
          />
        </Space>
      ),
    },
    {
      title: "Jumlah",
      render: (_, record) => (
        <Text>IDR {record.line_total.raw.toLocaleString("id")}</Text>
      ),
    },
  ];
  const handleBuy = () => {
    navigate("/payment");
  };

  return (
    <PageContainer title={"Cart"}>
      <Row justify={"center"}>
        <Col span={18} style={{ marginTop: "50px" }}>
          <Row justify={"center"}>
            <Col span={24}>
              <Table columns={columns} dataSource={cart.line_items} />
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
                        {cart.subtotal &&
                          cart.subtotal.raw.toLocaleString("id")}
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
