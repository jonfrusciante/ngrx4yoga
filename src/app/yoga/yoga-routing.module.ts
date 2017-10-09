import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './containers/home-page';


const routes: Routes = [
    { path: 'home', component: HomePageComponent }

];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class YogaRoutingModule { }

export const routedComponents = [
    HomePageComponent,
];
