import React, { useState } from "react";
import { message, Row, Col } from "antd";
import { DATA_STEP } from "../../common/configLandingPage";
import Lazyload from "../LazyLoadingImg";
import { useTranslation } from "react-i18next";
import ButtonCommon from "../Button";


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
      content: () => renderStepOne(DATA_STEP[0], [1, 2]),
    },
    {
      content: () => renderStepOne(DATA_STEP[1], [2, 1]),
    },
    {
      content: () => renderStepOne(DATA_STEP[2], [1, 2]),
    },
    {
      content: () => renderStepOne(DATA_STEP[3], [2, 1]),
    },
    {
      content: () => renderStepOne(DATA_STEP[4], [1, 2]),
    },
  ];

  const renderWrapperStep = () => {
    return steps.map((item, index) => {
      return index === current ? <div key={index} className="steps-content">{item.content()}</div> : "";
    });
  };

  const renderStepOne = (data, order) => {
    return (
      <Row>
        <Col md={{ span: 24, order: 1 }} lg={{ span: 14, order: order[0] }}>
          <Lazyload className="ld-step__img" src={data.img} alt="image" />
        </Col>
        <Col
          className="ld-step__col-content"
          md={{ span: 24, order: 2 }}
          lg={{ span: 10, order: order[1] }}
        >
          <div className="ld-step__content-wrapper">
            <h2 className="ld-step__content-wrapper--title">{t(data.title)}</h2>
            {renderContentStep(data)}
          </div>
        </Col>
      </Row>
    );
  };

  const renderContentStep = data => {
    const listContent = t(data.content).split(",");
    return listContent.map((value, index) => {
      const Icon = data.icon[index];
      return (
        <label key={value} className="ld-step__content-wrapper--para">
          <Icon /> {t(value)}
        </label>
      );
    });
  };

  return (
    <Row className="ld-step">
      <div className="container-ld--title">{t("development_process.process_title")}</div>
      {renderWrapperStep()}
      <div className="steps-action">
        {current < steps.length - 1 && (
          <ButtonCommon
            className="btn-primary"
            type="primary"
            onClick={next()}
            title={`${t("ld_process.step")} ${current + 2}`}
          />
        )}
        {current === steps.length - 1 && (
          <ButtonCommon
            className="btn-green"
            type="primary"
            onClick={() => message.success("Processing complete!")}
            title={t("ld_process.done")}
          />
        )}
        {current > 0 && (
          <ButtonCommon
            className="btn-outline-primary"
            title={t("ld_process.previous")}
            style={{ margin: "0 8px" }}
            onClick={prev()}
          />
        )}
      </div>
    </Row>
  );
}

export default DevelopmentProcess;
