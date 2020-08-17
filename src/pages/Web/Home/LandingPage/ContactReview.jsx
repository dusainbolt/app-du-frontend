import React, { useState } from "react";
import { Row, Col } from "antd";
import { Carousel } from "antd";
import Input from "../../../../components/Input";
import { RightCircleFilled, LeftCircleFilled } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Formik, Field } from "formik";

let carousel = React.createRef();

function ContactReview() {
  const { t } = useTranslation();
  const [user, setUser] = useState({
    name: "Du Sainbolt",
    des:
      "A title is one or more words used before or after a person's name, in certain contexts. It may signify either veneration, an official position, or a professional or academic qualification. In some languages, titles may be inserted between the first aaa aa",
    url_avatar: "https://www.w3schools.com/howto/img_avatar.png",
  });

  const next = () => {
    carousel.next();
  };
  const previous = () => {
    carousel.prev();
  };

  const renderContentCourse = () => {
    return (
      <Row className="team-carouse--row">
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

  return (
    <Row className="container-ld--rows">
      <Col xl={{ span: 12 }} lg={{ span: 24 }}>
        <div className="form-contact">
          <Formik>
            {formik => (
              <h3>
                <span className="form-contact--title">{t("landing_page.contact_us")}</span>
                <div className="form-group">
                  <Field
                    name={"password"}
                    type="password"
                    placeholder="Nhập mật khẩu cũ"
                    component={Input}
                  />
                </div>
              </h3>
            )}
          </Formik>
        </div>
      </Col>
      <Col xl={{ span: 12 }} lg={{ span: 24 }} className="container-ld--rows__course team-carouse">
        <LeftCircleFilled className="team-carouse--icon-left" onClick={previous} />
        <Carousel draggable={true} ref={node => (carousel = node)} speed={500} effect="scrolling">
          <Col span={24}>{renderContentCourse()}</Col>
          <Col span={24}>{renderContentCourse()}</Col>
          <Col span={24}>{renderContentCourse()}</Col>
          <Col span={24}>{renderContentCourse()}</Col>
          <Col span={24}>{renderContentCourse()}</Col>
        </Carousel>
        <RightCircleFilled onClick={next} className="team-carouse--icon-right" />
      </Col>
    </Row>
  );
}

export default ContactReview;
