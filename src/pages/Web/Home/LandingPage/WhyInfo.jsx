import React, { Component } from "react";
import { Row, Col, Typography, Skeleton } from "antd";

import { withTranslation } from "react-i18next";
import {
  SafetyCertificateOutlined,
  AuditOutlined,
  ApiOutlined,
  StarOutlined,
  CommentOutlined,
  HeartOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

class WhyInfo extends Component {
  constructor(props) {
    super(props);
  }

  renderInfo = nuberRows => {
    let classCol = null;
    return this.getDataInfo().map((value, index) => {
      classCol = !((index + 2) % 3) ? "col-one" : "col-two";
      return (
        <Col key={index} className="container-ld--col-padding" xs={24} sm={nuberRows}>
          <div className={`container-ld--rows__${classCol}`}>
            <div className={`container-ld--rows__${classCol}--item`}>
              <value.icon className={`container-ld--rows__${classCol}--item__icon`} />
            </div>
            <div className={`container-ld--rows__${classCol}--content`}>
              <Title className={`container-ld--rows__${classCol}--content__title`}>
                {value.title}
              </Title>
              <Paragraph className={`container-ld--rows__${classCol}--content__description`}>
                {value.description}
              </Paragraph>
            </div>
          </div>
        </Col>
      );
    });
  }

  getDataInfo = () => {
    const { t } = this.props;
    return [
      {
        title: t("landing_page.why_title_1"),
        description: t("landing_page.why_description_1"),
        icon: AuditOutlined,
      },
      {
        title: t("landing_page.why_title_2"),
        description: t("landing_page.why_description_2"),
        icon: StarOutlined,
      },
      {
        title: t("landing_page.why_title_3"),
        description: t("landing_page.why_description_3"),
        icon: HeartOutlined,
      },
      {
        title: t("landing_page.why_title_4"),
        description: t("landing_page.why_description_4"),
        icon: ApiOutlined,
      },
      {
        title: t("landing_page.why_title_5"),
        description: t("landing_page.why_description_5"),
        icon: SafetyCertificateOutlined,
      },
      {
        title: t("landing_page.why_title_6"),
        description: t("landing_page.why_description_6"),
        icon: CommentOutlined,
      }
    ];
  }

  renderContent = nuberRows => {
    return (
      <Row className="container-ld--rows">
        {this.renderInfo(nuberRows)}
      </Row>
    );
  };

  render() {
    const { t } = this.props;
    return (
      <div>
        <Row className="container-ld" justify="center">
          <Col span={24}>
            <Title className="container-ld--title">
              {t("landing_page.why_title")}
            </Title>
            <div className="container-ld--title-description">
              {t("landing_page.title_description")}
            </div>
          </Col>
          <Col className="container-ld__content_center" span={24}>
            <div className="container-ld--body">{this.renderContent(8)}</div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withTranslation()(WhyInfo);
