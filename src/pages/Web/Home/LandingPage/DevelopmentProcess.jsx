import React from "react";
import { Row, Col, Timeline } from "antd";
import { useTranslation } from "react-i18next";
import { SyncOutlined } from "@ant-design/icons";
import LazyLoading from "../../../../components/LazyLoadingImg";
import { dataProcess } from "../../../../common/js/configLandingPage";

function DevelopmentProcess() {
  const { t } = useTranslation();

  const renderContentProcess = () => {
    let checkEven = false;
    return dataProcess.map((value, index) => {
      checkEven = index % 2 === 0 ? true : false;
      return (
        <Timeline.Item key={index} dot={<SyncOutlined spin />}>
          <div className="ld-process--item-2">
            <LazyLoading
              src={value.img}
              className={`ld-process--icon-timeline ${checkEven ? "" : "rp-mobie"}`}
              alt="image"
            />
            <div className="ld-process--text">
              <label>{value.title}</label>
              <p>{value.description}</p>
            </div>
            {!checkEven && (
              <LazyLoading
                src={value.img}
                className="ld-process--icon-timeline rp-web"
                alt="image"
              />
            )}
          </div>
        </Timeline.Item>
      );
    });
  };

  return (
    <Row>
      <div className="container-ld--title">{t("development_process.process_title")}</div>
      <Col className="container-ld--bg-right" xs={{ span: 24 }} lg={{ span: 24 }}>
        <Row className="container-ld--bg-left">
          <Col span={24}>
            <Timeline className="ld-process" mode="alternate">
              {renderContentProcess()}
            </Timeline>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default DevelopmentProcess;
