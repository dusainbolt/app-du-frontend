import React, { useEffect, useMemo } from "react";
import { Popover } from "antd";
import { useState } from "react";
import { DATA_LANGUAGE } from "../../common/configLandingPage";
import { useTranslation } from "react-i18next";
import { filterCurrentLanguage } from "../../utils";
import { CaretDownOutlined } from "@ant-design/icons";

function FlagCommon({ className = "", name, icon }) {
  const { t, i18n } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState([]);
  const [visiblePopover, setVisiblePopover] = useState(null);

  useEffect(() => {
    setCurrentLanguage(filterCurrentLanguage(DATA_LANGUAGE, i18n.language));
  }, [i18n.language]);

  const handleChangeLanguague = lang => () => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    setVisiblePopover(false);
  };

  const handleVisibleChange = visible => {
    setVisiblePopover(visible);
  };

  const renderContentPopover = useMemo(() => {
    return DATA_LANGUAGE.map(item => {
      return (
        <div
          onClick={handleChangeLanguague(item.lang)}
          className={`flag-wrapper item popover ${
            item.lang === currentLanguage[0]?.lang ? "active" : ""
          }`}>
          <span className="lang">{t(item.label)}</span>
          <div className="flag">{item.icon} </div>
        </div>
      );
    });
  }, [currentLanguage]);

  return (
    <Popover
      visible={visiblePopover}
      onVisibleChange={handleVisibleChange}
      content={renderContentPopover}
      overlayClassName="flag-popover"
      title={null}
      placement="bottom"
      trigger="click">
      <div className={`flag-wrapper ${className}`}>
        <div className="flag">{currentLanguage[0]?.icon}</div>
        <CaretDownOutlined />
      </div>
    </Popover>
  );
}
export default FlagCommon;
