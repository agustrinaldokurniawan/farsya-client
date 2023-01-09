import React, { useState } from "react";
import PageContainer from "../component/PageContainer";
import { Row, Input, Col, Typography } from "antd";

import Produk1 from "../assets/produk/1.png";
import Produk2 from "../assets/produk/2.png";
import Produk3 from "../assets/produk/3.png";
import Produk4 from "../assets/produk/4.png";
import Produk5 from "../assets/produk/5.png";
import Produk6 from "../assets/produk/6.png";
import Produk7 from "../assets/produk/7.png";
import Produk8 from "../assets/produk/8.png";

import ListProduk from "../component/ListProduk";

const { Title } = Typography;

const { Search } = Input;

const produk = [
  {
    name: "Denay syari motif",
    price: 1200000,
    image: Produk1,
  },
  {
    name: "Nike Air Max 270 React",
    price: 900000,
    image: Produk2,
  },
  {
    name: "Nike Air Max 270 React",
    price: 540000,
    image: Produk3,
  },
  {
    name: "Nike Air Max 270 React",
    price: 870000,
    image: Produk4,
  },
  {
    name: "Nike Air Max 270 React",
    price: 1340000,
    image: Produk5,
  },
  {
    name: "Nike Air Max 270 React",
    price: 930000,
    image: Produk6,
  },
  {
    name: "Nike Air Max 270 React",
    price: 920000,
    image: Produk7,
  },
  {
    name: "Nike Air Max 270 React",
    price: 760000,
    image: Produk8,
  },
];

const Produk = () => {
  const [keyword, setKeyword] = useState("");
  const onSearch = () => {};
  return (
    <PageContainer title={"Produk"}>
      <Row>
        <Col span={24} style={{ marginTop: "50px" }}>
          <Title style={{ textAlign: "center" }} level={3}>
            Semua Produk
          </Title>
        </Col>
        <Col span={24}>
          <Row
            justify={"center"}
            align={"middle"}
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            <Col span={8}>
              <Search
                placeholder="Cari Produk"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </Col>
          </Row>
        </Col>
        <Col span={24} style={{ marginBottom: "50px" }}>
          <ListProduk produk={produk} keyword={keyword} />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Produk;
