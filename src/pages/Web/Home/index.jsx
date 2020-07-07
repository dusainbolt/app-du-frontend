import React, { Component } from "react";
import { Row, Col, Card, Typography } from "antd";

import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import FadeIn from "react-fade-in";
import TopContent from "./LandingPage/TopContent";
import TopContent1 from "./LandingPage/TopContent1";
import CarouselTeam from "./LandingPage/CarouselTeam";


class Home extends Component {
  render() {
    const { t } = this.props;
    return (
      <div>
        <FadeIn delay={500} transitionDuration={1000}>
          <TopContent />
        </FadeIn>
        <FadeIn delay={1000} transitionDuration={1000}>
          <TopContent1 />
        </FadeIn>
        <FadeIn delay={1000} transitionDuration={1000}>
          <CarouselTeam />
        </FadeIn>
        <FadeIn delay={1000} transitionDuration={1000}>
          <TopContent1 />
        </FadeIn>
      </div>
    );
  }
}

const mstp = (state) => ({});
const mdtp = (dispatch) => ({});

export default connect(mstp, mdtp)(withTranslation()(Home));
