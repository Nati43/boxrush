import {  
  SubscribeMessage, 
  WebSocketGateway, 
  WebSocketServer, 
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

// Active game rooms
const activeRooms = [];

@WebSocketGateway({namespace: 'games'})
export class GamesGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  afterInit(server: Server) {
    console.log('Initialized gateway..');
  }
  
  handleConnection(client: Socket, ...args: any[]) {
    console.log(`Client connected: ${client.id}`);
  }
  
  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
    // Perform clean-up
  }
  
  @SubscribeMessage('createRoom')
  handleCreate(client: Socket, data: any) {
    const roomID = data.cols+'-'+data.rows+'-'+client.id;
    activeRooms[roomID] = { 
        roomID: roomID,
        numberOfPlayers: data.numberOfPlayers,
        players: [],
        count: 0,
        turn: 1,
    }
    client.emit("roomCreated", roomID);
    console.log(`CreatedRoom: ${roomID}`);
  }

  @SubscribeMessage('join')
  handleJoin(client: Socket, data: any) {
    if(activeRooms[data.roomID]) {
      activeRooms[data.roomID].count++;
      if(activeRooms[data.roomID].count <= activeRooms[data.roomID].numberOfPlayers) {
          client.join(data.roomID);
          activeRooms[data.roomID].players.push({id: activeRooms[data.roomID].count, name:data.name});
          client.emit("id", activeRooms[data.roomID].count);
          // io.of('/games').in(data.roomID).emit("joined", activeRooms[data.roomID]);
          this.server.in(data.roomID).emit("joined", activeRooms[data.roomID]);
          if(activeRooms[data.roomID].count == activeRooms[data.roomID].numberOfPlayers)
              // io.of('/games').in(data.roomID).emit("start");
              this.server.in(data.roomID).emit("start");
      }else{
          client.emit("joinError", "The game is full.");
      }
    }else{
        client.emit("joinError", "The link has expired.");
    }
  }

  @SubscribeMessage('next')
  handleNext(client: Socket, roomID: string) {
    activeRooms[roomID].turn++;
    if(activeRooms[roomID].turn > activeRooms[roomID].count)
        activeRooms[roomID].turn = 1;
    this.server.in(roomID).emit('turn', activeRooms[roomID].turn);
  }

  @SubscribeMessage('markX')
  handleMarkX(client: Socket, marked: any) {
    console.log("Marked: ", marked);
    this.server.to(marked.roomID).emit('markedX', marked);
  }

  @SubscribeMessage('markY')
  handleMarkY(client: Socket, marked: any) {
    console.log("Marked: ", marked);
    this.server.to(marked.roomID).emit('markedY', marked);
  }
  
  @SubscribeMessage('win')
  handleWin(client: Socket, data: any) {
    console.log("Winner: ", data);
    this.server.to(data.roomID).emit('winner', data);
  }
}
