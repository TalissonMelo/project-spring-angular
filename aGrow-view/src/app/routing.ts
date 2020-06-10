import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientRoutes} from './client'

export const routes: Routes = [

    {
        path: '',
        redirectTo: '/logon/client',
        pathMatch: 'full'
    },
    ...ClientRoutes
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class Routing { }