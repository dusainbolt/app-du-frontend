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
  EyeFilled,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

class TopContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "Du Sainbolt",
        url_avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRH0jj8tNxcDI8aKOESEgrPGna-RMgUvNCs8w&usqp=CAU",
      },
    };
  }

  renderContentCourse = () => {
    return (
      <div>
        <div className="rp-web">
          <Col className="container-ld--rows__col-course" span={12}>
            {this.genderContentLeft()}
          </Col>
          <Col className="container-ld--rows__col-course" span={12}>
            {this.genderContentRight([32, 5])}
          </Col>
        </div>
        <div className="rp-mobie">
          <Col className="container-ld--rows__col-course" span={24}>
            {this.genderContentLeft()}
          </Col>
          <Col className="container-ld--rows__col-course" span={24}>
            {this.genderContentRight([8, 5])}
          </Col>
        </div>
      </div>
    );
  };

  genderContentLeft = () => {
    return (
      <div className="container-ld--rows__col-course--content-left">
        <div>sdsd</div>
      </div>
    );
  };
  genderContentRight = (objectGuitar = []) => {
    return (
      <div className="container-ld--rows__col-course--content-right">
        <Row gutter={objectGuitar}>
          <Col span={12}>
            <div className="container-ld--rows__col-course--content-right__wrapper">
              <div className="container-ld--rows__col-course--content-right__avatar">
                <img src={this.state.user.url_avatar} alt="avatar" />
              </div>
              <div className="container-ld--rows__col-course--content-right__name">
                {this.state.user.name}
              </div>
              <div className="container-ld--rows__col-course--content-right__icon-social">
                <FacebookFilled className="container-ld--rows__col-course--content-right__icon-social--item"/>
                <InstagramFilled className="container-ld--rows__col-course--content-right__icon-social--item"/>
                <MailFilled className="container-ld--rows__col-course--content-right__icon-social--item"/>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="container-ld--rows__col-course--content-right__wrapper">
              sdsdsd
            </div>
          </Col>
        </Row>
      </div>
    );
  };

  render() {
    const { t } = this.props;
    return (
      <div className="container-ld--rows__course">
        <Carousel effect="fade">
          <Col span={24}>{this.renderContentCourse()}</Col>
          <Col span={24}>{this.renderContentCourse()}</Col>
          <Col span={24}>{this.renderContentCourse()}</Col>
        </Carousel>
      </div>
    );
  }
}

const mstp = (state) => ({});
const mdtp = (dispatch) => ({});

export default connect(mstp, mdtp)(withTranslation()(TopContent));
