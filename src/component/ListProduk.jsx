import { Button, Card, Col, Image, Row, Typography } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCart } from "../redux/cart";
import CartService from "../service/Cart";

const { Title } = Typography;

const ListProduk = ({ produk, keyword }) => {
  const cartService = new CartService();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const buyNow = async (productId) => {
    const response = await cartService.addToCart(productId);
    dispatch(setCart(response));
  };
  return (
    <Row
      gutter={48}
      align="middle"
      justify={"center"}
      style={{ width: "75%", margin: "auto" }}
    >
      {produk.map(
        (item, key) =>
          JSON.stringify(item)
            .toLowerCase()
            .includes(keyword.toLowerCase() || "") && (
            <Col span={6} style={{ marginTop: "20px" }} key={key}>
              <Card
                hoverable
                style={{ padding: 0 }}
                cover={<img alt="example" src={item.image.url} />}
              >
                <Title
                  level={4}
                  onClick={() => navigate("/produk/" + item.name)}
                >
                  {item.name}
                </Title>
                <Title level={5}>
                  {" "}
                  Rp {item.price.raw.toLocaleString("id")}
                </Title>
                <Button
                  type="primary"
                  onClick={() => buyNow(item.id)}
                  style={{ width: "100%", borderRadius: 0 }}
                >
                  Beli
                </Button>
              </Card>
            </Col>
          )
      )}
    </Row>
  );
};

export default ListProduk;
