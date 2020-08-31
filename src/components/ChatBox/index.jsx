import React, { useMemo, useRef } from "react";
import Lazyload from "../LazyLoadingImg";
import { Formik, Field } from "formik";
import Input from "../Input";
import { SendOutlined, LoadingOutlined } from "@ant-design/icons";
import { Tooltip, Skeleton } from "antd";
import ScrollToBottom from "react-scroll-to-bottom";
import { useState } from "react";
import { convertDateTime, genderTimeCount } from "../../utils";
import { TYPE_DATE_TIME, validateMessage } from "../../common";
import Dot from "../Dot";

export default function ChatBox({
  isLoadingList,
  isLoadingChat,
  user,
  data,
  extant,
  callMessage,
  callLoadMore,
}) {
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
            {checkManyChat(chat, manyChat[key - 1])}
          </div>
        )}
        <div className="chat--content__msg-wrapper">
          <div className="chat--content__msg-wrapper--name">
            {chat.userName}: <span>{genderTimeCount(chat.createdAt)}</span>
          </div>
          <Tooltip title={genderTooltipMess(chat.createdAt)} placement="top" color={"#ababab"}>
            <div className="chat--content__msg-wrapper--message">{chat.message}</div>
          </Tooltip>
        </div>
        {chat.userId === user.id && (
          <div className="chat--content--avatar">
            {checkManyChat(chat, manyChat[key - 1])}
          </div>
        )}
      </div>
    );
  };

  const checkManyChat = (chat, manyChat) => {
    const { userId, avatarUrl, userName, userEmail } = chat;
    if (userId === manyChat) return "";
    return (
      <Tooltip title={genderTooltipAvatar(userName, userEmail)} placement="left" color={"#ababab"}>
        <Lazyload className="chat--content__img" src={avatarUrl} alt="image" />
      </Tooltip>
    );
  };

  const genderTooltipMess = date => {
    return "Sent date: " + convertDateTime(date, TYPE_DATE_TIME.TIME_AND_DATE);
  };

  const genderTooltipAvatar = (name, email) => {
    return name + "-" + email;
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
        {isLoadingList ? (
          <Dot />
        ) : (
          extant > 0 && (
            <div onClick={callLoadMore} className="load-more">
              Load more
            </div>
          )
        )}
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
