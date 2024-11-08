const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
// Use CORS middleware
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:5174'],  // Allow your client URL
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));
  
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
      origin: ['http://localhost:5173', 'http://localhost:5174'],  // Allow your client URL for WebSocket
      methods: ['GET', 'POST']
    }
});

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);
  socket.emit('userID', socket.id);

  // Object movement
  socket.on('objectMoved', (data) => {
    socket.broadcast.emit('objectMoved', data);
    console.log('Broadcasting objectMoved:', data); // Verify data on the server
  });

  // Environment map change
  socket.on('envMapChanged', () => {
    socket.broadcast.emit('envMapChanged');
    console.log('Environment map changed');
  });

  // Text annotation addition
  socket.on('addTextAnnotation', (data) => {
    socket.broadcast.emit('addTextAnnotation', data);
    console.log('Text annotation added:', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });

  // Listen for add, delete, and edit events
  socket.on("addComment", (data) => {
    socket.broadcast.emit("addComment", data);
    console.log('Comment added:', data);
  });

  socket.on("deleteComment", (data) => {
    socket.broadcast.emit("deleteComment", data);
  });

  // Handle comment movement for real-time drag updates
  socket.on('moveComment', (data) => {
    console.log('Comment moved:', data);
    socket.broadcast.emit('moveComment', data); // Broadcast to all other clients
  });
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});