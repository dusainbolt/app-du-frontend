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
  MailOutlined,
  InstagramFilled,
  FacebookFilled,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

class TopContent extends Component {
  genderContentLeft = () => {
    return (
      <div className="title-top-right">
        <Title className="title-top-right__title" level={1}>
          PROGRAMMING
        </Title>
        <Title className="title-top-right__title-wellcome" level={4}>
          WELL COME TO MY WEBSITE
        </Title>

        <Paragraph className="title-top-right__title-description">
          It's been a long day without you, my friend And I'll tell you all
          about it when I see you again We've come a long way from where we
          began Oh I'll tell you all about it when I see you again When I see
          you again
        </Paragraph>
        <div className="title-top-right__icon-group">
          <FacebookFilled className="title-top-right__icon-group--item" />
          <InstagramFilled className="title-top-right__icon-group--item" />
          <MailOutlined className="title-top-right__icon-group--item" />
        </div>
        <Button
          type="submit"
          // onClick={formik.handleSubmit}
          className="login__form--button white-color buton-col-6"
          buttonTitle="GET STARTED"
        />
      </div>
    );
  };

  genderContentRight = () => {
    return <img className="img-background-top" src={ImgTop} alt="img top" />;
  };

  render() {
    const { t } = this.props;
    return (
      <div>
        <Row>
          <Col className="rp-web" span={12}>
            {this.genderContentLeft()}
          </Col>
          <Col className="rp-web" span={12}>
            {this.genderContentRight()}
          </Col>
          <Col className="rp-mobie" span={24}>
            {this.genderContentRight()}
          </Col>
          <Col className="rp-mobie" span={24}>
            {this.genderContentLeft()}
          </Col>
        </Row>
        {/* <FadeIn delay={1000} transitionDuration={1000}> */}
        {/* <Row justify="space-around" align="middle">
            <Col span={4}>
              <Card bordered={false} style={{ width: "100%" }}>
                <p>Card content</p>
              </Card>
            </Col>
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
          </Row> */}
      </div>
    );
  }
}

const mstp = (state) => ({});
const mdtp = (dispatch) => ({});

export default connect(mstp, mdtp)(withTranslation()(TopContent));
