import React, { Component } from "react";
import { Row, Col, Card,Typography } from "antd";

import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import  ImgTop from "../../../common/image/top-img.png";

const { Title } = Typography;
const style = { background: "#0092ff", padding: "8px 0" };

class Home extends Component {
  render() {
    const { t } = this.props;
    return (
      <div>
            <Row>
      <Col span={12}>
      
       <Title level={4}>h2. An</Title>
      </Col>
      <Col span={12}>
        <img className="img-background-top" src={ImgTop} alt="img top" />
      </Col>
    </Row>
    <Row justify="space-around" align="middle">
      <Col span={4}>
      <Card bordered={false} style={{ width: "100%" }}>
      <p>Card content</p>
    </Card>
      </Col>
      <Col span={4}>
      col-4
      </Col>
      <Col span={4}>
       col-4
      </Col>
      <Col span={4}>
         col-4
      </Col>
    </Row>
      </div>
    );
  }
}

const mstp = (state) => ({});
const mdtp = (dispatch) => ({});

export default connect(mstp, mdtp)(withTranslation()(Home));
