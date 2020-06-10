import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routing } from './routing'
import {ClientModule} from './client'
import {ProblemModule} from './problem'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    ClientModule,
    ProblemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
