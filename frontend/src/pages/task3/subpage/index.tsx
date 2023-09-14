import React from "react";
import { io, Socket } from "socket.io-client";
import { useEffect } from "react";
import {
  ServerToClientEvents,
  ClientToServerEvents
} from "../../../types/socket";
import { v4 as uuidv4 } from "uuid";

// const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();

const Task3Subpage = () => {
  let userId = localStorage.getItem("userId");
  if (!userId) {
    const uuid = uuidv4();
    userId = JSON.stringify(uuid);
    localStorage.setItem("userId", JSON.stringify(uuid));
  }

  useEffect(() => {
    const socket = io("http://localhost:3001/task3/subpage", {
      query: {
        userId: JSON.parse(userId!)
      }
    });
  }, [userId]);
  return <div>index</div>;
};

export default Task3Subpage;
