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
import ChatBox from "../../../components/ChatBox";
import CreateNickNameForm from "../../../components/CreateNickName";
import Modal from "../../../components/Modal";
import moment from "moment";

function Home() {
  const [listInput, setListInput] = useState({ sub: "", msg_1: "", email: "" });
  const [user, setUser] = useState({});
  const [dataMessage, setDataMessage] = useState([]);
  const [visibleModalNickName, setVisibleModalNickname] = useState(false);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const getSocketMessage = message => {
    setMessage(message);
  };


  const onCreateNickName = useCallback(values => {
    setVisibleModalNickname(false);
    setUser(values);
  },[]);

  useEffect(() => {
    var x = document.getElementsByTagName("BODY")[0];
    x.style.backgroundColor = "#f8f8f8";
    setVisibleModalNickname(false);
    initSocket(getSocketMessage);
    setDataMessage([
      {
        id: 0,
        nickName: "Du sainbolt",
        content: "hi iam du",
        email: "dulh18199@gmail.com",
        createAt: 1597199370
      },
      {
        id: 1,
        nickName: "Du sainbolt",
        content: "hi iam du",
        email: "dulh18199@gmail.com",
        createAt: 1597199370
      },
      {
        id: 2,
        nickName: "Du sainbolt",
        content: "hi iam du",
        email: "dulh18199@gmail.com",
        createAt: 1597199370
      },
      {
        id: 3,
        nickName: "Du sainbolt",
        content: "hi iam du",
        email: "dulh18199@gmail.com",
        createAt: 1597199370
      }
    ]);
  }, []);

  const renderModalName = useMemo(() => {
    return (
      <Modal
        width={400}
        visible={visibleModalNickName}
        content={<CreateNickNameForm callCreateNickname={onCreateNickName} />}
        title="Create nickname"
      />
    );
  }, [visibleModalNickName]);

  const onSendMessage = values => {
    console.log(values);
  };

  return (
    <Row>
      <h1>{message}</h1>
      <Formik onSubmit={""} initialValues={true && listInput}>
        {formik => (
          <div className="demo chat">
            <ChatBox callMessage={onSendMessage} data={dataMessage} />
            <Link className="demo--link-to" to="/">
              Quay lại trang chủ
            </Link>
            {renderModalName}
          </div>
        )}
      </Formik>
    </Row>
  );
}

export default memo(Home);
