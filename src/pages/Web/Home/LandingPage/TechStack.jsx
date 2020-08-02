import React, { Component } from "react";
import { Row, Col, Tooltip } from "antd";
import { withTranslation } from "react-i18next";
import ImgWrapper from "../../../../common/image/wrapper-tech-stack-06-06-06.png";
import Html from "../../../../common/image/tech-stack/html.png";
import Sass from "../../../../common/image/tech-stack/sass.png";
import Jquery from "../../../../common/image/tech-stack/jquery-logo.png";
import Reactjs from "../../../../common/image/tech-stack/Reactlogo.png";
import AntDesgin from "../../../../common/image/tech-stack/ant_desgin.png";
import MeterialUI from "../../../../common/image/tech-stack/MeterialUi.png";
import Linux from "../../../../common/image/tech-stack/linux.png";
import Mysql from "../../../../common/image/tech-stack/mysql.png";
import Aws from "../../../../common/image/tech-stack/aws.jpg";
import Laravel from "../../../../common/image/tech-stack/laravel.jpg";
import Docker from "../../../../common/image/tech-stack/docker.jpeg";
import Jenkins from "../../../../common/image/tech-stack/Jenkins.png";

class TopContent extends Component {

  constructor(props) {
    super(props);
    const { t } = this.props;
    this.techStackFrontEnd = [
      {
        img: Html,
        title: t("tech-stack.title_hmtl"),
        description: "",
        label: t("tech-stack.html")
      }, {
        img: Sass,
        title: t("tech-stack.title_sass"),
        description: "",
        label: t("tech-stack.scss")
      }, {
        img: Jquery,
        title: t("tech-stack.title_jquery"),
        description: "",
        label: t("tech-stack.jquery")
      }, {
        img: Reactjs,
        title: t("tech-stack.title_reactjs"),
        description: "",
        label: t("tech-stack.react_js"),
      }, {
        img: AntDesgin,
        title: t("tech-stack.title_ant"),
        description: "",
        label: t("tech-stack.ant_design"),
      }, {
        img: MeterialUI,
        title: t("tech-stack.title_vue"),
        description: "",
        label: t("tech-stack.meterial_ui"),
      }
    ];
    this.techStackBackEnd = [
      {
        img: Linux,
        title: t("tech-stack.title_linux"),
        description: "",
        label: t("tech-stack.linux"),
      }, {
        img: Mysql,
        title: t("tech-stack.title_mysql"),
        description: "",
        label: t("tech-stack.mysql"),
      }, {
        img: Aws,
        title: t("tech-stack.title_aws"),
        description: "",
        label: t("tech-stack.aws"),
      }, {
        img: Laravel,
        title: t("tech-stack.title_laravel"),
        description: "",
        label: t("tech-stack.laravel"),
      }, {
        img: Docker,
        title: t("tech-stack.title_docker"),
        description: "",
        label: t("tech-stack.docker"),
      }, {
        img: Jenkins,
        title: t("tech-stack.title_jenkins"),
        description: "",
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
          xs={{ span: 24 }}
          sm={{ span: 8 }}
          key={index}
        >
          <div className="tech-stack--col-stack">
            <Tooltip title={value.label} color="#4961ea">
              <img className="tech-stack--col-stack__img" src={value.img} alt="tech-stack" />
            </Tooltip>
          </div>
          <div className="tech-stack--item-wrapper">
          <div className="tech-stack--item-title">{value.title}</div>
          <p className="tech-stack--item-description">{value.description}</p>
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
            <Col
              xs={{ span: 0 }}
              sm={{ span: 0 }}
              lg={{ span: 0 }}
              xl={{ span: 8 }}>
              <img
                className="tech-stack--col-image"
                src={ImgWrapper}
                alt="img top"
              />
            </Col>
            <Col
              className="tech-stack--wrapper"
              xs={{ span: 24 }}
              xl={{ span: 16 }}
            >
              <h4 className="tech-stack--title">{t("tech-stack.title_front_end")}</h4>
              <Row className="tech-stack--row">
                {this.renderTechStackFrontEnd(1)}
              </Row>
            </Col>
          </Row>
        </Col>
        <Col
          xs={{ span: 24 }}
          lg={{ span: 24 }}
        >
          <Row>
            <Col
              xs={{ span: 0 }}
              sm={{ span: 0 }}
              lg={{ span: 0 }}
              xl={{ span: 8 }}>
            </Col>
            <Col className="tech-stack--wrapper"
              xs={{ span: 24 }}
              xl={{ span: 16 }}>
              <h4 className="tech-stack--title">{t("tech-stack.title_back_end")}</h4>
              <Row className="tech-stack--row">
                {this.renderTechStackFrontEnd(0)}
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default withTranslation()(TopContent);
