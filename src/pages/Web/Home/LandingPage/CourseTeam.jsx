import React, { Component } from "react";
import { Row, Col, Typography } from "antd";
import Button from "../../../../component/Button";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import ImgTop from "../../../../common/image/top-img.png";
import CountDownTimer from "./CountDownTime";
import { Carousel } from "antd";

import {
  MenuOutlined,
  UserOutlined,
  MessageFilled,
  MailFilled,
  InstagramFilled,
  FacebookFilled,
  ContainerFilled,
  EyeFilled
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

class TopContent extends Component {
  genderContentLeft = () => {
    return (
      <div className="title">
                 <Col className="container-ld--rows__col-course" span={12}>
            {this.genderContentRight()}
          </Col>
          <Col className="container-ld--rows__col-course" span={12}>
            {this.genderContentRight()}
          </Col>
      </div>
    );
  };

  genderContentRight = () => {
    return <img className="img-background--top" src={ImgTop} alt="img top" />;
  };

  render() {
    const { t } = this.props;
    return (
      <div>
        <Carousel effect="fade">
                     <Col span={24}>
            {this.genderContentLeft()}
          </Col>
          <Col span={24}>
            {this.genderContentLeft()}
          </Col>
          <Col span={24}>
            {this.genderContentLeft()}
          </Col>
          {/* <Col className="rp-web" span={12}>
            {this.genderContentLeft()}
          </Col>
          <Col className="rp-web" span={12}>
            {this.genderContentLeft()}
          </Col>
          <Col className="rp-web" span={12}>
            {this.genderContentLeft()}
          </Col> */}
          {/* <Col className="rp-web" span={12}>
            {this.genderContentRight()}
          </Col> */}
          {/* <Col className="rp-mobie" span={24}>
            {this.genderContentRight()}
          </Col>
          <Col className="rp-mobie" span={24}>
            {this.genderContentLeft()}
          </Col> */}
          </Carousel>
      </div>
    );
  }
}

const mstp = (state) => ({});
const mdtp = (dispatch) => ({});

export default connect(mstp, mdtp)(withTranslation()(TopContent));
