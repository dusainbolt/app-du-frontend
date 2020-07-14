import React, { Component } from "react";
import { Row, Col, Typography, Carousel } from "antd";
import Button from "../../../../component/Button";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import ImgTop from "../../../../common/image/top-img.png";
import ImgTop2 from "../../../../common/image/bg-loginIT.jpg";

import CountDownTimer from "./CountDownTime";
import { MailFilled, InstagramFilled, FacebookFilled } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

class TopContent extends Component {
  genderContentLeft = (t) => {
    return (
      <div className="title-top-right">
        <Title className="title-top-right__title" level={1}>
          PROGRAMMING
        </Title>
        <Title className="title-top-right__title-wellcome" level={4}>
          {t("hello")}
        </Title>

        <Paragraph className="title-top-right__title-description">
          It's been a long day without you, my friend And I'll tell you all
          about it when I see you again We've come a long way from where we
          began Oh I'll tell you all about it when I see you again When I see
          you again. We have started:
        </Paragraph>
        <CountDownTimer />
        <div className="title-top-right__icon-group">
          <a href={"http://facebook.com"} rel="noreferrer" target="_blank">
            <FacebookFilled className="title-top-right__icon-group--item" />
          </a>
          <InstagramFilled className="title-top-right__icon-group--item" />
          <MailFilled className="title-top-right__icon-group--item" />
        </div>
        <div className="title-top-right__icon-group">
          <Button
            type="submit"
            className="login__form--button white-color title-top-right--button"
            buttonTitle="GET STARTED"
          />
        </div>
      </div>
    );
  };


  render() {
    const { t } = this.props;
    console.log(this.Carousel)
    return (
      <div>
        <Row className="top-content">
          <Col
            xs={{ span: 24, order: 2 }}
            lg={{ span: 14, order: 1 }}
            xl={{ span: 12, order: 1 }}
          >
            {this.genderContentLeft(t)}
          </Col>
          <Col
            xs={{ span: 24, order: 1 }}
            lg={{ span: 10, order: 2 }}
            xl={{ span: 12, order: 2 }}
          >
                    <Carousel dots={false} speed={1500} autoplay effect="fade">
          <Col span={24}>
          <img className="img-background--top" src={ImgTop} alt="img top" />
            </Col>
          <Col span={24}>
          <img className="img-background--top" src={ImgTop2} alt="img top" />
          </Col>
          <Col span={24}>
          <img className="img-background--top" src={ImgTop} alt="img top" />
          </Col>
        </Carousel>
          </Col>
        </Row>
      </div>
    );
  }
}

const mstp = (state) => ({});
const mdtp = (dispatch) => ({});

export default connect(mstp, mdtp)(withTranslation()(TopContent));
