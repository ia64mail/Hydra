import {Observable} from "rxjs";
import {IPayload} from "../payload";

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
  abstract onReceive(): Observable<IPayload>;

  /**
   *
   * @param message
   * @constructor
   */
  abstract Send(message: IPayload): void;
}
