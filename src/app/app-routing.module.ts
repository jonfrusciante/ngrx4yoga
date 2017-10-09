import { YogaModule } from './yoga/yoga.module';
import { AuthModule } from './auth/auth.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './yoga/containers/home-page';
import { NotFoundPageComponent } from './core/containers/not-found-page';

import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { AuthGuard } from './auth/services/auth-guard.service';
// import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'books',
        loadChildren: './books/books.module#BooksModule',
        canActivate: [AuthGuard],
        // data: { preload: true }
    },
    {
        path: '**',
        component: NotFoundPageComponent
    }
];

@NgModule({
    imports: [
        YogaModule,
        AuthModule,
        RouterModule.forRoot(
            routes,
            {
                // enableTracing: true, // <-- debugging purposes only
                // preloadingStrategy: SelectivePreloadingStrategy,

            }
        )
    ],
    exports: [
        RouterModule
    ],
    providers: [
        CanDeactivateGuard,
        // SelectivePreloadingStrategy
    ]
})
export class AppRoutingModule { }
