import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FindBookPageComponent } from './containers/find-book-page';
import { ViewBookPageComponent } from './containers/view-book-page';
import { CollectionPageComponent } from './containers/collection-page';

import { BookExistsGuard } from './guards/book-exists';


const routes: Routes = [
    { path: 'find', component: FindBookPageComponent },
    {
        path: ':id',
        component: ViewBookPageComponent,
        canActivate: [BookExistsGuard],
    },
    { path: '', component: CollectionPageComponent },
];


@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class BooksRoutingModule { }


export const routedComponents = [
    FindBookPageComponent,
    ViewBookPageComponent,
    CollectionPageComponent
];
