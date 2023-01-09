import { Button, Card, Col, Image, Row, Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const ListProduk = ({ produk, addToCart, keyword }) => {
  const navigate = useNavigate();
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
                onClick={() => navigate("/produk/" + item.name)}
                hoverable
                style={{ width: 240, padding: 0 }}
                cover={<img alt="example" src={item.image} />}
              >
                <Title level={4}>{item.name}</Title>
                <Title level={5}> Rp {item.price.toLocaleString("id")}</Title>
                <Button
                  type="primary"
                  onClick={() => addToCart(item)}
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
