import React, { memo, useCallback } from "react";

import { Row, message } from "antd";
import { Formik, Field } from "formik";
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

function Home() {
  const [user, setUser] = useState({ userId: 12 });
  const [dataMessage, setDataMessage] = useState([]);
  const [visibleModalNickName, setVisibleModalNickname] = useState(false);
  const dispatch = useDispatch();

  // const dumyData = [
  //   {
  //     id: 12,
  //     userId: 12,
  //     userName: "Du sainbolt",
  //     message: "hi iam du",
  //     userEmail: "dulh18199@gmail.com",
  //     createAt: 1597199370,
  //   },
  // ];

  const getSocketMessage = useCallback(
    message => {
      setDataMessage(oldData => [...oldData, message]);
    },
    [dataMessage]
  );

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

  const onSendMessage = useCallback(
    values => {
      dispatch(actions.sendMessageStart({ ...values, ...user }));
    },
    [user]
  );

  const renderChatBox = useMemo(() => {
    return <ChatBox user={user} callMessage={onSendMessage} data={dataMessage} />;
  }, [dataMessage, user]);

  return (
    <Row>
      <div className="demo chat">
        {typeof user.userName !== "undefined" && renderChatBox}
        <Link className="demo--link-to" to="/">
          Quay lại trang chủ
        </Link>
        {renderModalName}
      </div>
    </Row>
  );
}

export default memo(Home);
