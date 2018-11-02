import {UUID} from 'angular2-uuid';
import {IPayload} from "../payload";

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
     * Message payload.
     */
    public payload: IPayload,
    /**
     * Message ID.
     */
    public messageId: string = UUID.UUID()) {
  }
}
