const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const cors = require('cors');

// Enable CORS
app.use(cors());

// Initialize Socket.IO with CORS options
const io = new Server(server, {
  cors: {
    origin: ["https://realtime-device-tracker-project.vercel.app", "https://realtime-device-tracker-two.vercel.app"],
    methods: ["GET", "POST"]
  }
});


// Serve a simple response for root route
app.get("/", (req, res) => {
  res.send("<h1>Realtime Device Tracker Server is Running!</h1>");
});

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on("send-location", (data) => {
    io.emit("receive-location", { id: socket.id, ...data });
  });

  socket.on("disconnect", () => {
    io.emit("user-disconnected", socket.id);
    console.log('User disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
