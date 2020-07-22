import React, { Component } from "react";
import { MailFilled, HeartFilled, FacebookFilled, EnvironmentFilled, PhoneFilled, GlobalOutlined } from "@ant-design/icons";
import { Layout, Row, Col } from "antd";
import FadeIn from "react-fade-in";
import { Link } from "react-router-dom";

const { Footer } = Layout;

class commonFooter extends Component {
  constructor () {
    super();
  }

  getCurrentFullUrl = url => {
    return url.substring(0, url.length - 1);
  }

  render () {
    const currentUrl = this.getCurrentFullUrl(window.location.href);
    const phoneNumber = "0328111597";
    const mail = "appdu.hotro@gmail.com";
    return (
      <FadeIn transitionDuration={1000}>
        <Footer className="my-footer" style={{ textAlign: "center" }}>
          <Row gutter={[48, 48]}>
            <Col sm={12} xs={24} xl={7}>
              CONTENT 1
            </Col>
            <Col className="my-footer__col-feature" sm={12} xs={24} xl={6}>
              <div className="my-footer__title">Du Sainbolt</div>
              <Row gutter={[12, 12]}>
                <Col className="my-footer__feature-wrapper" span={24}>
                  <EnvironmentFilled className="my-footer__icon"/> <span><strong>Address: </strong></span><a>46 Chien Thang Ha Dong Ha Noi Viet Nam</a>
                </Col>
                <Col className="my-footer__feature-wrapper" span={24}>
                  <PhoneFilled className="my-footer__icon"/> <span><strong>Hotline: </strong></span><a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                </Col>
                <Col className="my-footer__feature-wrapper" span={24}>
                  <MailFilled className="my-footer__icon"/> <span><strong>Email: </strong></span><a href={`mailto:${mail}`}>{mail}</a>
                </Col>
                <Col className="my-footer__feature-wrapper" span={24}>
                  <GlobalOutlined className="my-footer__icon"/> <span><strong>Website: </strong></span><a href={currentUrl} rel="noreferrer">{currentUrl}</a>
                </Col>
                <Col className="my-footer__feature-wrapper" span={24}>
                  <FacebookFilled className="my-footer__icon"/> <span><strong>Fanpage: </strong></span><a href="https://www.facebook.com/sainboltapp" rel="noreferrer" target="_blank">facebook.com/sainboltapp</a>
                </Col>
              </Row>
            </Col>
            <Col className="my-footer__col-feature" sm={12} xs={24} xl={5}>
              <div className="my-footer__title">Menu</div>
              <Row gutter={[12, 12]}>
                <Col className="my-footer__feature-wrapper-menu" sm={8} xl={12}>
                  <Link to="/blog"><HeartFilled /> Home</Link>
                </Col>
                <Col className="my-footer__feature-wrapper-menu" sm={8} xl={12}>
                  <Link to="/blog"><HeartFilled /> Timeline</Link>
                </Col>
                <Col className="my-footer__feature-wrapper-menu" sm={8} xl={12}>
                  <Link to="/blog"><HeartFilled /> App</Link>
                </Col>
                <Col className="my-footer__feature-wrapper-menu" sm={8} xl={12}>
                  <Link to="/blog"><HeartFilled /> Contact</Link>
                </Col>
                <Col className="my-footer__feature-wrapper-menu" sm={8} xl={12}>
                  <Link to="/blog"><HeartFilled   /> Privacy Policy</Link>
                </Col>
              </Row>
              <div className="my-footer__description">
                ssssssssssss ssssssssssssss sssssssssssss  sssssssssssssssss ssssssssss
              </div>
            </Col>
            <Col sm={12} xs={24} xl={6}>
              <Row>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.246589008763!2d105.79094995127127!3d20.98275028595471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135accf459c4c79%3A0xae58785a4efeebe0!2zNDYgQ2hp4bq_biBUaOG6r25nLCBQLiBWxINuIFF1w6FuLCBIw6AgxJDDtG5nLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1595294100711!5m2!1svi!2s" className="my-footer__google-map" frameBorder="0" allowFullScreen="" aria-hidden="false"></iframe>
              </Row>
              <Row>
                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsainboltapp&tabs&width=500&height=136&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=238661450587230" className="my-footer__fanpage" scrolling="no" allowTransparency="true" allow="encrypted-media"></iframe>              </Row>
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