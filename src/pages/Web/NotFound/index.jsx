import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Row } from "antd";
import { RightCircleFilled } from "@ant-design/icons";
import ImgNotFound from "../../../common/image/error-page.png";

class Home extends Component {
  render() {
    const { t } = this.props;
    return (
      <Row className="not-found" justify="center">
        <div className="not-found--wrapper">
          <img
            className="not-found--wrapper__img"
            src={ImgNotFound}
            alt="notfound"
          />
        </div>
        <div className="not-found--footer">
          <div className="not-found--footer--title">Page Not Found 404</div>
          <div className="not-found--footer--description">
            Sorry, this page could not be found on the server
          </div>
          <Link className="not-found--footer--button" to="/">
            <RightCircleFilled className="not-found--footer--button__icon"/> Go back home
          </Link>
        </div>
      </Row>
    );
  }
}

export default withTranslation()(Home);
