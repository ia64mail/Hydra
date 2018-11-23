import {UUID} from 'angular2-uuid';
import {AbstractDto} from "../abstract-dto";

/**
 * Message envelope used to communicate with remote system over socket.
 */
export class SocketMessage {
  constructor(
    /**
     * Socket session ID.
     */
    public sessionId: string,
    /**
     * Message dto.
     */
    public dto: AbstractDto,
    /**
     * Message ID.
     */
    public messageId: string = UUID.UUID()) {
  }
}
