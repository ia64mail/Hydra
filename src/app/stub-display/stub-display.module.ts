import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PingDashboardComponent} from './components/ping-dashboard/ping-dashboard.component';
import {PlaySocketConnector} from "../common/transport/web-socket/play/play-socket.connector";
import {WebSocketConnector} from "../common/transport/web-socket/web-socket.connector";
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {LoggerService} from "../common/logger/logger.service";
import {NGXLogger} from 'ngx-logger';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule
  ],
  declarations: [PingDashboardComponent],
  exports: [PingDashboardComponent],
  entryComponents: [PingDashboardComponent],
  providers: [
    {provide: LoggerService, useClass: NGXLogger},
    {provide: WebSocketConnector, useClass: PlaySocketConnector}
  ]
})
export class StubDisplayModule {
}
