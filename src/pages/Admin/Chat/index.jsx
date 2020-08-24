import React, { memo, useCallback } from "react";

import { Row } from "antd";
import { Formik, Field } from "formik";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useState } from "react";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { actions } from "./actions";
import { initSocket } from "../../../utils/socket";
import { SendOutlined, FileAddOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Comment, Tooltip, List } from "antd";
import moment from "moment";

function Home() {
  const [listInput, setListInput] = useState({ sub: "", msg_1: "", email: "" });
  const [current, setCurrent] = useState(1);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const getSocketMessage = message => {
    setMessage(message);
  };

  useEffect(() => {
    initSocket(getSocketMessage);
  }, []);

  const data = [
    {
      actions: [<span key="comment-list-reply-to-0">Reply to</span>],
      author: "Han Solo",
      avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      content: (
        <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure), to help people create their product prototypes beautifully
          and efficiently.
        </p>
      ),
      datetime: (
        <Tooltip title={moment().subtract(1, "days").format("YYYY-MM-DD HH:mm:ss")}>
          <span>{moment().subtract(1, "days").fromNow()}</span>
        </Tooltip>
      ),
    },
    {
      author: "Han Solo",
      avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      content: (
        <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure), to help people create their product prototypes beautifully
          and efficiently.
        </p>
      ),
      datetime: (
        <Tooltip title={moment().subtract(2, "days").format("YYYY-MM-DD HH:mm:ss")}>
          <span>{moment().subtract(2, "days").fromNow()}</span>
        </Tooltip>
      ),
    },
  ];

  return (
    <Row>
      <h1>{message}</h1>
      <Formik onSubmit={""} initialValues={true && listInput}>
        {formik => (
          <div className="demo chat">
            <div className="chat--container">
              <List
                className="comment-list"
                // header={`${data.length} replies`}
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                  <li>
                    <Comment
                      actions={item.actions}
                      author={item.author}
                      avatar={item.avatar}
                      content={item.content}
                      datetime={item.datetime}
                    />
                  </li>
                )}
              />
            </div>
            <Link style={{ textAlign: "center", fontSize: "11px", display: "block" }} to="/">
              Quay lại trang chủ
            </Link>
          </div>
        )}
      </Formik>
    </Row>
  );
}

export default memo(Home);
