import {Injectable} from '@angular/core';
import {webSocket} from 'rxjs/webSocket';
import {WebSocketConnector} from "../web-socket.connector";
import {Observable, Subject} from "rxjs";
import { map } from 'rxjs/operators';
import {WebSocketSubject} from "rxjs/internal/observable/dom/WebSocketSubject";
import {SocketMessage} from "../socket.message";
import {UUID} from 'angular2-uuid';
import {PlaySocketConfig} from "./play-socket.config";
import {AbstractDto} from "../../abstract-dto";

/**
 * Akka.io Play2 framework implementation of {@link WebSocketConnector}.
 */
@Injectable()
export class PlaySocketConnector extends WebSocketConnector {
  private socketSubject: WebSocketSubject<SocketMessage>;

  private openSubject: Subject<any> = new Subject();
  private closeSubject: Subject<any> = new Subject();

  private sessionId: string;

  constructor() {
    super();

    let config = new PlaySocketConfig('ws://127.0.8.64:8080/ws', this.openSubject, this.closeSubject);
    this.socketSubject = webSocket<SocketMessage>(config);

    //manage session ID when new connection established or closed
    this.openSubject.subscribe(() => {
      this.sessionId = UUID.UUID();
    });
    this.closeSubject.subscribe(() => {
      this.sessionId = null;
    });
  }

  onClose(): Observable<any> {
    return this.closeSubject.asObservable();
  }

  onOpen(): Observable<any> {
    return this.openSubject.asObservable();
  }

  onReceive(): Observable<AbstractDto> {
    return this.socketSubject
      .pipe(map(socketMessage => socketMessage.dto));
  }

  Send(dto: AbstractDto): void {
    this.socketSubject
      .next(new SocketMessage(this.sessionId, dto));
  }
}
