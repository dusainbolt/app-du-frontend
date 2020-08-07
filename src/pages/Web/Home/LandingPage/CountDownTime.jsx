import React, { Component } from "react";
import { Progress } from "antd";
import {
  getTimeNowUnix,
  countSecondToTime,
} from "../../../../common/js/function";
import { withTranslation } from "react-i18next";
class CountDownTimer extends Component {
  constructor(props) {
    super(props);
    this.state = { time: {}, seconds: getTimeNowUnix() - 942226248 };
    this.timer = 0;
  }
  componentDidMount() {
    let timeLeftVar = countSecondToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
    this.startTimer();
  }

  startTimer = () => {
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  };

  countDown = () => {
    let seconds = this.state.seconds + 1;
    this.setState({
      time: countSecondToTime(seconds),
      seconds: seconds,
    });
  };

  renderProcessValue = (value, title) => {
    return (
      <div>
        <label className="title-top-right__icon-group-detail--process-circle__value">
          {value}
        </label>
        <label className="title-top-right__icon-group-detail--process-circle__title">
          {title}
        </label>
      </div>
    );
  };

  render() {
    const { s, m, h, d } = this.state.time;
    const percentSeconds = Math.floor((s / 60) * 100);
    const percentMinutes = Math.floor((m / 60) * 100);
    const percentHours = Math.floor((h / 24) * 100);
    const { t } = this.props;
    return (
      <div className="title-top-right__icon-group-detail">
        <div className="title-top-right__icon-group-detail--container">
          <Progress
            className="title-top-right__icon-group-detail--process-circle"
            type="circle"
            percent={100}
            format={percent =>
              this.renderProcessValue(d, t("landing_page.countdown_day"))
            }
          />
          <Progress
            className="title-top-right__icon-group-detail--process-circle"
            type="circle"
            percent={percentHours}
            format={percent =>
              this.renderProcessValue(h, t("landing_page.countdown_hours"))
            }
          />
          <Progress
            className="title-top-right__icon-group-detail--process-circle"
            type="circle"
            percent={percentMinutes}
            format={percent =>
              this.renderProcessValue(m, t("landing_page.countdown_minutes"))
            }
          />

          <Progress
            className="title-top-right__icon-group-detail--process-circle"
            type="circle"
            percent={percentSeconds}
            format={percent =>
              this.renderProcessValue(s, t("landing_page.countdown_second"))
            }
          />
        </div>
      </div>
    );
  }
}
export default withTranslation()(CountDownTimer);
