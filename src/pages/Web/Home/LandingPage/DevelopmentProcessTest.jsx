import React from "react";
import { Steps, message, Row, Col } from "antd";
import { useState } from "react";
import {
  PieChartOutlined,
  BulbOutlined,
  RocketOutlined,
  CommentOutlined,
  BorderOuterOutlined,
  BugOutlined,
  CheckOutlined,
  LockOutlined,
  AppstoreAddOutlined,
  PicLeftOutlined,
  RiseOutlined,
  BarChartOutlined,
  ToolOutlined,
  FileDoneOutlined,
  SecurityScanOutlined,
} from "@ant-design/icons";
import Lazyload from "../../../../components/LazyLoadingImg";
import { useTranslation } from "react-i18next";
import ButtonCommon from "../../../../components/Button";
import ImgTop3 from "../../../../common/image/img-top3.png";

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
      icon: [CommentOutlined, BulbOutlined, PieChartOutlined, AppstoreAddOutlined],
    },
    {
      title: t("ld_process.title_2"),
      img: ImgTop3,
      content: t("ld_process.des_2"),
      icon: [BorderOuterOutlined, PicLeftOutlined, CheckOutlined],
    },
    {
      title: t("ld_process.title_3"),
      img: ImgTop3,
      content: t("ld_process.des_3"),
      icon: [CommentOutlined, BulbOutlined, PieChartOutlined, AppstoreAddOutlined],
    },
    {
      title: t("ld_process.title_4"),
      img: ImgTop3,
      content: t("ld_process.des_4"),
      icon: [RiseOutlined, SecurityScanOutlined, BugOutlined, FileDoneOutlined],
    },
    {
      title: t("ld_process.title_5"),
      img: ImgTop3,
      content: t("ld_process.des_5"),
      icon: [LockOutlined, BarChartOutlined, ToolOutlined, RocketOutlined],
    },
  ];

  const steps = [
    {
      content: () => renderStepOne(dataStep[0], [1, 2]),
    },
    {
      content: () => renderStepOne(dataStep[1], [2, 1]),
    },
    {
      content: () => renderStepOne(dataStep[2], [1, 2]),
    },
    {
      content: () => renderStepOne(dataStep[3], [2, 1]),
    },
    {
      content: () => renderStepOne(dataStep[4], [1, 2]),
    },
  ];

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
