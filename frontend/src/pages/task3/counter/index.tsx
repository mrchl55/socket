import React from "react";
import { io, Socket } from "socket.io-client";
import { useEffect } from "react";
import {
  ServerToClientEvents,
  ClientToServerEvents
} from "../../../types/socket";
// const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();
//const socket = io("http://localhost:3001/");

const Task3Counter = () => {
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
  return <div>index</div>;
};

export default Task3Counter;
