import React, { Component } from "react";

import { Layout, Row, Col } from "antd";
import FadeIn from "react-fade-in";
const { Footer } = Layout;

class commonFooter extends Component {
  constructor () {
    super();
  }

  render () {

    return (
      <FadeIn transitionDuration={1000}>
        <Footer className="my-footer" style={{ textAlign: "center" }}>
          <Row gutter={[48, 48]}>
            <Col sm={12} xs={24} xl={6} span={6}>
            CONTENT 1
            </Col>
            <Col sm={12} xs={24} xl={6} span={6}>
            CONTENT 2
            </Col>
            <Col sm={12} xs={24} xl={6} span={6}>
            CONTENT 3
            </Col>
            <Col sm={12} xs={24} xl={6}>
              <Row>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.246589008763!2d105.79094995127127!3d20.98275028595471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135accf459c4c79%3A0xae58785a4efeebe0!2zNDYgQ2hp4bq_biBUaOG6r25nLCBQLiBWxINuIFF1w6FuLCBIw6AgxJDDtG5nLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1595294100711!5m2!1svi!2s" className="my-footer__google-map" frameBorder="0" allowFullScreen="" aria-hidden="false"></iframe>
              </Row>
              <Row>
                <Col xs={0} sm={0} md={0} lg={0} xl={24}>
                  <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsainboltapp&tabs&width=410&height=180&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=238661450587230" className="my-footer__fanpage" width="420" height="180" scrolling="no" allowTransparency="true" allow="encrypted-media"></iframe>
                </Col>
                <Col xs={0} sm={0} md={0} lg={24} xl={0}>
                  <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsainboltapp&tabs&width=460&height=180&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=238661450587230" className="my-footer__fanpage" width="420" height="180" scrolling="no" allowTransparency="true" allow="encrypted-media"></iframe>
                </Col>
                <Col xs={0} sm={0} md={24} lg={0} xl={0}>
                  <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsainboltapp&tabs&width=335&height=180&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=238661450587230" className="my-footer__fanpage" width="420" height="180" scrolling="no" allowTransparency="true" allow="encrypted-media"></iframe>
                </Col>
                {/* <Col xs={0} sm={24} md={0} lg={0} xl={0}>
                  <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsainboltapp&tabs&width=335&height=180&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=238661450587230" className="my-footer__fanpage" width="420" height="180" scrolling="no" allowTransparency="true" allow="encrypted-media"></iframe>
                </Col> */}
                <Col xs={24} sm={0} md={0} lg={0} xl={0}>
                  <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsainboltapp&tabs&width=325&height=180&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=238661450587230" className="my-footer__fanpage" width="420" height="180" scrolling="no" allowTransparency="true" allow="encrypted-media"></iframe>
                </Col>
              </Row>
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