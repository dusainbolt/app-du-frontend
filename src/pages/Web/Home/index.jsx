import React, { Component } from "react";

import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import FadeIn from "react-fade-in";
import TopContent from "./LandingPage/TopContent";
import WhyInfo from "./LandingPage/WhyInfo";
import DevelopmentProcess from "./LandingPage/DevelopmentProcess";
import ContactReview from "./LandingPage/ContactReview";
import TechStack from "./LandingPage/TechStack";
import { actions } from "../../Admin/Home/actions";
import BackTop from "../../../components/BackTop";
class Home extends Component {
  render() {
    return (
      <div>
        <FadeIn delay={500} transitionDuration={1000}>
          <TopContent />
        </FadeIn>
        <FadeIn delay={1000} transitionDuration={1000}>
          <WhyInfo />
        </FadeIn>
        <FadeIn delay={1000} transitionDuration={1000}>
          <TechStack />
        </FadeIn>
        <FadeIn delay={1000} transitionDuration={1000}>
          <DevelopmentProcess />
        </FadeIn>
        <div style={{ marginTop: "50px" }}></div>
        <FadeIn delay={1000} transitionDuration={1000}>
          <ContactReview />
        </FadeIn>
        <BackTop />
      </div>
    );
  }
}

const mstp = state => ({});
const mdtp = dispatch => ({});

export default connect(mstp, mdtp)(withTranslation()(Home));
