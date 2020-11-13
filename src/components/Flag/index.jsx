import React, { useEffect, useMemo } from "react";
import { Popover } from "antd";
import i18n from "../../i18n/i18n";
import { useState } from "react";
import { DATA_LANGUAGE } from "../../common";
import { useTranslation } from "react-i18next";
import { filterCurrentLanguage } from "../../utils";

function FlagCommon({ className = "", name, icon }) {
  const { t } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState([]);
  const [visiblePopover, setVisiblePopover] = useState(null);

  useEffect(() => {
    setCurrentLanguage(filterCurrentLanguage(DATA_LANGUAGE, i18n.language));
  }, [i18n.language]);

  const handleChangeLanguague = lang => () => {
    i18n.changeLanguage(lang);
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
          className={`flag-wrapper popover ${
            item.lang === currentLanguage[0]?.lang ? "active" : ""
          }`}>
          <span className="lang">{t(item.label)}</span>
          <div className="flag">
            <img src={item.icon} alt="flag-icon" />
          </div>
        </div>
      );
    });
  }, [currentLanguage]);

  return (
    <Popover
      visible={visiblePopover}
      onVisibleChange={handleVisibleChange}
      content={renderContentPopover}
      title={null}
      trigger="click">
      <div className={`flag-wrapper ${className}`}>
        <span className="lang">{t(currentLanguage[0]?.label)}</span>
        <div className="flag">
          <img src={currentLanguage[0]?.icon} alt="flag-icon" />
        </div>
      </div>
    </Popover>
  );
}
export default FlagCommon;
