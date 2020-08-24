import io from "socket.io-client";
import { SOCKET } from "../common";

let socket = null;

function initSocket(callbackMessage) {
  console.log(SOCKET.API_URL);
  console.log("-> start init socket-------------------");
  socket = io(SOCKET.API_URL);
  socket.on("connect", () => {
    // socket.emit("join-room", userId.toString());
    // socketIo.emit("/me");
    // getDataStreamUser(streamInfo);
    // liveChatLine(liveChatLineCallBack);
    // liveEnd(liveEndCallBack);
    // getSendItem();
    getMessage(callbackMessage);
  });

  connectSocketError();
}

function connectSocketError() {
  socket.on("connect_error", res => {
    console.log(res);
    console.log("socket---------------------=", res);
  });
}

function getMessage(callbackMessage) {
  socket.on("message", res => {
    const data = JSON.parse(res).data.message;
    callbackMessage(data);
  });
}

export { initSocket };
