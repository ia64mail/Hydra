import {Component, OnInit} from '@angular/core';
import {
  WebSocketConnector
} from "../../../common/transport/web-socket/web-socket.connector";
import {IPayload} from "../../../common/transport/payload";
import {LoggerService} from "../../../common/logger/logger.service";

class Msg implements IPayload {
  public i: Date = new Date();
}

@Component({
  selector: 'app-ping-dashboard',
  templateUrl: './ping-dashboard.component.html',
  styleUrls: ['./ping-dashboard.component.less']
})
export class PingDashboardComponent implements OnInit {
  private messages: Array<Msg> = [];

  constructor(
    private service: WebSocketConnector,
    private logger: LoggerService) {
    service.onOpen().subscribe(
      message => {
        this.logger.info("open>", message);

        //TODO start loop
        service.Send(new Msg());
      },
      error => {
        this.logger.error("open err>", error);
      });
    service.onReceive().subscribe(
      value => {
        this.logger.info("receive> ", value);

        this.messages.push(value as Msg);

        //TODO maintain loop
        service.Send(new Msg());
      },
      error => {
        this.logger.error("receive err>", error);
      });
    service.onClose().subscribe(
      message => {
        this.logger.info("close>", message);
      },
      error => {
        this.logger.error("close err>", error);
      });
  }

  ngOnInit() {
  }

}
