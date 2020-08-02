import React, { Component } from "react";
import { Row, Col, Typography, Carousel, Skeleton } from "antd";
import Button from "../../../../components/Button";
import { withTranslation } from "react-i18next";
import ImgTop4 from "../../../../common/image/img-top4.png";
import ImgTop3 from "../../../../common/image/img-top3.png";
import ImgTop2 from "../../../../common/image/img-top2.png";
import ImgTop1 from "../../../../common/image/img-top1.png";



import CountDownTimer from "./CountDownTime";

const { Title, Paragraph } = Typography;

class TopContent extends Component {
  genderContentLeft = () => {
    const { t } = this.props;
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
            className="login__form--button white-color title-top-right--button"
            buttonTitle={t("landing_page.button_subscribe_top")}
          />
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <Row className="top-content">
          {/* <img src={ImgTop} alt="img-top"/> */}
          <Col
            xs={{ span: 24, order: 2 }}
            lg={{ span: 14, order: 1 }}
            xl={{ span: 12, order: 1 }}
          >
            {/* <Skeleton paragraph={{ rows: 6 }} active> */}
            {this.genderContentLeft()}
            {/* </Skeleton> */}
          </Col>
          <Col
            xs={{ span: 24, order: 1 }}
            lg={{ span: 10, order: 2 }}
            xl={{ span: 12, order: 2 }}
          >
            {/* <Skeleton.Button active size="large" shape={"square"}> */}

            <Carousel dots={false} speed={1500} draggable autoplay effect="fade">
              <Col span={24}>
                <img
                  className="img-background--top"
                  src={ImgTop1}
                  alt="img top"
                />
              </Col>
              <Col span={24}>
                <img
                  className="img-background--top"
                  src={ImgTop2}
                  alt="img top"
                />
              </Col>
              <Col span={24}>
                <img
                  className="img-background--top"
                  src={ImgTop3}
                  alt="img top"
                />
              </Col>
              <Col span={24}>
                <img
                  className="img-background--top"
                  src={ImgTop4}
                  alt="img top"
                />
              </Col>
            </Carousel>
            {/* </Skeleton.Button> */}
          </Col>
        </Row>
      </div>
    );
  }
}

export default withTranslation()(TopContent);
