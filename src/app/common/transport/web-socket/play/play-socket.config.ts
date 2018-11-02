import {WebSocketSubjectConfig} from "rxjs/webSocket";
import {SocketMessage} from "../socket.message";
import {NextObserver, Subject} from "rxjs";
import {WebSocketMessage} from "rxjs/internal/observable/dom/WebSocketSubject";

/**
 * Akka.io Play2 framework implementation of {@link WebSocketSubjectConfig}.
 */
export class PlaySocketConfig implements WebSocketSubjectConfig<SocketMessage> {
  openObserver: NextObserver<Event>;
  closeObserver: NextObserver<CloseEvent>;
  serializer: (value: SocketMessage) => WebSocketMessage;
  deserializer: (e: MessageEvent) => SocketMessage;

  url: string;

  constructor(url: string, openConnectionObserver: Subject<any>, closeConnectionObserver: Subject<any>) {
    this.url = url;

    this.openObserver = openConnectionObserver;
    this.closeObserver = closeConnectionObserver;

    this.serializer = message => JSON.stringify(message);
    this.deserializer = messageEvent => JSON.parse(messageEvent.data) as SocketMessage;
  }
}
