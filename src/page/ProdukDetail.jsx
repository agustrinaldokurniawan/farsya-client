import React, { useState } from "react";
import PageContainer from "../component/PageContainer";
import {
  Image,
  Row,
  Col,
  Typography,
  Divider,
  Space,
  Button,
  Tabs,
} from "antd";
import {
  PlusOutlined,
  MinusOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

import Produk1 from "../assets/produk/1.png";

const { Text, Title } = Typography;

const ProdukDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [produk, setProduk] = useState({
    name: "Denay syari motif",
    price: 1200000,
    image: Produk1,
    category: "Accessories",
    description:
      "The Nike Air Max 270 is a high-performance training shoe designed to provide comfort and support during your workouts. It features a lightweight, breathable upper and a Max Air unit in the heel for added cushioning. The shoe also has a durable rubber outsole that provides excellent traction on a variety of surfaces. Whether you're hitting the gym or running on the treadmill, the Nike Air Max 270 is a reliable choice for all your training needs.",
  });

  const handleChangeQuantity = (action) => {
    if (action === "add") setQuantity(quantity + 1);
    if (action === "minus") setQuantity(quantity - 1);
  };

  return (
    <PageContainer title={produk.name}>
      <Row justify={"center"}>
        <Col span={18} style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Row>
            <Col span={12}>
              <Image width={"80%"} src={produk.image} />
            </Col>
            <Col span={12}>
              <Row>
                <Col span={24}>
                  <Title level={3}>{produk.name}</Title>
                </Col>
                <Col span={24}>
                  <Title level={4} style={{ color: "var(--blue-aqua)" }}>
                    Rp {produk.price.toLocaleString("id")}
                  </Title>
                </Col>
                <Divider />
                <Col span={24}>
                  <Text>
                    Category: &emsp;&emsp;&emsp;&emsp;&emsp; {produk.category}
                  </Text>
                  <br />
                  <Text>Deskripsi singkat: &emsp;&emsp;---</Text>
                </Col>
                <Divider />
                <Col span={24}>
                  <Row justify={"space-between"}>
                    <Space>
                      <Button
                        type="primary"
                        shape="circle"
                        icon={<MinusOutlined />}
                        onClick={() => handleChangeQuantity("minus")}
                      />
                      <Text>{quantity}</Text>
                      <Button
                        type="primary"
                        shape="circle"
                        icon={<PlusOutlined />}
                        onClick={() => handleChangeQuantity("add")}
                      />
                    </Space>
                    <Button type="primary" icon={<ShoppingCartOutlined />}>
                      Tambahkan ke keranjang
                    </Button>
                  </Row>
                </Col>
                <Divider />
              </Row>
            </Col>
          </Row>
        </Col>
        <Col
          span={18}
          style={{
            marginBottom: "50px",
            backgroundColor: "var(--gray)",
          }}
        >
          <Tabs
            defaultActiveKey="1"
            style={{ padding: 20 }}
            items={[
              {
                label: `Product Information`,
                key: "1",
                children: <Text>{produk.description}</Text>,
              },
            ]}
          />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default ProdukDetail;
