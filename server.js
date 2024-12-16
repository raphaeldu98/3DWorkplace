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
      origin: ['http://localhost:5173', 'http://localhost:5174', [' http://127.0.0.1:5173/']],  // Allow your client URL for WebSocket
      methods: ['GET', 'POST']
    }
});

app.use(express.static('public'));

let userCounter = 0; // Counter to generate user-friendly IDs
const userIDs = {};  // Mapping of socket IDs to user-friendly IDs
const availableUserNumbers = []; // Queue for available user numbers to reuse

io.on('connection', (socket) => {
  let friendlyUserID;

    if (availableUserNumbers.length > 0) {
        // Reuse the lowest available number
        friendlyUserID = `User ${availableUserNumbers.shift()}`;
    } else {
        // Increment userCounter for a new ID
        userCounter++;
        friendlyUserID = `User ${userCounter}`;
    }

    userIDs[socket.id] = friendlyUserID;
    socket.emit('userID', friendlyUserID);

    console.log(`User connected: ${friendlyUserID}`);

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

  socket.on('disconnect', () => {
    console.log(`User disconnected: ${friendlyUserID}`);
    // Extract the number from the user ID and add it to the available numbers queue
    const userNumber = parseInt(friendlyUserID.split(' ')[1], 10);
    availableUserNumbers.push(userNumber);
    availableUserNumbers.sort((a, b) => a - b); // Keep the queue sorted
    delete userIDs[socket.id];
});
});

server.listen(3000, '0.0.0.0', () => {
  console.log('Server is running on http://localhost:3000');
});