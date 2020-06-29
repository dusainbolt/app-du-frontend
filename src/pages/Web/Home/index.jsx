import React, { Component } from "react";
import { Row, Col, Card, Avatar } from "antd";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";

const { Meta } = Card;
const style = { background: "#0092ff", padding: "8px 0" };

class Home extends Component {
  render() {
    const { t } = this.props;
    return (
      <Row>
        <Col className="card_account" offset={0.8} span={6}>
          <div className="card_account__cover_img">
            <div className="img_demo">
              {/* <!-- <img class="coverPhoto" src="https://i.pinimg.com/originals/4d/52/28/4d5228993610701b41ce826a0656ea3b.png" width="100%" alt="Avatar"> --> */}
            </div>
          </div>
          <div className="card_account__avatar">
            <img
              src="https://images.8tracks.com/avatar/i/007/804/854/tumblr_oh41ra8Dfk1vzz8w9o8_500-2936.jpg?rect=0,0,450,450&q=98&fm=jpg&fit=max"
              className="img_profile"
              alt="Avatar"
            />

          </div>
          ssssssssssss
        </Col>
        <Col offset={0.3} className="card_account" span={16}>
          <div className="card_account__cover_img">
            <div className="img_demo">
              {/* <!-- <img class="coverPhoto" src="https://i.pinimg.com/originals/4d/52/28/4d5228993610701b41ce826a0656ea3b.png" width="100%" alt="Avatar"> --> */}
            </div>
          </div>
          <div className="card_account__body"></div>
        </Col>
        <Col className="card_account" offset={0.8} span={6}>
          <div className="card_account__cover_img">
            <div className="img_demo">
              {/* <!-- <img class="coverPhoto" src="https://i.pinimg.com/originals/4d/52/28/4d5228993610701b41ce826a0656ea3b.png" width="100%" alt="Avatar"> --> */}
            </div>
          </div>
          <div className="card_account__avatar">
            <img
              src="https://images.8tracks.com/avatar/i/007/804/854/tumblr_oh41ra8Dfk1vzz8w9o8_500-2936.jpg?rect=0,0,450,450&q=98&fm=jpg&fit=max"
              className="img_profile"
              alt="Avatar"
            />

          </div>
          ssssssssssss
        </Col>
        <Col offset={0.3} className="card_account" span={16}>
          <div className="card_account__cover_img">
            <div className="img_demo">
              {/* <!-- <img class="coverPhoto" src="https://i.pinimg.com/originals/4d/52/28/4d5228993610701b41ce826a0656ea3b.png" width="100%" alt="Avatar"> --> */}
            </div>
          </div>
          <div className="card_account__body"></div>
        </Col>
        <Col className="card_account" offset={0.8} span={6}>
          <div className="card_account__cover_img">
            <div className="img_demo">
              {/* <!-- <img class="coverPhoto" src="https://i.pinimg.com/originals/4d/52/28/4d5228993610701b41ce826a0656ea3b.png" width="100%" alt="Avatar"> --> */}
            </div>
          </div>
          <div className="card_account__avatar">
            <img
              src="https://images.8tracks.com/avatar/i/007/804/854/tumblr_oh41ra8Dfk1vzz8w9o8_500-2936.jpg?rect=0,0,450,450&q=98&fm=jpg&fit=max"
              className="img_profile"
              alt="Avatar"
            />

          </div>
          ssssssssssss
        </Col>
        <Col offset={0.3} className="card_account" span={16}>
          <div className="card_account__cover_img">
            <div className="img_demo">
              {/* <!-- <img class="coverPhoto" src="https://i.pinimg.com/originals/4d/52/28/4d5228993610701b41ce826a0656ea3b.png" width="100%" alt="Avatar"> --> */}
            </div>
          </div>
          <div className="card_account__body"></div>
        </Col>
        <Col className="card_account" offset={0.8} span={6}>
          <div className="card_account__cover_img">
            <div className="img_demo">
              {/* <!-- <img class="coverPhoto" src="https://i.pinimg.com/originals/4d/52/28/4d5228993610701b41ce826a0656ea3b.png" width="100%" alt="Avatar"> --> */}
            </div>
          </div>
          <div className="card_account__avatar">
            <img
              src="https://images.8tracks.com/avatar/i/007/804/854/tumblr_oh41ra8Dfk1vzz8w9o8_500-2936.jpg?rect=0,0,450,450&q=98&fm=jpg&fit=max"
              className="img_profile"
              alt="Avatar"
            />

          </div>
          ssssssssssss
        </Col>
        <Col offset={0.3} className="card_account" span={16}>
          <div className="card_account__cover_img">
            <div className="img_demo">
              {/* <!-- <img class="coverPhoto" src="https://i.pinimg.com/originals/4d/52/28/4d5228993610701b41ce826a0656ea3b.png" width="100%" alt="Avatar"> --> */}
            </div>
          </div>
          <div className="card_account__body"></div>
        </Col>
        <Col className="card_account" offset={0.8} span={6}>
          <div className="card_account__cover_img">
            <div className="img_demo">
              {/* <!-- <img class="coverPhoto" src="https://i.pinimg.com/originals/4d/52/28/4d5228993610701b41ce826a0656ea3b.png" width="100%" alt="Avatar"> --> */}
            </div>
          </div>
          <div className="card_account__avatar">
            <img
              src="https://images.8tracks.com/avatar/i/007/804/854/tumblr_oh41ra8Dfk1vzz8w9o8_500-2936.jpg?rect=0,0,450,450&q=98&fm=jpg&fit=max"
              className="img_profile"
              alt="Avatar"
            />

          </div>
          ssssssssssss
        </Col>
        <Col offset={0.3} className="card_account" span={16}>
          <div className="card_account__cover_img">
            <div className="img_demo">
              {/* <!-- <img class="coverPhoto" src="https://i.pinimg.com/originals/4d/52/28/4d5228993610701b41ce826a0656ea3b.png" width="100%" alt="Avatar"> --> */}
            </div>
          </div>
          <div className="card_account__body"></div>
        </Col>
        <Col className="card_account" offset={0.8} span={6}>
          <div className="card_account__cover_img">
            <div className="img_demo">
              {/* <!-- <img class="coverPhoto" src="https://i.pinimg.com/originals/4d/52/28/4d5228993610701b41ce826a0656ea3b.png" width="100%" alt="Avatar"> --> */}
            </div>
          </div>
          <div className="card_account__avatar">
            <img
              src="https://images.8tracks.com/avatar/i/007/804/854/tumblr_oh41ra8Dfk1vzz8w9o8_500-2936.jpg?rect=0,0,450,450&q=98&fm=jpg&fit=max"
              className="img_profile"
              alt="Avatar"
            />

          </div>
          ssssssssssss
        </Col>
        <Col offset={0.3} className="card_account" span={16}>
          <div className="card_account__cover_img">
            <div className="img_demo">
              {/* <!-- <img class="coverPhoto" src="https://i.pinimg.com/originals/4d/52/28/4d5228993610701b41ce826a0656ea3b.png" width="100%" alt="Avatar"> --> */}
            </div>
          </div>
          <div className="card_account__body"></div>
        </Col>
        
      </Row>
      
    );
  }
}

const mstp = (state) => ({});
const mdtp = (dispatch) => ({});

export default connect(mstp, mdtp)(withTranslation()(Home));
