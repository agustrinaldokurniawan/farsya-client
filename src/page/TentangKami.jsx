import React from "react";
import PageContainer from "../component/PageContainer";
import { Row, Col, Typography, Image } from "antd";
import TentangKamiImage from "../assets/tentang_kami.png";

const { Title, Text } = Typography;

const TentangKami = () => {
  return (
    <PageContainer title={"Tentang Kami"}>
      <Row justify={"center"}>
        <Col span={18} style={{ marginTop: "50px" }}>
          <Row justify={"center"}>
            <Col span={24}>
              <Title style={{ textAlign: "center" }} level={3}>
                Tentang Kami
              </Title>
            </Col>
            <Col span={24} style={{ marginTop: "50px" }}>
              <Text>
                Welcome to our website, where you will find a selection of the
                highest quality shoes, bags, and other fashion items. Our goal
                is to provide our customers with the best products at affordable
                prices, and we are dedicated to offering exceptional customer
                service and a hassle-free shopping experience. We have a wide
                variety of styles to choose from, including classic and
                contemporary designs, so you can find the perfect item to suit
                your personal style. Whether you are looking for a new pair of
                shoes to complete your outfit, or a stylish bag to carry all of
                your essentials, you will find everything you need on our site.
                Thank you for visiting and we hope you find what you are looking
                for.
              </Text>
            </Col>

            <Col span={24} style={{ marginTop: "50px" }}>
              <Row align={"middle"}>
                <Col span={12}>
                  <Image width={"80%"} src={TentangKamiImage} />
                </Col>

                <Col span={12}>
                  <Text>
                    At our website, we strive to provide our customers with a
                    seamless and enjoyable shopping experience. That's why we
                    have designed our checkout process to be fast, easy, and
                    secure. With just a few simple clicks, you can purchase the
                    items you love and have them delivered right to your door.
                    Our checkout process is designed with your convenience in
                    mind, and we have taken steps to ensure that your personal
                    and financial information is kept safe and secure at all
                    times. We value your business and are committed to making
                    your shopping experience as enjoyable as possible. So why
                    wait? Start shopping now and experience the ease and
                    convenience of our checkout process for yourself.
                  </Text>
                </Col>
              </Row>
            </Col>

            <Col span={24} style={{ marginTop: "50px", marginBottom: "50px" }}>
              <Text>
                Our customer service team is dedicated to making your shopping
                experience as easy and enjoyable as possible. Whether you have a
                question about a product, need assistance placing an order, or
                have a concern that needs to be addressed, we are here to help.
                Our friendly and knowledgeable representatives are available via
                email, phone, or live chat to answer your questions and provide
                support. We also offer comprehensive FAQs and detailed product
                descriptions to help you make informed purchasing decisions. At
                [website name], we are committed to providing excellent customer
                service every step of the way.
              </Text>
            </Col>
          </Row>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default TentangKami;
