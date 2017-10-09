import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

// import * as fromBooks from '../reducers';
// import * as collection from '../actions/collection';
// import { Book } from '../models/book';

@Component({
    selector: 'app-home-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './home-page.html'
})
export class HomePageComponent { }
