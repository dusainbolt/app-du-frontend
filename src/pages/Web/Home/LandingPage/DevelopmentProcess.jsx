import React, { Component } from "react";
import { Row, Col, Tooltip, Timeline } from "antd";
import { withTranslation } from "react-i18next";
import {
  SyncOutlined,
} from "@ant-design/icons";
import plandingImg from "../../../../common/image/process/planding.png";
import desginImg from "../../../../common/image/process/Design.png";
import developmentImg from "../../../../common/image/process/development.png";
import launchImg from "../../../../common/image/process/launch.png";
import maintainImg from "../../../../common/image/process/maintaince.png";

class TopContent extends Component {

  constructor(props) {
    super(props);
    const { t } = this.props;
    this.techStackFrontEnd = [
      {
        label: t("tech-stack.html")
      }, {
        label: t("tech-stack.scss")
      }, {
        label: t("tech-stack.jquery")
      }, {
        label: t("tech-stack.react_js"),
      }, {
        label: t("tech-stack.ant_design"),
      }, {
        label: t("tech-stack.meterial_ui"),
      }
    ];
    this.techStackBackEnd = [
      {
        label: t("tech-stack.linux"),
      }, {
        label: t("tech-stack.mysql"),
      }, {
        label: t("tech-stack.aws"),
      }, {
        label: t("tech-stack.laravel"),
      }, {
        label: t("tech-stack.docker"),
      }, {
        label: t("tech-stack.jenkins"),
      }
    ];
  }

  renderTechStackFrontEnd = type => {
    let html = null;
    const data = type ? this.techStackFrontEnd : this.techStackBackEnd;
    html = data.map((value, index) => {
      return (
        <Col
          className="tech-stack--col-wrapper"
          xs={{ span: 8 }}
          sm={{ span: 4 }}
          lg={{ span: 8 }}
          xl={{ span: 4 }}
          key={index}
        >
          <div className="tech-stack--col-stack">
            <Tooltip title={value.label} color="#4961ea">
              <img className="tech-stack--col-stack__img" src={value.img} alt="tech-stack" />
            </Tooltip>
          </div>
        </Col>
      );
    });
    return html;
  }
  render() {
    const { t } = this.props;
    return (
      <Row>
        <div className="container-ld--title">
          {t("development_process.process_title")}
        </div>
        <Col
          xs={{ span: 24 }}
          lg={{ span: 24 }}
        >
          <Row>
            <Col span={24}>
              <Timeline className="ld-process" mode="alternate">
                <Timeline.Item dot={<SyncOutlined spin />}>
                  <div className="ld-process--item">
                    <img src={plandingImg} className="ld-process--icon-timeline" width="40" alt="image" />
                    <div className="ld-process--text">
                      <label>1.PLANNING</label>
                      <p>Description</p>
                    </div>
                  </div>
                </Timeline.Item>
                <Timeline.Item dot={<SyncOutlined spin />}>
                  <div className="ld-process--item-2">
                    <img src={desginImg} className="ld-process--icon-timeline rp-mobie" width="40" alt="image" />
                    <div className="ld-process--text">
                      <label>2.DESIGN</label>
                      <p>Description</p>
                    </div>
                    <img src={desginImg} className="ld-process--icon-timeline rp-web" width="40" alt="image" />
                  </div>
                </Timeline.Item>
                <Timeline.Item dot={<SyncOutlined spin />}>
                  <div className="ld-process--item-2">
                    <img src={developmentImg} className="ld-process--icon-timeline" width="40" alt="image" />
                    <div className="ld-process--text">
                      <label>3.DEVELOPMENT</label>
                      <p>Description</p>
                    </div>
                  </div>
                </Timeline.Item>
                <Timeline.Item dot={<SyncOutlined spin />}>
                  <div className="ld-process--item-2">
                    <img src={launchImg} className="ld-process--icon-timeline rp-mobie" width="40" alt="image" />
                    <div className="ld-process--text">
                      <label>4.LAUNCH</label>
                      <p>Description</p>
                    </div>
                    <img src={launchImg} className="ld-process--icon-timeline rp-web" width="40" alt="image" />
                  </div>
                </Timeline.Item>
                <Timeline.Item dot={<SyncOutlined spin />}>
                  <div className="ld-process--item">
                    <img src={maintainImg} className="ld-process--icon-timeline" width="40" alt="image" />
                    <div className="ld-process--text">
                      <label>5.MAINTENANCE</label>
                      <p>Description</p>
                    </div>
                  </div>
                </Timeline.Item>
              </Timeline>
            </Col>

          </Row>
        </Col>
      </Row>
    );
  }
}

export default withTranslation()(TopContent);
