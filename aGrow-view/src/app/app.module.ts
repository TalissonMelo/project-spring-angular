import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LogonComponent } from './logon/logon.component';
import { RegisterComponent } from './register/register.component';
import { InitialComponent } from './initial/initial.component';
import { InitialAdminComponent } from './initial-admin/initial-admin.component';
import { RegisterProblemComponent } from './register-problem/register-problem.component';
import { ViewProblemComponent } from './view-problem/view-problem.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    LogonComponent,
    RegisterComponent,
    InitialComponent,
    InitialAdminComponent,
    RegisterProblemComponent,
    ViewProblemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
