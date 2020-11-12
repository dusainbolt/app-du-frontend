import React, { useState, useMemo } from "react";
import { Row, Col } from "antd";
import { Carousel, Tooltip } from "antd";
import { PARAMS, REVIEW } from "../../common";
import Input from "../Input";
import Button from "../Button";
import Spin from "../Spin";
import { useTranslation } from "react-i18next";
import { Formik, Field } from "formik";

import {
  SmileOutlined,
  MehOutlined,
  FrownOutlined,
  RightCircleFilled,
  LeftCircleFilled,
} from "@ant-design/icons";

let carousel = React.createRef();

function ContactReview() {
  const { t } = useTranslation();
  const paramsContact = [
    {
      [PARAMS.EMAIL]: "",
      [PARAMS.NAME]: "",
      [PARAMS.CONTACT]: "",
    },
  ];
  const [vote, setVote] = useState(0);
  const [visibleConfirm, setVisibleConfirm] = useState(false);
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

  const votes = [
    {
      icon: FrownOutlined,
      title: "sdsdsd",
      type: REVIEW.NOT_SATISFIED,
    },
    {
      icon: MehOutlined,
      title: "asd",
      type: REVIEW.NORMAL,
    },
    {
      icon: SmileOutlined,
      title: "sdsda",
      type: REVIEW.SATISFIED,
    },
  ];

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

  const renderContentModal = useMemo(() => {}, [visibleConfirm]);

  const onChangeVote = type => () => {
    setVote(type);
  };

  const renderVote = useMemo(() => {
    return votes.map(item => {
      const Icon = item.icon;
      const classActive = item.type === vote ? "is-active" : "";
      return (
        <Tooltip key={item.type} title={"HAI LONG"} color="#4961ea">
          <Icon className={classActive} onClick={onChangeVote(item.type)} />
        </Tooltip>
      );
    });
  }, [vote]);

  const toggleModal = () => {
    setVisibleConfirm(!visibleConfirm);
  };

  const renderFormContact = () => {
    return (
      <Formik initialValues={paramsContact}>
        {formik => (
          <h3>
            <span className="form-contact--title">{t("landing_page.contact_us")}</span>
            <div className="form-group">
              <Field
                name={PARAMS.EMAIL}
                placeholder={t("landing_page.place_holder_email")}
                component={Input}
              />
              <Field
                name={PARAMS.NAME}
                placeholder={t("landing_page.place_holder_name")}
                component={Input}
              />
              <Field
                name={PARAMS.CONTACT}
                rows={4}
                type="textarea"
                placeholder={t("landing_page.place_holder_contact")}
                component={Input}
              />
              <div className="form-contact--icon-gr-review">
                {renderVote}
                <div className="">TESTING </div>
              </div>
              <Button
                onClick={toggleModal}
                className="btn-primary form-contact--btn-submit"
                title="Gui tin nhan"
              />
            </div>
          </h3>
        )}
      </Formik>
    );
  };
  return (
    <Row className="container-ld--rows">
      <Col className="container-ld--col-contact" xl={{ span: 12 }} lg={{ span: 24 }}>
        <div className="form-contact">
          <Spin isLoading={visibleConfirm} content={renderFormContact()} />
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
