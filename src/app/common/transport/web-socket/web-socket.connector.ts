import {Observable} from "rxjs";
import {AbstractDto} from "../abstract-dto";

/**
 *
 */
export abstract class WebSocketConnector {

  /**
   *
   */
  abstract onOpen(): Observable<any>;

  /**
   *
   */
  abstract onClose(): Observable<any>;


  /**
   *
   */
  abstract onReceive(): Observable<AbstractDto>;

  /**
   *
   * @param message
   * @constructor
   */
  abstract Send(message: AbstractDto): void;
}
