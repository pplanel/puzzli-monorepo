import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class EventsGateway {

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('events')
  handleMessage(client: any, payload: any): string {
    console.log(payload); 
    return 'Hello world!';
  }
}
