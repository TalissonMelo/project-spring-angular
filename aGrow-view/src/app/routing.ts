import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientRoutes} from './client';
import { ProblemRoutes} from './problem'

export const routes: Routes = [

    {
        path: '',
        redirectTo: '/logon/client',
        pathMatch: 'full'
    },
    ...ClientRoutes,
    ...ProblemRoutes
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class Routing { }