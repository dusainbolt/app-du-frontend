import React, { Component } from "react";
import { Row, Col, Tooltip, Timeline } from "antd";
import { withTranslation } from "react-i18next";
import {
  SafetyCertificateOutlined,
  SyncOutlined,
  ApiOutlined,
  StarOutlined,
  CommentOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import plandingImg from "../../../../common/image/process/planding.png";

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
          {t("landing_page.tech-stack-title")}
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
                    <SyncOutlined className="ld-process--icon-timeline" />
                    <div>
                      <label>TITLE</label>
                      <p>Description</p>
                    </div>
                  </div>
                </Timeline.Item>
                <Timeline.Item dot={<SyncOutlined spin />}>
                  <div className="ld-process--item-2">
                    <div>
                      <label>TITLE</label>
                      <p>Description</p>
                    </div>
                    <img src={plandingImg} className="ld-process--icon-timeline" width="40"  alt="image"/>
                  </div>
                </Timeline.Item>
                <Timeline.Item dot={<SyncOutlined spin />}>
                  <div className="ld-process--item-2">
                    <SyncOutlined className="ld-process--icon-timeline rp-mobie" />
                    <div>
                      <label>TITLE</label>
                      <p>Description</p>
                    </div>
                    <SyncOutlined className="ld-process--icon-timeline rp-web" />
                  </div>                </Timeline.Item>
                <Timeline.Item dot={<SyncOutlined spin/>}>Network problems being solved 2015-09-01</Timeline.Item>
                <Timeline.Item dot={<SyncOutlined spin/>}> Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item dot={<SyncOutlined spin/>}>
                  Technical testing 2015-09-01
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
