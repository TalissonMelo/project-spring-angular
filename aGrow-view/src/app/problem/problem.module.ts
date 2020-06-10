import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ProblemService} from './shared';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InsertProblemComponent } from './insert-problem/insert-problem.component';
import { InitialProblemComponent} from './initial-problem/initial-problem.component';
import { ViewProblemComponent } from './view-problem/view-problem.component'

@NgModule({
  declarations: [
    InsertProblemComponent, 
    InitialProblemComponent, 
    ViewProblemComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],providers:[
    ProblemService
  ]
})
export class ProblemModule { }
