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
io.of("/task3/subpage").on("connect", function (socket) {
  const userId = socket.handshake.query.userId;
  if (!userId) {
    return;
  }

  const parsedId = userId;

  console.log(count);
  socket.on("disconnect", function () {
    console.log("disconnected");
    if (usersLoggedIn.includes(parsedId)) {
      usersLoggedIn.pop(parsedId);
      count--;
      return;
    }
  });
  if (usersLoggedIn.includes(parsedId)) {
    return;
  }
  console.log("past");
  usersLoggedIn.push(parsedId);
  count++;
});

server.listen(3001, () => {
  console.log("server running at http://localhost:3001");
});
