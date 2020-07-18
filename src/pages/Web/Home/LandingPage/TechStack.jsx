import React, { Component } from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import ImgTop from "../../../../common/image/top-img.png";
import ImgTop2 from "../../../../common/image/bg-loginIT.jpg";

class TopContent extends Component {

  constructor(props) {
    super(props);
    this.techStackFrontEnd = [
      ImgTop, ImgTop, ImgTop, ImgTop, ImgTop, ImgTop
    ];
    this.techStackBackEnd = [
      ImgTop2, ImgTop2, ImgTop2, ImgTop2, ImgTop2, ImgTop2
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
            xs={{ span: 24, order: 2 }}
            lg={{ span: 12, order: 1 }}
          >
            <Row>
              <Col span={24}>
                <img
                  className="tech-stack--col-image"
                  src={ImgTop}
                  alt="img top"
                />
              </Col>  
              <Col span={24}>
                <h4 className="tech-stack--title">BACK-END TECH STACK</h4>
              </Col>
              <Col className="tech-stack--wrapper" span={24}>
                <Row className="tech-stack--row">
                  {this.renderTechStackFrontEnd(1)}
                </Row>
              </Col>
            </Row>
          </Col>
          <Col
            xs={{ span: 24, order: 1 }}
            lg={{ span: 12, order: 2 }}
          >
            <Row>
              <Col span={24}>
                <img
                  className="tech-stack--col-image"
                  src={ImgTop}
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
