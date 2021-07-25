import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HealthcheckComponent } from '../libs/healthcheck/healthcheck.component';
import { HealthcheckModule } from '../libs/healthcheck/healthcheck.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HealthcheckComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HealthcheckModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
