import React, { useState, useMemo } from "react";
import { Row, Col, Tooltip } from "antd";
import { useTranslation } from "react-i18next";
import ImgWrapper from "../../resource/image/wrapper-tech-stack-06-06-06.png";
import LazyloadImg from "../LazyLoadingImg";
import { LIST_STACK_BE, LIST_STACK_FE } from "../../common/configLandingPage";
import ModalCommon from "../Modal";

function TechStack() {
  const [visible, setVisible] = useState(false);
  const [contentModal, setContentModal] = useState({});

  const { t } = useTranslation();

  const renderTechStackFrontEnd = type => {
    let html = null;
    const data = type ? LIST_STACK_FE : LIST_STACK_BE;
    html = data.map((value, index) => {
      return (
        <Col className="tech-stack--col-wrapper" xs={{ span: 24 }} sm={{ span: 8 }} key={index}>
          <div className="tech-stack--col-stack">
            <Tooltip title={t(value.label)} color="#4961ea">
              <LazyloadImg
                className="tech-stack--col-stack__img"
                src={value.img}
                alt="tech-stack"
                height={65}
              />
            </Tooltip>
          </div>
          <div className="tech-stack--item-wrapper">
            <div className="tech-stack--item-title">{t(value.title)}</div>
            <p className="tech-stack--item-description" onClick={openModal(value)}>
              {t(value.description)}
            </p>
          </div>
        </Col>
      );
    });
    return html;
  };

  const hideModal = () => {
    setVisible(false);
  };

  const openModal = item => () => {
    const { title, label, img } = item;
    setContentModal({ title, label, img });
    setVisible(true);
  };

  const renderContentDetail = () => {
    return (
      <div className="modal__detail-stack">
        <img className="modal-ld__img" src={contentModal.img} />
        <h3>{t(contentModal.label)}</h3>
      </div>
    );
  };

  const renderDetailTechStack = useMemo(() => {
    return (
      <ModalCommon
        title={t(contentModal.title)}
        width={500}
        visible={visible}
        content={renderContentDetail()}
        onCancel={hideModal}></ModalCommon>
    );
  }, [visible]);

  return (
    <Row>
      <div className="container-ld--title">{t("landing_page.tech-stack-title")}</div>
      <Col span={24}>
        <Row>
          <Col lg={{ span: 0 }} xl={{ span: 8 }}>
            <img className="tech-stack--col-image" src={ImgWrapper} alt="img top" />
          </Col>
          <Col className="tech-stack--wrapper" xs={{ span: 24 }} xl={{ span: 16 }}>
            <h4 className="tech-stack--title">{t("tech-stack.title_front_end")}</h4>
            <Row className="tech-stack--row">{renderTechStackFrontEnd(1)}</Row>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Row>
          <Col xl={{ span: 8 }}></Col>
          <Col className="tech-stack--wrapper" xs={{ span: 24 }} xl={{ span: 16 }}>
            <h4 className="tech-stack--title">{t("tech-stack.title_back_end")}</h4>
            <Row className="tech-stack--row">{renderTechStackFrontEnd(0)}</Row>
          </Col>
        </Row>
      </Col>
      {renderDetailTechStack}
    </Row>
  );
}

export default TechStack;
