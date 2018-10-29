import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CommonModule} from "./common/common.module";
import {StubDisplayModule} from "./stub-display/stub-display.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    StubDisplayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
