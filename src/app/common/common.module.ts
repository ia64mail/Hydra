import {NgModule} from '@angular/core';
import {LoggerModule, NgxLoggerLevel} from 'ngx-logger';

@NgModule({
  imports: [LoggerModule.forRoot({
    //serverLoggingUrl: '/api/logs',
    level: NgxLoggerLevel.DEBUG,
    serverLogLevel: NgxLoggerLevel.ERROR
  })],
  declarations: []
})
export class CommonModule {
}
