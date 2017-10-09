import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './containers/login-page';


const routes: Routes = [
    {
        path: 'login',
        component: LoginPageComponent
    }
];


@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule { }


export const routedComponents = [
    LoginPageComponent
];
