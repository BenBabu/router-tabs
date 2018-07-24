import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterTabsModule} from '../../dist/router-tabs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
