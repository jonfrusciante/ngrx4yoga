import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ComponentsModule } from './components';
import { BookEffects } from './effects/book';
import { CollectionEffects } from './effects/collection';
import { BookExistsGuard } from './guards/book-exists';

import { SelectedBookPageComponent } from './containers/selected-book-page';

import { reducers } from './reducers';
import { BooksRoutingModule, routedComponents } from './books-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule,
    BooksRoutingModule,
    StoreModule.forFeature('books', reducers),
    EffectsModule.forFeature([BookEffects, CollectionEffects]),
  ],
  declarations: [
    routedComponents,
    SelectedBookPageComponent
  ],
  providers: [BookExistsGuard],
})
export class BooksModule {}
