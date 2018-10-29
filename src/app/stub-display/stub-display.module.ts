import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PingDashboardComponent } from './components/ping-dashboard/ping-dashboard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PingDashboardComponent],
  exports: [PingDashboardComponent],
  entryComponents: [PingDashboardComponent]
})
export class StubDisplayModule { }
