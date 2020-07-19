import React, { Component } from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import ImgFrontEnd from "../../../../common/image/font-end.png";
import ImgBackEnd from "../../../../common/image/back-end.png";
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
    this.techStackFrontEnd = [
      Html, Sass, Jquery, Reactjs, AntDesgin, MeterialUI
    ];
    this.techStackBackEnd = [
      Linux, Mysql, Aws, Laravel, Docker, Jenkins
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
              <img className="tech-stack--col-stack__img"  src={value} alt="tech-stack"/>
            </div>
          </Col>
        );
      });
      return html;
    }
    
    render() {
      
      return (
        <Row>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 12 }}
          >
            <Row>
              <Col span={24}>
                <img
                  className="tech-stack--col-image"
                  src={ImgFrontEnd}
                  alt="img top"
                />
              </Col>  
              <Col span={24}>
                <h4 className="tech-stack--title">FRONT-END TECH STACK</h4>
              </Col>
              <Col className="tech-stack--wrapper" span={24}>
                <Row className="tech-stack--row">
                  {this.renderTechStackFrontEnd(1)}
                </Row>
              </Col>
            </Row>
          </Col>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 12 }}
          >
            <Row>
              <Col span={24}>
                <img
                  className="tech-stack--col-image"
                  src={ImgBackEnd}
                  alt="img top"
                />
              </Col>  
              <Col span={24}>
                <h4 className="tech-stack--title">BACK-END TECH STACK</h4>
              </Col>
              <Col className="tech-stack--wrapper" span={24}>
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
