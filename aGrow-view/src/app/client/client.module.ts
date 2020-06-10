import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClientService } from './shared';

import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { InsertClientComponent } from './insert-client/insert-client.component';
import { LogonClientComponent } from './logon-client/logon-client.component'

@NgModule({
  declarations: [
    InsertClientComponent, 
    LogonClientComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ], providers: [
    ClientService
  ]
})
export class ClientModule { }
