import React, { Component } from "react";
import { Row, Col, Typography } from "antd";
import Button from "../../../../component/Button";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import ImgTop from "../../../../common/image/top-img.png";
import CountDownTimer from "./CountDownTime";
import { Carousel, Timeline } from "antd";

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
      <Row>
        <Col className="team-carouse" lg={12} xs={24}>
          <div className="team-carouse__content">
            <label className="team-carouse__content--title">Chief Executive Officer</label>
            <p className="team-carouse__content--description">
              Chief Executive Officer Chief Executive Officer Chief Executive
              Officer Chief Executive Officer Chief Executive Officer
            </p>
          </div>
        </Col>
        <Col lg={12} xs={24}>
          asdadsa{" "}
        </Col>
      </Row>
    );
  };

  genderContentLeft = () => {
    return <div className="container-ld--rows__col-course--content-left"></div>;
  };
  genderContentRight = (objectGuitar = []) => {
    return (
      <Row gutter={objectGuitar}>
        <Col span={24}>
          <div className="container-ld--rows__col-course--content-right__wrapper">
            <Row>
              <Col lg={12} xs={24}>
                <div className="container-ld--rows__col-course--content-right__avatar">
                  <img src={this.state.user.url_avatar} alt="avatar" />
                </div>
                <div className="container-ld--rows__col-course--content-right__name">
                  {this.state.user.name}
                </div>
                <div className="container-ld--rows__col-course--content-right__icon-social">
                  <FacebookFilled className="container-ld--rows__col-course--content-right__icon-social--item" />
                  <InstagramFilled className="container-ld--rows__col-course--content-right__icon-social--item" />
                  <MailFilled className="container-ld--rows__col-course--content-right__icon-social--item" />
                </div>

                <div className="container-ld--rows__col-course--content-right__description">
                  Chief Executive Officer Chief Executive Officer Chief
                  Executive Officer Chief Executive Officer Chief Executive
                  Offisssssss sssssssssss max 155 character
                </div>
              </Col>
              <Col lg={12} xs={24}>
                asdsad
              </Col>
            </Row>
          </div>
        </Col>
        {/* <Col span={12}>
            <div className="container-ld--rows__col-course--content-right__wrapper">
              <div className="container-ld--rows__col-course--content-right__timeline-detail">
              <Timeline>
                <Timeline.Item>
                  <label className="container-ld--rows__col-course--content-right__timeline-detail--label"><UserOutlined /> Birthday: </label>18-11-1999
                </Timeline.Item>
                <Timeline.Item>
                <label className="container-ld--rows__col-course--content-right__timeline-detail--label"><UserOutlined /> Height & Weight: </label>175cm, 74kg
                </Timeline.Item>
                <Timeline.Item>
                <label className="container-ld--rows__col-course--content-right__timeline-detail--label"><UserOutlined /> University
: </label>Học viện kỹ thuật mật mã
                </Timeline.Item>
                <Timeline.Item>
                <label className="container-ld--rows__col-course--content-right__timeline-detail--label"><UserOutlined /> Date Joined: </label>17-7-2020
                </Timeline.Item>
                <Timeline.Item>
                <label className="container-ld--rows__col-course--content-right__timeline-detail--label"><UserOutlined /> Name: </label>Create a services site 2015-09-01
                </Timeline.Item>
              </Timeline>
              </div>
              <div className="container-ld--rows__col-course--content-right__maxim-wrapper">
              <em>" Cuộc đời này ngắn lắm, cứ dám nghĩ to, ước lớn, không ai đánh thuế giấc mơ của bạn cả ..."</em>
              </div>
            </div>
          </Col> */}
      </Row>
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
