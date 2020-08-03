import React, { Component } from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Carousel, Timeline } from "antd";
import { renderContentLanguage } from "../../../../common/js/function";
import {
  RightCircleFilled,
  LeftCircleFilled,
  FacebookFilled,
  InstagramFilled,
  MailFilled
} from "@ant-design/icons";

const ENG = "ENGLISH ENGLISH ENGLISH ENGLISH ENGLISH ENGLISH ENGLISH ENGLISH ENGLISH";
const VN = "VN VN VN VN VN VN VN VN VN VN VN VN VN VN VN VN VN VVN VN";

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
    return (
      <Row>
        <Col className="team-carouse--wrapper" lg={8} xl={10} xs={24}>
          <div className="team-carouse__content">
            <label className="team-carouse__content--title">
              Chief Executive Officer
            </label>
            <p className="team-carouse__content--description">
              {renderContentLanguage(VN, ENG, t("language.value"))}
            </p>
          </div>
        </Col>
        <Col className="team-carouse--wrapper" lg={16} xl={14} xs={24}>
        </Col>
      </Row>
    );
  };


  render() {
    return (
      <Row>
        <Col lg={{ span: 12, order: 1 }} sm={{ span: 24, order: 2 }} className="container-ld--rows__course team-carouse">
          Form Contact
        </Col>
        <Col lg={{ span: 12, order: 2 }} sm={{ span: 24, order: 1 }} className="container-ld--rows__course team-carouse">
          <LeftCircleFilled
            className="team-carouse--icon-left"
            onClick={this.previous}
          />
          <Carousel
            draggable={true}
            ref={node => (this.carousel = node)}
            speed={500}
            effect="scrolling"
          >
            <Col span={24}>{this.renderContentCourse()}</Col>
            <Col span={24}>{this.renderContentCourse()}</Col>
          </Carousel>
          <RightCircleFilled
            onClick={this.next}
            className="team-carouse--icon-right"
          />
        </Col>
      </Row>
    );
  }
}

export default withTranslation()(TopContent);
