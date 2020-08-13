import React from "react";
import { Steps, Button, message, Row, Col } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";

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
      content: () => renderStepOne(),
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
        <Col xs={{ span: 24 }} sm={{ span: 12 }}>
          Image
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }}>
          Text
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
