import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogonComponent } from './logon/logon.component';
import { RegisterComponent } from './register/register.component';
import { InitialComponent } from './initial/initial.component';
import { InitialAdminComponent } from './initial-admin/initial-admin.component';
import { ViewProblemComponent } from './view-problem/view-problem.component';
import { RegisterProblemComponent } from './register-problem/register-problem.component';

const APP_ROUTES: Routes = [
    { path: 'register/problem', component: RegisterProblemComponent },
    { path: 'view/problem', component: ViewProblemComponent },
    { path: 'initial/admin', component: InitialAdminComponent },
    { path: 'initial', component: InitialComponent },
    { path: 'insert/client', component:  RegisterComponent},
    { path: '', component: LogonComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);