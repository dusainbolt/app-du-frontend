import React, { Component } from "react";
import { Row, Col, Timeline } from "antd";
import { withTranslation } from "react-i18next";
import { SyncOutlined } from "@ant-design/icons";
import plandingImg from "../../../../common/image/process/planding.png";
import desginImg from "../../../../common/image/process/Design.png";
import developmentImg from "../../../../common/image/process/development.png";
import launchImg from "../../../../common/image/process/launch.png";
import maintainImg from "../../../../common/image/process/maintaince.png";
import LazyLoading from "../../../../components/LazyLoadingImg";
class TopContent extends Component {
  constructor(props) {
    super(props);
    const { t } = props;
    this.dataProcess = [
      {
        img: plandingImg,
        title: t("ld_process.title_1"),
        description: t("ld_process.des_1"),
      },
      {
        img: desginImg,
        title: t("ld_process.title_2"),
        description: t("ld_process.des_2"),
      },
      {
        img: developmentImg,
        title: t("ld_process.title_3"),
        description: t("ld_process.des_3"),
      },
      {
        img: launchImg,
        title: t("ld_process.title_4"),
        description: t("ld_process.des_4"),
      },
      {
        img: maintainImg,
        title: t("ld_process.title_5"),
        description: t("ld_process.des_5"),
      },
    ];
  }

  renderContentProcess = () => {
    let checkEven = false;
    return this.dataProcess.map((value, index) => {
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

  render() {
    const { t } = this.props;
    return (
      <Row>
        <div className="container-ld--title">{t("development_process.process_title")}</div>
        <Col className="container-ld--bg-right" xs={{ span: 24 }} lg={{ span: 24 }}>
          <Row className="container-ld--bg-left">
            <Col span={24}>
              <Timeline className="ld-process" mode="alternate">
                {this.renderContentProcess()}
              </Timeline>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default withTranslation()(TopContent);
