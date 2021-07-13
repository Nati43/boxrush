import { OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
export declare class GamesGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    server: Server;
    afterInit(server: Server): void;
    handleConnection(client: Socket, ...args: any[]): void;
    handleDisconnect(client: Socket): void;
    handleCreate(client: Socket, data: any): void;
    handleJoin(client: Socket, data: any): void;
    handleNext(client: Socket, roomID: string): void;
    handleMarkX(client: Socket, marked: any): void;
    handleMarkY(client: Socket, marked: any): void;
    handleWin(client: Socket, data: any): void;
}
