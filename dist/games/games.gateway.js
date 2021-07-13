"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamesGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const activeRooms = [];
let GamesGateway = class GamesGateway {
    afterInit(server) {
        console.log('Initialized gateway..');
    }
    handleConnection(client, ...args) {
        console.log(`Client connected: ${client.id}`);
    }
    handleDisconnect(client) {
        console.log(`Client disconnected: ${client.id}`);
    }
    handleCreate(client, data) {
        const roomID = data.cols + '-' + data.rows + '-' + client.id;
        activeRooms[roomID] = {
            roomID: roomID,
            numberOfPlayers: data.numberOfPlayers,
            players: [],
            count: 0,
            turn: 1,
        };
        client.emit("roomCreated", roomID);
        console.log(`CreatedRoom: ${roomID}`);
    }
    handleJoin(client, data) {
        if (activeRooms[data.roomID]) {
            activeRooms[data.roomID].count++;
            if (activeRooms[data.roomID].count <= activeRooms[data.roomID].numberOfPlayers) {
                client.join(data.roomID);
                activeRooms[data.roomID].players.push({ id: activeRooms[data.roomID].count, name: data.name });
                client.emit("id", activeRooms[data.roomID].count);
                this.server.in(data.roomID).emit("joined", activeRooms[data.roomID]);
                if (activeRooms[data.roomID].count == activeRooms[data.roomID].numberOfPlayers)
                    this.server.in(data.roomID).emit("start");
            }
            else {
                client.emit("joinError", "The game is full.");
            }
        }
        else {
            client.emit("joinError", "The link has expired.");
        }
    }
    handleNext(client, roomID) {
        activeRooms[roomID].turn++;
        if (activeRooms[roomID].turn > activeRooms[roomID].count)
            activeRooms[roomID].turn = 1;
        this.server.in(roomID).emit('turn', activeRooms[roomID].turn);
    }
    handleMarkX(client, marked) {
        console.log("Marked: ", marked);
        this.server.to(marked.roomID).emit('markedX', marked);
    }
    handleMarkY(client, marked) {
        console.log("Marked: ", marked);
        this.server.to(marked.roomID).emit('markedY', marked);
    }
    handleWin(client, data) {
        console.log("Winner: ", data);
        this.server.to(data.roomID).emit('winner', data);
    }
};
__decorate([
    websockets_1.WebSocketServer(),
    __metadata("design:type", socket_io_1.Server)
], GamesGateway.prototype, "server", void 0);
__decorate([
    websockets_1.SubscribeMessage('createRoom'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", void 0)
], GamesGateway.prototype, "handleCreate", null);
__decorate([
    websockets_1.SubscribeMessage('join'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", void 0)
], GamesGateway.prototype, "handleJoin", null);
__decorate([
    websockets_1.SubscribeMessage('next'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, String]),
    __metadata("design:returntype", void 0)
], GamesGateway.prototype, "handleNext", null);
__decorate([
    websockets_1.SubscribeMessage('markX'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", void 0)
], GamesGateway.prototype, "handleMarkX", null);
__decorate([
    websockets_1.SubscribeMessage('markY'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", void 0)
], GamesGateway.prototype, "handleMarkY", null);
__decorate([
    websockets_1.SubscribeMessage('win'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", void 0)
], GamesGateway.prototype, "handleWin", null);
GamesGateway = __decorate([
    websockets_1.WebSocketGateway({ namespace: 'games' })
], GamesGateway);
exports.GamesGateway = GamesGateway;
//# sourceMappingURL=games.gateway.js.map