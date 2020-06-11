import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ProblemService} from './shared';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InsertProblemComponent } from './insert-problem/insert-problem.component';
import { InitialProblemComponent} from './initial-problem/initial-problem.component';
import { ViewProblemComponent } from './view-problem/view-problem.component';
import { AdminProblemComponent } from './admin-problem/admin-problem.component'

@NgModule({
  declarations: [
    InsertProblemComponent, 
    InitialProblemComponent, 
    ViewProblemComponent,
     AdminProblemComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],providers:[
    ProblemService
  ]
})
export class ProblemModule { }
