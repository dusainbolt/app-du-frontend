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
  const [user, setUser] = useState({ userId: 12 });
  const [dataMessage, setDataMessage] = useState([]);
  const [visibleModalNickName, setVisibleModalNickname] = useState(false);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const dumyData = [
    {
      id: 12,
      userId: 12,
      userName: "Du sainbolt",
      message: "hi iam du",
      userEmail: "dulh18199@gmail.com",
      createAt: 1597199370,
    },
    {
      id: 1,
      userId: 12,
      userName: "Du sainbolt",
      message: "hi iam du",
      userEmail: "dulh18199@gmail.com",
      createAt: 1597199370,
    },
    {
      id: 2,
      userId: 12,
      userName: "Du sainbolt",
      message: "hi iam du",
      userEmail: "dulh18199@gmail.com",
      createAt: 1597199370,
    },
    {
      id: 2,
      userId: 12,
      userName: "Du sainbolt",
      message: "hi iam du",
      userEmail: "dulh18199@gmail.com",
      createAt: 1597199370,
    },
    {
      id: 3,
      userId: 12,
      userName: "Du sainbolt",
      message: "hi iam du",
      userEmail: "dulh18199@gmail.com",
      createAt: 1597199370,
    },
    {
      id: 3,
      userId: 13,
      userName: "Du sainbolt",
      message: "hi iam du",
      userEmail: "dulh18199@gmail.com",
      createAt: 1597199370,
    },
    {
      id: 3,
      userId: 14,
      userName: "Du sainbolt",
      message: "hi iam du",
      userEmail: "dulh18199@gmail.com",
      createAt: 1597199370,
    },
    {
      id: 3,
      userId: 25,
      userName: "Du sainbolt",
      message: "hi iam du",
      userEmail: "dulh18199@gmail.com",
      createAt: 1597199370,
    },
    {
      id: 3,
      userId: 6,
      userName: "Du sainbolt",
      message: "hi iam du",
      userEmail: "dulh18199@gmail.com",
      createAt: 1597199370,
    },
  ];

  const getSocketMessage = message => {
    setMessage(message);
  };

  const onCreateNickName = useCallback(
    values => {
      setUser(values);
      setVisibleModalNickname(false);
    },
    [visibleModalNickName]
  );

  useEffect(() => {
    var x = document.getElementsByTagName("BODY")[0];
    x.style.backgroundColor = "#f8f8f8";
    setVisibleModalNickname(true);
    initSocket(getSocketMessage);
    setDataMessage(dumyData);
  }, []);

  const renderModalName = useMemo(() => {
    console.log("set-------->", visibleModalNickName);
    return (
      <Modal
        width={400}
        visible={visibleModalNickName}
        content={<CreateNickNameForm callCreateNickname={onCreateNickName} />}
        title="Create nickname"
      />
    );
  }, [visibleModalNickName]);

  const onSendMessage = useCallback(values => {
    const msg = {
      id: 15151,
      userId: 6,
      userName: "Du sainbolt",
      message: "NEW CHAT BOTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx",
      userEmail: "dulh18199@gmail.com",
      createAt: 1597199370,
    };
    setDataMessage([...dataMessage, msg]);
  },[dataMessage]);

  const renderChatBox = useMemo(() => {
    console.log("set-------->", dataMessage);
    return <ChatBox user={user} callMessage={onSendMessage} data={dataMessage} />;
  }, [dataMessage]);

  console.log(dataMessage);

  return (
    <Row>
      <h1>{message}</h1>
      <Formik onSubmit={""} initialValues={true && listInput}>
        {formik => (
          <div className="demo chat">
            {typeof user.userName !== "undefined" && renderChatBox}
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
