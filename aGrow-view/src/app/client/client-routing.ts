import {Routes} from '@angular/router';

import {InsertClientComponent} from './insert-client';
import {LogonClientComponent} from './logon-client'

export const ClientRoutes: Routes = [
    {
        path: 'client',
        redirectTo: 'logon/client'
    },
    {
        path: 'insert/client',
        component: InsertClientComponent 
    },
    {
        path: 'logon/client',
        component:  LogonClientComponent
    },
]