const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
    }
});

// Serve static files (i.e front-end build)
console.log("Serving static assets...");
app.use(express.static('public'));

// Active game rooms
const activeRooms = [];
// Socket events
io.of("/games").on("connection", (socket)=>{

    socket.on('createRoom', (data)=>{
        const roomID = data.cols+'-'+data.rows+'-'+socket.id;
        // activeRooms.push(roomID);
        activeRooms[roomID] = { 
            roomID: roomID,
            players: [],
            count: 0,
        }
        // socket.join(roomID);
        socket.emit("roomCreated", roomID);
        console.log("CreatedRoom: ", roomID);
    });

    socket.on("join", (data)=>{
        if(activeRooms[data.roomID]) {
            socket.join(data.roomID);
            activeRooms[data.roomID].count++;
            activeRooms[data.roomID].players.push(data.name);
            io.of('/games').in(data.roomID).emit("joined", activeRooms[data.roomID]);
        }else{
            socket.emit("joinError", "The link has expired.");
        }
    });

    socket.on('markX', (marked)=>{
        console.log("Marked: ", marked);
        io.of('/games').in(marked.roomID).emit('markedX', marked);
    });
    
    socket.on('markY', (marked)=>{
        console.log("Marked: ", marked);
        io.of('/games').in(marked.roomID).emit('markedY', marked);
    });
    
    socket.on('win', (data)=>{
        console.log("Winner: ", data);
        io.of('/games').in(data.roomID).emit('winner', data);
    });

});

server.listen(80, () => {
  console.log(`Server running at: 80`);
});
