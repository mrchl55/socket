import { io } from "socket.io-client";
import { useEffect, useState } from "react";

const Task3Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const socket = io("http://localhost:5000"); // general socket
    const socket2 = io("http://localhost:5000/task3/subpage"); // namespace specific socket
    socket.connect();
    socket2.connect();
    socket.on("users_count", (data) => {
      setCount(data);
    });
    socket2.on("users_count", (data) => {
      setCount(data);
    });
    return () => {
      socket.disconnect();
      socket2.disconnect();
    };
  }, []);

  return <div>Number of users online: {count ?? 0}</div>;
};

export default Task3Counter;
