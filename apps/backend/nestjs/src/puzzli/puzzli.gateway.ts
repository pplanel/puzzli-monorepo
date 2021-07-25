import { Logger } from '@nestjs/common';
import { ConnectedSocket, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { PlayerStates, Room } from './internal/Domain';
import { PuzzliStateMachine, StateMachine } from './internal/StateMachine';


class DefaultGateway {
  protected logger: Logger;
  store: Room[];

  @WebSocketServer()
  server: Server;


  constructor(){
    this.logger = new Logger(this.constructor.name);
    this.store = [];
  }

  afterInit() {
    this.logger.debug("Webserver inicializado");
  }
  
  handleConnection(@ConnectedSocket() client: Socket, ...args: any[]) {
    this.logger.debug(`Cliente ${client.id} connected`);
  }

  handleDisconnect(@ConnectedSocket() client: Socket){
    this.logger.debug(`Cliente ${client.id} disconnected`);
  }

}

@WebSocketGateway()
export class PuzzliGateway extends DefaultGateway{
  private state_machine: StateMachine<PlayerStates>;

  constructor(){
    super()

    let state_machine = new PuzzliStateMachine(PlayerStates);
  }

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any) {
    this.state_machine.next(() => {
      if(client.id == 1) {
        return true;
      }
    }, PlayerStates.Playing);
  }

}
