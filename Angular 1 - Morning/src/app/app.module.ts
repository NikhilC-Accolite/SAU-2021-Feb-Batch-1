import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextBoxLoggingComponent } from './text-box-logging/text-box-logging.component';
import { LogRecordsComponent } from './log-records/log-records.component';

@NgModule({
  declarations: [
    AppComponent,
    TextBoxLoggingComponent,
    LogRecordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
