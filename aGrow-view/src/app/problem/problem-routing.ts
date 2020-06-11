import {Routes} from '@angular/router';
import {InitialProblemComponent} from './initial-problem';
import {InsertProblemComponent} from './insert-problem';
import {ViewProblemComponent} from './view-problem'
import { AdminProblemComponent } from './admin-problem'

export const ProblemRoutes: Routes = [
    {
        path: 'initial/problem',
        component:  InitialProblemComponent
    },
    {
        path: 'insert/problem',
        component:  InsertProblemComponent
    },
    {
        path: 'view/problem',
        component:  ViewProblemComponent
    },
    {
        path: 'admin/problem',
        component:  AdminProblemComponent
    },
]