import React, { Component } from "react";
import { Row, Col, Typography } from "antd";
import Button from "../../../../component/Button";
import { connect } from "react-redux";

import { withTranslation } from "react-i18next";
import ImgTop from "../../../../common/image/top-img.png";
import {
  SafetyCertificateOutlined,
  AuditOutlined,
  ApiOutlined,
  StarOutlined,
  CommentOutlined,
  HeartOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

class TopContent extends Component {
  constructor(props) {
    super(props);
  }

  renderContent = nuberRows => {
    const { t } = this.props;
    return (
      <Row className="container-ld--rows">
        <Col className="container-ld--col-padding" xs={24} sm={nuberRows}>
          <div className="container-ld--rows__col-two">
            <div className="container-ld--rows__col-two--item">
              <AuditOutlined className="container-ld--rows__col-two--item__icon" />
            </div>
            <div className="container-ld--rows__col-two--content">
              <Title className="container-ld--rows__col-two--content__title">
                {t("why_title_1")}
              </Title>
              <Paragraph className="container-ld--rows__col-two--content__description">
                {t("why_description_1")}
              </Paragraph>
            </div>
          </div>
        </Col>
        <Col className="container-ld--col-padding" xs={24} sm={nuberRows}>
          <div className="container-ld--rows__col-one">
            <div className="container-ld--rows__col-one--item">
              <StarOutlined className="container-ld--rows__col-one--item__icon" />
            </div>
            <div className="container-ld--rows__col-one--content">
              <Title className="container-ld--rows__col-one--content__title">
                {t("why_title_2")}
              </Title>
              <Paragraph className="container-ld--rows__col-one--content__description">
                {t("why_description_2")}
              </Paragraph>
            </div>
          </div>
        </Col>
        <Col className="container-ld--col-padding" xs={24} sm={nuberRows}>
          <div className="container-ld--rows__col-two">
            <div className="container-ld--rows__col-two--item">
              <HeartOutlined className="container-ld--rows__col-two--item__icon" />
            </div>
            <div className="container-ld--rows__col-two--content">
              <Title className="container-ld--rows__col-two--content__title">
                {t("why_title_3")}
              </Title>
              <Paragraph className="container-ld--rows__col-two--content__description">
                {t("why_description_3")}
              </Paragraph>
            </div>
          </div>
        </Col>
        <Col className="container-ld--col-padding" xs={24} sm={nuberRows}>
          <div className="container-ld--rows__col-two">
            <div className="container-ld--rows__col-two--item">
              <ApiOutlined className="container-ld--rows__col-two--item__icon" />
            </div>
            <div className="container-ld--rows__col-two--content">
              <Title className="container-ld--rows__col-two--content__title">
                {t("why_title_4")}
              </Title>
              <Paragraph className="container-ld--rows__col-two--content__description">
                {t("why_description_4")}
              </Paragraph>
            </div>
          </div>
        </Col>
        <Col className="container-ld--col-padding" xs={24} sm={nuberRows}>
          <div className="container-ld--rows__col-one">
            <div className="container-ld--rows__col-one--item">
              <SafetyCertificateOutlined className="container-ld--rows__col-one--item__icon" />
            </div>
            <div className="container-ld--rows__col-one--content">
              <Title className="container-ld--rows__col-one--content__title">
                {t("why_title_5")}
              </Title>
              <Paragraph className="container-ld--rows__col-one--content__description">
                {t("why_description_5")}
              </Paragraph>
            </div>
          </div>
        </Col>
        <Col className="container-ld--col-padding" xs={24} sm={nuberRows}>
          <div className="container-ld--rows__col-two">
            <div className="container-ld--rows__col-two--item">
              <CommentOutlined className="container-ld--rows__col-two--item__icon" />
            </div>
            <div className="container-ld--rows__col-two--content">
              <Title className="container-ld--rows__col-two--content__title">
                {t("why_title_6")}
              </Title>
              <Paragraph className="container-ld--rows__col-two--content__description">
                {t("why_description_6")}
              </Paragraph>
            </div>
          </div>
        </Col>
      </Row>
    );
  };

  genderContentRight = () => {
    return <img className="img-background--top" src={ImgTop} alt="img top" />;
  };

  render() {
    const { t } = this.props;
    return (
      <div>
        <Row className="container-ld" justify="center">
          <Col span={16}>
            <Title className="container-ld--title">{t("why_title")}</Title>
          </Col>
          <Col className="container-ld__content_center" span={16}>
            <div className="container-ld--body">{this.renderContent(8)}</div>
          </Col>
        </Row>
      </div>
    );
  }
}

const mstp = (state) => ({});
const mdtp = (dispatch) => ({});

export default connect(mstp, mdtp)(withTranslation()(TopContent));
