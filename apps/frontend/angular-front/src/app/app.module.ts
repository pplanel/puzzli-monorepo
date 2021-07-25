import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HealthcheckComponent } from '../libs/healthcheck/healthcheck.component';
import { HealthcheckModule } from '../libs/healthcheck/healthcheck.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhostL:3000/', options: { transports: ['websocket', 'polling']} };

@NgModule({
  declarations: [
    AppComponent,
    HealthcheckComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HealthcheckModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
