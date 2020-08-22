import React, { useState, useEffect } from "react";
import { Progress } from "antd";
import { getTimeNowUnix, countSecondToTime } from "../../utils";
import { timeTopPage } from "../../common/configLandingPage";
import { useTranslation } from "react-i18next";

function CountDownTimer() {
  const [time, setTime] = useState({});
  const [seconds, setSeconds] = useState(getTimeNowUnix() - 942226248);
  const { t } = useTranslation();

  useEffect(() => {
    const timeLeftVar = countSecondToTime(seconds);
    setTime(timeLeftVar);
    setTimeout(countDown, 1000);
  }, []);

  useEffect(() => {
    setTimeout(countDown, 1000);
  }, [seconds]);

  const countDown = () => {
    let countSeconds = seconds + 1;
    setSeconds(countSeconds);
    setTime(countSecondToTime(countSeconds));
  };

  const renderProcessValue = (value, title) => {
    return (
      <div>
        <label className="title-top-right__icon-group-detail--process-circle__value">{value}</label>
        <label className="title-top-right__icon-group-detail--process-circle__title">{title}</label>
      </div>
    );
  };

  const convertTimeResult = (value, timeConvert) => {
    return Math.floor((value / timeConvert) * 100);
  };

  const renderProcessTime = () => {
    return timeTopPage.map((item, index) => {
      return (
        <Progress
          key={index}
          className="title-top-right__icon-group-detail--process-circle"
          type="circle"
          percent={index ? convertTimeResult(time[item.value], item.convert) : 100}
          format={percent => renderProcessValue(time[item.value], t(item.title))}
        />
      );
    });
  };

  return (
    <div className="title-top-right__icon-group-detail">
      <div className="title-top-right__icon-group-detail--container">
        {renderProcessTime()}
      </div>
    </div>
  );
}
export default CountDownTimer;
