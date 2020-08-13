import React from "react";
import { Steps, Button, message, Row, Col } from "antd";
import { useState } from "react";
import FadeIn from "react-fade-in";
import {
  SafetyCertificateOutlined,
  AuditOutlined,
  ApiOutlined,
  StarOutlined,
  CommentOutlined,
  HeartOutlined,
} from "@ant-design/icons";import { useTranslation } from "react-i18next";
import ImgTop4 from "../../../../common/image/img-top4.png";
import ImgTop3 from "../../../../common/image/img-top3.png";
import ImgTop2 from "../../../../common/image/img-top1.png";
import ImgTop1 from "../../../../common/image/img-top1.png";
const { Step } = Steps;

function DevelopmentProcess() {
  const [current, setCurrent] = useState(0);
  const { t } = useTranslation();
  const next = () => () => {
    setCurrent(current + 1);
  };

  const prev = () => () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: t("ld_process.title_1"),
      content: () => renderStepOne(),
    },
    {
      title: t("ld_process.title_2"),
      content: () => renderStepTwo(),
    },
    {
      title: t("ld_process.title_3"),
      content: () => renderStepOne(),
    },
    {
      title: t("ld_process.title_4"),
      content: () => renderStepOne(),
    },
    {
      title: t("ld_process.title_5"),
      content: () => renderStepOne(),
    },
  ];

  const renderStepOne = () => {
    return (
      <Row>
        <Col md={{ span: 24 }} lg={{ span: 14 }}>
          <img className="ld-step__img" src={ImgTop3} alt="img" />
        </Col>
        <Col md={{ span: 24 }} lg={{ span: 10 }}>
          <div className="ld-step__content-wrapper">
            <h2 className="ld-step__content-wrapper--title">1.PLANNING</h2>
            <label className="ld-step__content-wrapper--para"><SafetyCertificateOutlined className=""/>sdsdsdsds</label>
            <label className="ld-step__content-wrapper--para"><SafetyCertificateOutlined className=""/>sdsdsdsds</label>
            <label className="ld-step__content-wrapper--para"><SafetyCertificateOutlined className=""/>sdsdsdsds</label>
            <label className="ld-step__content-wrapper--para"><SafetyCertificateOutlined className=""/>sdsdsdsds</label>
            <label className="ld-step__content-wrapper--para"><SafetyCertificateOutlined className=""/>sdsdsdsds</label>
          </div>
        </Col>
      </Row>
    );
  };

  const renderStepTwo = () => {
    return (
      <Row>
        <Col md={{ span: 24 }} lg={{ span: 14 }}>
          <img className="ld-step__img" src={ImgTop2} alt="img" />
        </Col>
        <Col md={{ span: 24 }} lg={{ span: 10 }}>
          <div className="ld-step__content-wrapper">
            <h2 className="ld-step__content-wrapper--title">1.DESIGN</h2>
            <label>sdsdsd</label>
          </div>
        </Col>
      </Row>
    );
  };

  return (
    <Row className="ld-step">
      <div className="container-ld--title">{t("development_process.process_title")}</div>
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content()}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success("Processing complete!")}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={prev()}>
            Previous
          </Button>
        )}
      </div>
    </Row>
  );
}

export default DevelopmentProcess;
