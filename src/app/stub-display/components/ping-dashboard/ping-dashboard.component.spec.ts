import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TestCommon} from "../../../test-common.module";
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

import {PingDashboardComponent} from './ping-dashboard.component';
import getMockInstance = TestCommon.getMockInstance;
import {WebSocketConnector} from "../../../common/transport/web-socket/web-socket.connector";
import {LoggerService} from "../../../common/logger/logger.service";
import {Observable} from "rxjs";
import {IMock} from "typemoq/Api/IMock";
import {IPayload} from "../../../common/transport/payload";

/**
 *  We need stub implementation to be able to mock methods properly.
 *  See https://github.com/florinn/typemoq/issues/97 for details.
 */
class WebSocketConnectorImpl extends WebSocketConnector {
  Send(message: IPayload): void {
  }

  onClose(): Observable<any> {
    return undefined;
  }

  onOpen(): Observable<any> {
    return undefined;
  }

  onReceive(): Observable<IPayload> {
    return undefined;
  }
}

describe('PingDashboardComponent', () => {
  let component: PingDashboardComponent;
  let fixture: ComponentFixture<PingDashboardComponent>;

  /*
    Mock declarations
  */
  let webSocketConnectorMock: IMock<WebSocketConnectorImpl>;
  let loggerServiceMock: IMock<LoggerService>;

  let webSocketConnectorOnOpen: Observable<any>;
  let webSocketConnectorOnClose: Observable<any>;
  let webSocketConnectorOnReceive: Observable<any>;

  beforeEach(async(() => {
    /*
      Initialize mocks for every test
    */
    webSocketConnectorMock = getMockInstance(WebSocketConnectorImpl);
    loggerServiceMock = getMockInstance(LoggerService);

    webSocketConnectorOnOpen = new Observable<any>();
    webSocketConnectorOnClose = new Observable<any>();
    webSocketConnectorOnReceive = new Observable<any>();

    TestBed.configureTestingModule({
      imports: [MatListModule, MatCardModule],
      declarations: [PingDashboardComponent],
      providers: [
        {provide: WebSocketConnector, useValue: webSocketConnectorMock.object},
        {provide: LoggerService, useValue: loggerServiceMock.object}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    /*
      Define mock behaviour
    */
    webSocketConnectorMock
      .setup(connector => connector.onOpen())
      .returns(() => webSocketConnectorOnOpen);
    webSocketConnectorMock
      .setup(connector => connector.onClose())
      .returns(() => webSocketConnectorOnClose);
    webSocketConnectorMock
      .setup(connector => connector.onReceive())
      .returns(() => webSocketConnectorOnReceive);

    fixture = TestBed.createComponent(PingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
