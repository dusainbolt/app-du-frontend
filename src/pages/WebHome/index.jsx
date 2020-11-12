import React from "react";
import FadeIn from "react-fade-in";
import TopContent from "../../components/LandingTopContent";
import WhyInfo from "../../components/LandingWhyInfo";
import DevelopmentProcess from "../../components/LandingProcess";
import ContactReview from "../../components/LandingContact";
import TechStack from "../../components/LandingTechStack";
// import { actions } from "../../Admin/Home/actions";
import BackTop from "../../components/BackTop";

function Home() {
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

export default Home;
