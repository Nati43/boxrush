const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = process.env.PORT || 3000;
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
            numberOfPlayers: data.numberOfPlayers,
            players: [],
            count: 0,
            turn: 1,
        }
        socket.emit("roomCreated", roomID);
        console.log("CreatedRoom: ", roomID);
    });

    socket.on("join", (data)=>{
        if(activeRooms[data.roomID]) {
            activeRooms[data.roomID].count++;
            if(activeRooms[data.roomID].count <= activeRooms[data.roomID].numberOfPlayers) {
                socket.join(data.roomID);
                activeRooms[data.roomID].players.push({id: activeRooms[data.roomID].count, name:data.name});
                socket.emit("id", activeRooms[data.roomID].count);
                io.of('/games').in(data.roomID).emit("joined", activeRooms[data.roomID]);
                if(activeRooms[data.roomID].count == activeRooms[data.roomID].numberOfPlayers)
                    io.of('/games').in(data.roomID).emit("start");
            }else{
                socket.emit("joinError", "The game is full.");
            }
        }else{
            socket.emit("joinError", "The link has expired.");
        }
    });

    socket.on('next', (roomID)=>{
        activeRooms[roomID].turn++;
        if(activeRooms[roomID].turn > activeRooms[roomID].count)
            activeRooms[roomID].turn = 1;
        io.of('/games').in(roomID).emit('turn', activeRooms[roomID].turn);
    });

    socket.on('markX', (marked)=>{
        console.log("Marked: ", marked);
        io.of('/games').to(marked.roomID).emit('markedX', marked);
    });
    
    socket.on('markY', (marked)=>{
        console.log("Marked: ", marked);
        io.of('/games').to(marked.roomID).emit('markedY', marked);
    });
    
    socket.on('win', (data)=>{
        console.log("Winner: ", data);
        io.of('/games').in(data.roomID).emit('winner', data);
    });

    // typing start event
    socket.on('start_typing', (payload)=>{
        io.of('/games').in(payload.roomID).emit("start_typing", payload);
        
    });
    // typing stop event
    socket.on('stop_typing', (payload)=>{
        io.of('/games').in(payload.roomID).emit("stop_typing", payload);
    });
    // message event
    socket.on('send', (payload)=>{
        io.of('/games').in(payload.roomID).emit("message", {
          id: payload.id,
          name: payload.name,
          message: payload.message
        });
    });
});

server.listen(port, () => {
  console.log(`Server running at: ${port}`);
});
