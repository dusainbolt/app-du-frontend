import React, { memo, useCallback } from "react";

import { Row, message } from "antd";
import { Formik, Field } from "formik";
import { useState } from "react";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./actions";
import { initSocket } from "../../../utils/socket";
import { SendOutlined, FileAddOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Comment, Tooltip, List } from "antd";
import Spin from "../../../components/Spin";
import ChatBox from "../../../components/ChatBox";
import CreateNickNameForm from "../../../components/CreateNickName";
import Modal from "../../../components/Modal";

function Chat() {
  // const [user, setUser] = useState({ userId: 12 });
  const user = useSelector(state => state.loginReducer.userDetail);
  const isLoadingLogin = useSelector(state => state.chatReducer.isLoadingLogin);
  const errorLogin = useSelector(state => state.chatReducer.errorLogin);
  const isLoadingChat = useSelector(state => state.chatReducer.isLoadingChat);
  const listChat = useSelector(state => state.chatReducer.listChat);
  const isLoadingListChat = useSelector(state => state.chatReducer.isLoadingListChat);
  const extant = useSelector(state => state.chatReducer.extant);

  const [paramsChat, setParamsChat] = useState({ limit: 10 });
  const [visibleModalNickName, setVisibleModalNickname] = useState(false);
  const dispatch = useDispatch();

  const getSocketMessage = useCallback(
    message => {
      dispatch(actions.putListChatSocket(message));
    },
    []
  );

  const onCreateNickName = useCallback(values => {
    dispatch(actions.loginChatStart(values));
  }, []);

  useEffect(() => {
    var x = document.getElementsByTagName("BODY")[0];
    x.style.backgroundColor = "#f8f8f8";
  }, []);

  const onLoadMoreList = useCallback(() => {
    console.log("->>>>>>>>>>>>>", listChat[0].id);
    dispatch(actions.getListChatStart({ idChat: listChat[0].id }));
  }, [listChat]);

  useEffect(() => {
    if (user?.userInfo) {
      initSocket(getSocketMessage);
      setVisibleModalNickname(false);
      dispatch(actions.getListChatStart(paramsChat));
    } else {
      setVisibleModalNickname(true);
    }
  }, [user]);

  const renderModalName = useMemo(() => {
    return (
      <Modal
        width={400}
        visible={visibleModalNickName}
        isLoadingSpin={isLoadingLogin}
        content={
          <CreateNickNameForm
            isLoadingLogin={isLoadingLogin}
            errorLogin={errorLogin}
            callCreateNickname={onCreateNickName}
          />
        }
        title="Create nickname"
      />
    );
  }, [isLoadingLogin, errorLogin, visibleModalNickName]);

  const onSendMessage = useCallback(values => {
    dispatch(actions.sendMessageStart(values));
  }, []);

  const renderChatBox = useMemo(() => {
    return (
      <ChatBox
        user={user?.userInfo}
        isLoadingList={isLoadingListChat}
        callLoadMore={onLoadMoreList}
        isLoadingChat={isLoadingChat}
        extant={extant}
        callMessage={onSendMessage}
        data={listChat}
      />
    );
  }, [listChat, user, isLoadingListChat, isLoadingChat, extant]);

  return (
    <Row>
      <div className="demo chat">
        {typeof user?.userInfo !== "undefined" && renderChatBox}
        <Link className="demo--link-to" to="/">
          Quay lại trang chủ
        </Link>
        {renderModalName}
      </div>
    </Row>
  );
}

export default memo(Chat);
