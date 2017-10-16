import 'rxjs/add/operator/take';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromBooks from '../reducers';
import * as book from '../actions/book';
import { Book } from '../models/book';

@Component({
  selector: 'app-find-book-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-book-search [query]="searchQuery$ | async" [searching]="loading$ | async" (search)="search($event)"></app-book-search>
    <app-book-preview-list [books]="books$ | async"></app-book-preview-list>
  `,
})
export class FindBookPageComponent {
  searchQuery$: Observable<string>;
  books$: Observable<Book[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<fromBooks.State>) {
    this.searchQuery$ = store.select(fromBooks.getSearchQuery).take(1);
    this.books$ = store.select(fromBooks.getSearchResults);
    this.loading$ = store.select(fromBooks.getSearchLoading);
  }

  search(query: string) {
    this.store.dispatch(new book.SearchAction(query));
  }
}
