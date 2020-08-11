import React from "react";
import { Row, Col, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { DataWhyInfo } from "../../../../common/js/configLandingPage";

const { Title, Paragraph } = Typography;

function WhyInfo() {
  const { t } = useTranslation();

  const renderInfo = nuberRows => {
    let classCol = null;
    return DataWhyInfo.map((value, index) => {
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
  };

  const renderContent = nuberRows => {
    return <Row className="container-ld--rows">{renderInfo(nuberRows)}</Row>;
  };

  return (
    <div>
      <Row className="container-ld" justify="center">
        <Col span={24}>
          <Title className="container-ld--title">{t("landing_page.why_title")}</Title>
          <div className="container-ld--title-description">
            {t("landing_page.title_description")}
          </div>
        </Col>
        <Col className="container-ld__content_center" span={24}>
          <div className="container-ld--body">{renderContent(8)}</div>
        </Col>
      </Row>
    </div>
  );
}

export default WhyInfo;
