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
  InstagramOutlined,
  FacebookFilled,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

class TopContent extends Component {

  constructor(props){
    super(props);
    this.state = {
      description: "The analogies and problems used in these experiments were not specific to any domain of expertise and used fantasy problems relying only on linguistic descriptions."
    };
  }

  renderContent = (nuberRows, objectGuitar = []) => {
    return (
      <Row gutter={objectGuitar} className="container-ld--rows">
        <Col span={nuberRows}>
          <div className="container-ld--rows__col-two">
            <div className="container-ld--rows__col-two--item">
              <InstagramOutlined className="container-ld--rows__col-two--item__icon" />
            </div>
            <div className="container-ld--rows__col-two--content">
            <Title className="container-ld--rows__col-two--content__title">Title</Title>
                <Paragraph className="container-ld--rows__col-two--content__description">{this.state.description}</Paragraph>
            </div>
          </div>
        </Col>
        <Col span={nuberRows}>
          <div className="container-ld--rows__col-one">
            <div className="container-ld--rows__col-one--item">
              <UserOutlined className="container-ld--rows__col-one--item__icon" />
            </div>
            <div className="container-ld--rows__col-one--content">
                <Title className="container-ld--rows__col-one--content__title">Title</Title>
                <Paragraph className="container-ld--rows__col-one--content__description">{this.state.description}</Paragraph>
              </div>
            </div>
        </Col>
        <Col span={nuberRows}>
          <div className="container-ld--rows__col-two">
            <div className="container-ld--rows__col-two--item">
              <MenuOutlined className="container-ld--rows__col-two--item__icon" />
            </div>
            <div className="container-ld--rows__col-two--content">
            <Title className="container-ld--rows__col-two--content__title">Title</Title>
                <Paragraph className="container-ld--rows__col-two--content__description">{this.state.description} sdsd sdsdsd  sdsdsds sadasdas assdsadas  asdasdsa asdasdsadsa asdsadsadas sadsadsadassdsdsd sdsdsa  asdsadas asdasdasa asdsadas asdsad asdsadas</Paragraph>
            </div>
          </div>
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
            {this.renderContent(8, [48, 16])}
          </Col>
          <Col className="rp-mobie" span={18} offset={3}>
            {this.renderContent(24)}
          </Col>
        </Row>
      </div>
    );
  }
}

const mstp = (state) => ({});
const mdtp = (dispatch) => ({});

export default connect(mstp, mdtp)(withTranslation()(TopContent));
