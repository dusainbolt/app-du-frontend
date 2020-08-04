import React, { Component } from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Carousel, Timeline } from "antd";
import { renderContentLanguage } from "../../../../common/js/function";
import { RightCircleFilled, LeftCircleFilled } from "@ant-design/icons";

const ENG = "ENGLISH ENGLISH ENGLISH ENGLISH ENGLISH ENGLISH ENGLISH ENGLISH ENGLISH";
const VN = "VN VN VN VN VN VN VN VN VN VN VN VN VN VN VN VN VN VVN VN";

class TopContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "Du Sainbolt",
        des:
          "A title is one or more words used before or after a person's name, in certain contexts. It may signify either veneration, an official position, or a professional or academic qualification. In some languages, titles may be inserted between the first aaa aa",
        url_avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRH0jj8tNxcDI8aKOESEgrPGna-RMgUvNCs8w&usqp=CAU",
      },
    };
    this.carousel = React.createRef();
  }

  next = () => {
    this.carousel.next();
  };
  previous = () => {
    this.carousel.prev();
  };

  renderContentCourse = () => {
    const { t } = this.props;
    const { user } = this.state;
    return (
      <Row>
        <Col className="team-carouse--wrapper" xs={24}>
          <img className="team-carouse--img" src={user.url_avatar} />
          <div className="team-carouse--text-wrapper">
            <h1 className="team-carouse--text-wrapper__title">Lê Huy Du</h1>
            <span className="team-carouse--text-wrapper__job">SINH VIEN</span>
            <p className="team-carouse--text-wrapper__des">{user.des}</p>
          </div>
        </Col>
      </Row>
    );
  };

  render() {
    return (
      <Row>
        <Col
          xl={{ span: 12, order: 1 }}
          lg={{ span: 24, order: 2 }}
          xs={{ span: 24, order: 2 }}
          className="container-ld--rows__course team-carouse"
        >
          Form Contact
        </Col>
        <Col
          xl={{ span: 12, order: 2 }}
          lg={{ span: 24, order: 1 }}
          xs={{ span: 24, order: 1 }}
          className="container-ld--rows__course team-carouse"
        >
          <LeftCircleFilled className="team-carouse--icon-left" onClick={this.previous} />
          <Carousel
            draggable={true}
            ref={(node) => (this.carousel = node)}
            speed={500}
            effect="scrolling"
          >
            <Col span={24}>{this.renderContentCourse()}</Col>
            <Col span={24}>{this.renderContentCourse()}</Col>
            <Col span={24}>{this.renderContentCourse()}</Col>
            <Col span={24}>{this.renderContentCourse()}</Col>
            <Col span={24}>{this.renderContentCourse()}</Col>
          </Carousel>
          <RightCircleFilled onClick={this.next} className="team-carouse--icon-right" />
        </Col>
      </Row>
    );
  }
}

export default withTranslation()(TopContent);
