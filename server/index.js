const express = require("express");
const { createServer } = require("node:http");
const { join } = require("node:path");
const { Server } = require("socket.io");
const cors = require("cors");
const app = express();
app.use(cors());
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000"
  }
});
const usersLoggedIn = [];
var count = 0;
// app.get("/task3/subpage", (req, res) => {
// });
io.on("connection", function (socket) {
  console.log("regular page");
  io.emit("users_count", count);
});
io.of("/task3/subpage").on("connection", function (socket) {
  console.log("connected", count);
  io.emit("users_count", count);
  const userId = socket.handshake.query.userId;
  if (!userId) {
    return;
  }

  const parsedId = userId;

  socket.on("disconnect", function () {
    console.log("disconnected");
    if (usersLoggedIn.includes(parsedId)) {
      usersLoggedIn.pop(parsedId);
      count--;
      socket.broadcast.emit("users_count", count);
      return;
    }
  });
  if (usersLoggedIn.includes(parsedId)) {
    socket.broadcast.emit("users_count", count);
    return;
  }
  console.log("past");
  usersLoggedIn.push(parsedId);
  count++;
  socket.broadcast.emit("users_count", count);
  console.log(count);
});
// io.on("connection", function (socket) {
//   console.log("connected counter");
//   io.emit("users_count", count);
// });
// io.of("/task3/counter").on("connect", function (socket) {
//   console.log("create");
//   socket.emit("users_count", count);
// });
server.listen(3001, () => {
  console.log("server running at http://localhost:3001");
});
