import React from "react";
import { Steps, Button, message, Row, Col } from "antd";
import { useState } from "react";
import {
  SafetyCertificateOutlined,
  AuditOutlined,
  ApiOutlined,
  StarOutlined,
  CommentOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import Lazyload from "../../../../components/LazyLoadingImg";
import { useTranslation } from "react-i18next";
import ImgTop3 from "../../../../common/image/img-top3.png";
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

  const dataStep = [
    {
      title: t("ld_process.title_1"),
      img: ImgTop3,
      content: t("ld_process.des_1"),
      icon: [CommentOutlined, ApiOutlined, HeartOutlined, StarOutlined],
    },
    {
      title: t("ld_process.title_2"),
    },
    {
      title: t("ld_process.title_3"),
    },
    {
      title: t("ld_process.title_4"),
    },
    {
      title: t("ld_process.title_5"),
    },
  ];

  const steps = [
    {
      content: () => renderStepOne(dataStep[0], [1, 2]),
    },
    {
      content: () => renderStepOne(dataStep[0], [2, 1]),
    },
    {
      content: () => renderStepOne(dataStep[0], [1, 2]),
    },
    {
      content: () => renderStepOne(dataStep[0], [2, 1]),
    },
    {
      content: () => renderStepOne(dataStep[0], [1, 2]),
    },
  ];

  const renderStepOne = (data, order) => {
    return (
      <Row>
        <Col md={{ span: 24, order: 1 }} lg={{ span: 14, order: order[0] }}>
          <Lazyload className="ld-step__img" src={data.img} alt="image" />
        </Col>
        <Col md={{ span: 24, order: 2 }} lg={{ span: 10, order: order[1] }}>
          <div className="ld-step__content-wrapper">
            <h2 className="ld-step__content-wrapper--title">{data.title}</h2>
            {renderContentStep(data)}
          </div>
        </Col>
      </Row>
    );
  };

  const renderContentStep = data => {
    const listContent = data.content.split(",");
    return listContent.map((value, index) => {
      const Icon = data.icon[index];
      return (
        <label key={value} className="ld-step__content-wrapper--para">
          <Icon /> {value}
        </label>
      );
    });
  };

  return (
    <Row className="ld-step">
      <div className="container-ld--title">{t("development_process.process_title")}</div>
      <div className="steps-content">{steps[current].content()}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button className="btn-next" type="primary" onClick={next()}>
            {`${t("ld_process.step")} ${current + 2}`}
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            className="btn-done"
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            {t("ld_process.done")}
          </Button>
        )}
        {current > 0 && (
          <Button className="btn-previous" style={{ margin: "0 8px" }} onClick={prev()}>
            {t("ld_process.previous")}
          </Button>
        )}
      </div>
    </Row>
  );
}

export default DevelopmentProcess;
