import React from "react";
import { Row, Col, Typography, Carousel } from "antd";
import Button from "../Button";
import LazyloadImg from "../LazyLoadingImg";
import { useTranslation } from "react-i18next";
import { DATA_SLICK_IMG_TOP } from "../../common/configLandingPage";

import CountDownTimer from "../LandingCountDown";

const { Title, Paragraph } = Typography;

function TopContent() {
  const { t } = useTranslation();

  const genderContentLeft = () => {
    return (
      <div className="title-top-right">
        <Title className="title-top-right__title" level={1}>
          {t("landing_page.title_top")}
        </Title>
        <Title className="title-top-right__title-wellcome" level={4}>
          {t("landing_page.hello")}
        </Title>
        <Paragraph className="title-top-right__title-description">
          {t("landing_page.description_top")}
        </Paragraph>
        <CountDownTimer />
        <div className="title-top-right__icon-group">
          <Button
            type="submit"
            className="title-top-right--button btn-primary"
            title={t("landing_page.button_subscribe_top")}
          />
        </div>
      </div>
    );
  };

  const renderSlick = () => {
    return DATA_SLICK_IMG_TOP.map((value, index) => {
      return (
        <Col span={24} key={index}>
          <LazyloadImg className="img-background--top" src={value} alt="img top" height={200} />
        </Col>
      );
    });
  };

  return (
    <div>
      <div className="top-content--bg"></div>
      <Row className="top-content">
        {/* <img src={ImgTop} alt="img-top"/> */}
        <Col xs={{ span: 24, order: 2 }} lg={{ span: 14, order: 1 }} xl={{ span: 12, order: 1 }}>
          {/* <Skeleton paragraph={{ rows: 6 }} active> */}
          {genderContentLeft()}
          {/* </Skeleton> */}
        </Col>
        <Col xs={{ span: 24, order: 1 }} lg={{ span: 10, order: 2 }} xl={{ span: 12, order: 2 }}>
          {/* <Skeleton.Button active size="large" shape={"square"}> */}
          <Carousel dots={false} speed={1500} draggable autoplay effect="fade">
            {renderSlick()}
          </Carousel>
          {/* </Skeleton.Button> */}
        </Col>
      </Row>
    </div>
  );
}

export default TopContent;
