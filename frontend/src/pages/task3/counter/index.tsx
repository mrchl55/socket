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

  return <div>Number of users online: {count ?? 0}</div>;
};

export default Task3Counter;
