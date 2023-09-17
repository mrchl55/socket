const express = require("express");
const { createServer } = require("node:http");
const { Server } = require("socket.io");
const cors = require("cors");
const app = express();
app.use(cors());
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:4000",
    methods: ["GET", "POST"]
  }
});
const usersLoggedIn = [];
const findUser = (id) => {
  return usersLoggedIn.find((u) => u.id === id);
};
io.on("connection", (socket) => {
  io.emit("users_count", usersLoggedIn?.length);
});
io.of("/task3/subpage").on("connection", (socket) => {
  io.emit("users_count", usersLoggedIn?.length);
  const userId = socket.handshake.query.userId;
  if (!userId) {
    return;
  }

  socket.on("disconnect", () => {
    const user = findUser(userId);
    if (user) {
      if (user.instances <= 1) {
        // if users' open cards are equal to 1, remove user from array
        const idToDelete = usersLoggedIn.findIndex((u) => u.id === user.id);
        usersLoggedIn.splice(idToDelete, 1);

        socket.broadcast.emit("users_count", usersLoggedIn?.length);
        return;
      }

      user.instances--; // else if open cards count is greater than 1, only substract instances count
    }
  });
  const user = findUser(userId);
  if (user) {
    user.instances++;
    return;
  }
  usersLoggedIn.push({
    id: userId,
    instances: 1 // to track single users' open cards
  });

  socket.broadcast.emit("users_count", usersLoggedIn?.length);
});
server.listen(5000, () => {
  console.log("server running at http://localhost:5000");
});
