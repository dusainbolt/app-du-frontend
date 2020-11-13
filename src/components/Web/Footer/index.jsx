import React from "react";
import { MailFilled, FacebookFilled, PhoneFilled } from "@ant-design/icons";
import { Layout, Row, Col } from "antd";
import FadeIn from "react-fade-in";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logoFooter from "../../../common/image/Logo-footer.png";

const { Footer } = Layout;

function CommonFooter() {
  const { t } = useTranslation();
  const phoneNumber = "0328111597";
  const mail = "appdu.hotro@gmail.com";
  const facebook = "https://www.facebook.com/sainboltapp";
  const map =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.246589008763!2d105.79094995127127!3d20.98275028595471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135accf459c4c79%3A0xae58785a4efeebe0!2zNDYgQ2hp4bq_biBUaOG6r25nLCBQLiBWxINuIFF1w6FuLCBIw6AgxJDDtG5nLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1595294100711!5m2!1svi!2s" frameBorder="0" allowFullScreen="" aria-hidden="false"></iframe>';
  return (
    <FadeIn transitionDuration={1000}>
      <Footer className="my-footer" style={{ textAlign: "center" }}>
        <Row className="my-footer__content" gutter={[6, 32]}>
          <Col sm={8} lg={5} xs={24} xl={7}>
            <div>
              <img className="my-footer__image" src={logoFooter} alt="img_footer" />
            </div>
          </Col>
          <Col className="my-footer__col-wrapper" sm={8} lg={6} xs={12} xl={6}>
            <Row>
              <Col className="my-footer__col-wrapper--title" span={24}>
                {t("footer.label_about_us")}
              </Col>
              <Col className="my-footer__col-wrapper--label" span={24}>
                <Link to="/blog">{t("footer.label_blog")}</Link>
              </Col>
              <Col className="my-footer__col-wrapper--label" span={24}>
                <Link to="/app">{t("footer.label_app")}</Link>
              </Col>
              <Col className="my-footer__col-wrapper--label" span={24}>
                <Link to="bautroixanh/login">{t("footer.label_privacy_policy")}</Link>
              </Col>
              <Col className="my-footer__col-wrapper--label" span={24}>
                <Link to="/app">{t("footer.label_help")}</Link>
              </Col>
            </Row>
          </Col>
          <Col className="my-footer__col-wrapper" sm={8} xs={12} lg={6} xl={5}>
            <Row>
              <Col className="my-footer__col-wrapper--title" span={24}>
                {t("footer.label_contact_us")}
              </Col>
              <Col className="my-footer__col-wrapper--label my-footer__icon-wrapper" span={24}>
                <a href={facebook} rel="noreferrer" target="_blank">
                  <FacebookFilled className="my-footer__col-wrapper--icon" />
                </a>
                <a href={`mailto:${mail}`}>
                  <MailFilled className="my-footer__col-wrapper--icon" />
                </a>
                <a href={`tel:${phoneNumber}`}>
                  <PhoneFilled className="my-footer__col-wrapper--icon" />
                </a>
              </Col>
            </Row>
          </Col>
          <Col sm={24} xs={24} lg={6} xl={6}>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.246589008763!2d105.79094995127127!3d20.98275028595471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135accf459c4c79%3A0xae58785a4efeebe0!2zNDYgQ2hp4bq_biBUaOG6r25nLCBQLiBWxINuIFF1w6FuLCBIw6AgxJDDtG5nLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1595294100711!5m2!1svi!2s" className="my-footer__google-map" frameBorder="0" allowFullScreen="" aria-hidden="false"></iframe> */}
            <div
              className="my-footer__google-map"
              dangerouslySetInnerHTML={{
                __html: map,
              }}></div>
          </Col>
        </Row>
        <Row>
          <div className="my-footer__wrapper-copyright">
            <div className="my-footer__wrapper-copyright--content">
              {t("footer.label_copyright")}
            </div>
          </div>
        </Row>
      </Footer>
    </FadeIn>
  );
}

export default CommonFooter;
