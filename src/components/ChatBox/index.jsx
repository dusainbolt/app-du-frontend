import React, { useMemo, useRef } from "react";
import Lazyload from "../LazyLoadingImg";
import { Formik, Field } from "formik";
import Input from "../Input";
import { SendOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import ScrollToBottom from "react-scroll-to-bottom";

export default function ChatBox({ user, data, callMessage }) {

  const messagesEndRef = useRef(null);
  const initialVales = { message: "" };
  const onPress = (values, { resetForm }) => {
    callMessage(values);
    resetForm();
  };

  console.log(data);

  const renderListChat = (chat, manyChat, key) => {
    return (
      <div key={key} className={`chat--content ${chat.userId === user.userId && "right"}`}>
        {chat.userId !== user.userId && (
          <div className="chat--content--avatar">
            {checkManyChat(chat.userId, manyChat[key - 1])}
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
        {chat.userId === user.userId && (
          <div className="chat--content--avatar">
            {checkManyChat(chat.userId, manyChat[key - 1])}
          </div>
        )}
      </div>
    );
  };

  const checkManyChat = (userId, manyChat) => {
    if (userId === manyChat) return "";
    return (
      <Tooltip title="prompt text" placement="left" color={"#02020259"}>
        <Lazyload
          className="chat--content__img"
          src={"https://www.w3schools.com/howto/img_avatar.png"}
          alt="image"
        />
      </Tooltip>
    );
  };

  const renderContentMsg = useMemo(() => {
    if (!data.length) return "";
    let manyChat = [];
    return data.map((item, index) => {
      manyChat.push(item.userId);
      return renderListChat(item, manyChat, index);
    });
  }, [data]);

  return (
    <div className="chat--container">
      <ScrollToBottom ref={messagesEndRef} className="chat--container--box">
        {renderContentMsg}
      </ScrollToBottom>
      <Formik onSubmit={onPress} initialValues={initialVales}>
        {formik => (
          <div className="chat--container__bottom">
            <Lazyload
              delayThrottle={10}
              className="chat--container__bottom--img"
              src={"https://www.w3schools.com/howto/img_avatar.png"}
              alt="image"
            />
            <Field
              name="message"
              component={Input}
              maxLength={255}
              placeholder={"Enter message..."}
              autoSize={true}
              onPressEnter={formik.handleSubmit}
              Icon={SendOutlined}
              callHandleIcon={formik.handleSubmit}
              type="textarea"
            />
          </div>
        )}
      </Formik>
    </div>
  );
}
