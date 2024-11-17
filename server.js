const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const marked = require("marked");
const sanitizeHtml = require("sanitize-html");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("markdown", (data) => {
    const sanitizedHtml = sanitizeHtml(marked.parse(data));
    io.emit("preview", sanitizedHtml);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
