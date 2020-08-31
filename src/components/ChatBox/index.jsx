import React, { useMemo, useRef } from "react";
import Lazyload from "../LazyLoadingImg";
import { Formik, Field } from "formik";
import Input from "../Input";
import { SendOutlined, LoadingOutlined } from "@ant-design/icons";
import { Tooltip, Skeleton } from "antd";
import ScrollToBottom from "react-scroll-to-bottom";
import { useState } from "react";
import { validateMessage } from "../../common";

export default function ChatBox({ isLoadingList, isLoadingChat, user, data, callMessage }) {
  const messagesEndRef = useRef(null);
  const initialVales = { message: "" };
  const [type, setType] = useState("text");

  const onPress = (values, { resetForm }) => {
    callMessage({ ...values, type });
    resetForm();
  };
  const renderListChat = (chat, manyChat, key) => {
    return (
      <div key={key} className={`chat--content ${chat.userId === user.id && "right"}`}>
        {chat.userId !== user.id && (
          <div className="chat--content--avatar">
            {checkManyChat(chat.userId, chat.avatarUrl, manyChat[key - 1])}
          </div>
        )}
        <div className="chat--content__msg-wrapper">
          <div className="chat--content__msg-wrapper--name">
            {chat.userName}: <span>Vừa xong</span>
          </div>
          <Tooltip title="prompt text" placement="top" color={"#02020259"}>
            <div className="chat--content__msg-wrapper--message">{chat.message}</div>
          </Tooltip>
        </div>
        {chat.userId === user.id && (
          <div className="chat--content--avatar">
            {checkManyChat(chat.userId, chat.avatarUrl, manyChat[key - 1])}
          </div>
        )}
      </div>
    );
  };

  const checkManyChat = (userId, avatar, manyChat) => {
    if (userId === manyChat) return "";
    return (
      <Tooltip title="prompt text" placement="left" color={"#02020259"}>
        <Lazyload className="chat--content__img" src={avatar} alt="image" />
      </Tooltip>
    );
  };

  const renderContentMsg = useMemo(() => {
    if (!data?.length) return "";
    let manyChat = [];
    return data.map((item, index) => {
      manyChat.push(item.userId);
      return renderListChat(item, manyChat, index);
    });
  }, [data]);

  return (
    <div className="chat--container">
      <ScrollToBottom ref={messagesEndRef} className="chat--container--box">
        <Skeleton paragraph={{ rows: 10 }} active loading={isLoadingList}></Skeleton>
        {renderContentMsg}
      </ScrollToBottom>
      <Formik validationSchema={validateMessage} onSubmit={onPress} initialValues={initialVales}>
        {formik => (
          <div className="chat--container__bottom">
            <Lazyload
              delayThrottle={10}
              className="chat--container__bottom--img"
              src={user.avatar}
              alt="image"
            />
            <Field
              name="message"
              component={Input}
              maxLength={255}
              showError={false}
              placeholder={"Enter message..."}
              autoSize={true}
              onPressEnter={formik.handleSubmit}
              Icon={isLoadingChat ? LoadingOutlined : SendOutlined}
              callHandleIcon={formik.handleSubmit}
              type="textarea"
            />
          </div>
        )}
      </Formik>
    </div>
  );
}
