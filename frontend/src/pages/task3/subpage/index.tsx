import { io } from "socket.io-client";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Task3Subpage = () => {
  let userId = localStorage.getItem("userId");
  if (!userId) {
    const uuid = uuidv4();
    userId = JSON.stringify(uuid);
    localStorage.setItem("userId", JSON.stringify(uuid)); // to prevent doubled records from same origin - ideally  by ip but for testing purposes i used local storage
  }

  useEffect(() => {
    const socket = io("http://localhost:3001/task3/subpage", {
      query: {
        userId: JSON.parse(userId!)
      }
    });
    socket.connect();
    console.log("connecting");
    return () => {
      socket.disconnect(); //cleanup to make sure it forces disconnect for changing route with react-router
    };
  }, [userId]);
  return <div>Subpage</div>;
};

export default Task3Subpage;
