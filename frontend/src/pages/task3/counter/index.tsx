import React from "react";
import { io, Socket } from "socket.io-client";
import { useEffect, useState } from "react";
import {
  ServerToClientEvents,
  ClientToServerEvents
} from "../../../types/socket";
// const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();

const Task3Counter = () => {
  const socket = io("http://localhost:3001");
  const socket2 = io("http://localhost:3001/task3/subpage");
  const [count, setCount] = useState(0);
  useEffect(() => {
    socket.on("users_count", function (data) {
      setCount(data);
    });
    socket2.on("users_count", function (data) {
      setCount(data);
    });
  }, [socket, socket2]);
  // const userEntered = () => {
  //   socket.emit("user_entered", { message: "user logged" });
  // };
  // const userLeft = () => {
  //   socket.emit("user_left", { message: "user left" });
  // };
  // useEffect(() => {
  //   userEntered();
  //   return () => {
  //     userLeft();
  //   };
  // }, []);
  return <div>index {count ? count : ""}</div>;
};

export default Task3Counter;
