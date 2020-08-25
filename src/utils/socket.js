import io from "socket.io-client";
import { SOCKET } from "../common";

let socket = null;

function initSocket(callbackMessage) {
  console.log(SOCKET.API_URL);
  socket = io(SOCKET.API_URL);
  socket.on("connect", () => {
    console.log("---->>>>>>>>>>>> CONNECT SOCKET <<<<<<<<<--------");
    // socket.emit("join-room", userId.toString());
    getMessage(callbackMessage);
  });

  connectSocketError();
}

function connectSocketError() {
  socket.on("connect_error", res => {
    console.log(res);
    console.log("!!!!!!!!!!!!!! SOCKET ERROR !!!!!!!!!!!!!", res);
  });
}

function getMessage(callbackMessage) {
  socket.on("__chatSocket", res => {
    // const data = JSON.parse(res).data.payload;
    console.log("----->Data", res);
    callbackMessage(res.data);
  });
}
// message
// new message


export { initSocket };
