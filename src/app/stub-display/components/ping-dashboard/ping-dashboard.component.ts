import {Component, OnInit} from '@angular/core';
import {
  WebSocketConnector
} from "../../../common/transport/web-socket/web-socket.connector";
import {AbstractDto} from "../../../common/transport/abstract-dto";
import {LoggerService} from "../../../common/logger/logger.service";

/**
 * Test DTO message
 */
class StubDto implements AbstractDto {
  public $class: string = "volvox.messenger.server.dto.StubDto";
  public createdAt: number;
  public hopCount: number;
}

@Component({
  selector: 'app-ping-dashboard',
  templateUrl: './ping-dashboard.component.html',
  styleUrls: ['./ping-dashboard.component.less']
})
export class PingDashboardComponent implements OnInit {
  private messages: Array<StubDto> = [];

  constructor(
    private service: WebSocketConnector,
    private logger: LoggerService) {
    service.onOpen().subscribe(
      message => {
        this.logger.info("open>", message);
      },
      error => {
        this.logger.error("open err>", error);
      });
    service.onReceive().subscribe(
      value => {
        this.logger.info("receive> ", value);

        let stubDto = value as StubDto;
        this.messages.push(stubDto);

        //TODO maintain loop
        stubDto.hopCount++;
        service.Send(stubDto);
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
