import React, { Component } from "react";
import { Row, Col, Typography } from "antd";
import Button from "../../../../component/Button";
import { connect } from "react-redux";

import { withTranslation } from "react-i18next";
import ImgTop from "../../../../common/image/top-img.png";
import {
  MenuOutlined,
  UserOutlined,
  MessageFilled,
  LogoutOutlined,
  MailFilled,
  InstagramFilled,
  FacebookFilled,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

class TopContent extends Component {
  genderContentLeft = (nuberRows, objectGuitar = []) => {
    return (
      <Row gutter={objectGuitar} className="container-ld--rows">
        <Col span={nuberRows}>
          <div className="container-ld--rows__col-one">
            <div className="container-ld--rows__col-one--item">
              <InstagramFilled className="container-ld--rows__col-one--item__icon" />
            </div>
          </div>
        </Col>
        <Col span={nuberRows}>
          <div className="container-ld--rows__col-two">col-6</div>
        </Col>
        <Col span={nuberRows}>
          <div className="container-ld--rows__col-one">col-6</div>
        </Col>
        <Col span={nuberRows}>
          <div className="container-ld--rows__col-two">col-6</div>
        </Col>
      </Row>
    );
  };

  genderContentRight = () => {
    return <img className="img-background--top" src={ImgTop} alt="img top" />;
  };

  render() {
    const { t } = this.props;
    return (
      <div>
        <Row className="container-ld">
          <Col span={24}>
            <Title className="container-ld--title">Why choose us</Title>
          </Col>
          <Col className="rp-web" span={18} offset={3}>
            {this.genderContentLeft(6, [48, 16])}
          </Col>
          <Col className="rp-mobie" span={18} offset={3}>
            {this.genderContentLeft(24)}
          </Col>
        </Row>
      </div>
    );
  }
}

const mstp = (state) => ({});
const mdtp = (dispatch) => ({});

export default connect(mstp, mdtp)(withTranslation()(TopContent));
