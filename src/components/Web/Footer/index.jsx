import React, { Component } from "react";

import { Layout, Row, Col } from "antd";

const { Footer } = Layout;

class commonFooter extends Component {
  constructor () {
    super();
  }

  render () {

    return (
      <Footer className="my-footer" style={{ textAlign: "center" }}>
        <Row gutter={[48, 48]}>
          <Col span={6}>
            CONTENT 1
          </Col>
          <Col span={6}>
            CONTENT 2
          </Col>
          <Col span={6}>
            CONTENT 3
          </Col>
          <Col span={6}>
            CONTENT 4
          </Col>
        </Row>
        <Row>
          <div className="my-footer__wrapper-copyright">
            <div className="my-footer__wrapper-copyright--content">Copyright* by Du Sainbolt 2020 
            </div>
          </div>
        </Row>
      </Footer>
    );
  }
}

export default commonFooter;