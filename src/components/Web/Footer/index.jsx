import React, { Component } from "react";
import { MailFilled, HeartFilled, FacebookFilled, EnvironmentFilled, PhoneFilled, GlobalOutlined } from "@ant-design/icons";
import { Layout, Row, Col } from "antd";
import FadeIn from "react-fade-in";
import { Link } from "react-router-dom";
import logoFooter from "../../../common/image/Logo-footer.png";
const { Footer } = Layout;

class commonFooter extends Component {
  constructor () {
    super();
  }

  getCurrentFullUrl = url => {
    return url.substring(0, url.length - 1);
  }

  render () {
    const phoneNumber = "0328111597";
    const mail = "appdu.hotro@gmail.com";
    const facebook = "https://www.facebook.com/sainboltapp";
    return (
      <FadeIn transitionDuration={1000}>
        <Footer className="my-footer" style={{ textAlign: "center" }}>
          <Row gutter={[6, 32]}>
            <Col sm={5} lg={5} xs={24} xl={7}>
              <img className="my-footer__image" src={logoFooter} alt="img_footer" />
            </Col>
            <Col className="my-footer__col-wrapper" sm={7} lg={6} xs={12} xl={6}>
              <Row>
                <Col className="my-footer__col-wrapper--title"  span={24}>
                  About Us
                </Col>
                <Col className="my-footer__col-wrapper--label" span={24}>
                  <Link to="/blog">Timeline</Link>
                </Col>
                <Col className="my-footer__col-wrapper--label" span={24}>
                  <Link to="/app">App</Link>
                </Col>
                <Col className="my-footer__col-wrapper--label" span={24}>
                  <Link to="bautroixanh/login">Privacy Policy</Link>
                </Col>
                <Col className="my-footer__col-wrapper--label" span={24}>
                  <Link>Help</Link>
                </Col>
              </Row>
            </Col>
            <Col className="my-footer__col-wrapper" sm={6} xs={12} lg={6} xl={5}>
              <Row>
                <Col className="my-footer__col-wrapper--title"  span={24}>
                  Contact Us
                </Col>
                <Col className="my-footer__col-wrapper--label my-footer__icon-wrapper" span={24}>
                  <a href={facebook} rel="noreferrer" target="_blank"><FacebookFilled className="my-footer__col-wrapper--icon" /></a>
                  <a href={`mailto:${mail}`}><MailFilled className="my-footer__col-wrapper--icon" /></a>
                  <a href={`tel:${phoneNumber}`}><PhoneFilled className="my-footer__col-wrapper--icon" /></a>
                </Col>
              </Row>
            </Col>
            <Col sm={6} xs={24} lg={6} xl={6}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.246589008763!2d105.79094995127127!3d20.98275028595471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135accf459c4c79%3A0xae58785a4efeebe0!2zNDYgQ2hp4bq_biBUaOG6r25nLCBQLiBWxINuIFF1w6FuLCBIw6AgxJDDtG5nLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1595294100711!5m2!1svi!2s" className="my-footer__google-map" frameBorder="0" allowFullScreen="" aria-hidden="false"></iframe>
            </Col>
          </Row>
          <Row>
            <div className="my-footer__wrapper-copyright">
              <div className="my-footer__wrapper-copyright--content">Copyright* by Du Sainbolt 2020 
              </div>
            </div>
          </Row>
        </Footer>
      </FadeIn>
    );
  }
}

export default commonFooter;