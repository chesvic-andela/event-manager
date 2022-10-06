import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { EventsComponent } from './component/events/events.component';
import { EventFilterPipe } from './pipes/event-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
