import * as fromRoot from '../../reducers';
import * as User from '../actions/user.actions';
import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UserEffects {

  @Effect()
  getAuthUser$ = this.actions$
    .ofType(User.GET_USER)
    .startWith(new User.GetUserAction())
    .switchMap(() =>
      this.af.authState
        .map((user: firebase.User) => new User.GetUserSuccessAction(user))
        .catch(error => of(new User.GetUserFailAction(error)))
    );

  @Effect()
  logoff$ = this.actions$
    .ofType(User.LOG_OFF)
    .switchMap(() => Observable.fromPromise(this.af.auth.signOut()))
    .map(() => new User.LogOffSuccessAction());

  @Effect({ dispatch: false })
  loginRedirect$ = this.actions$
    .ofType(User.LOGIN_REDIRECT, User.LOG_OFF)
    .do(() => this.router.navigate(['/login']));

  @Effect({ dispatch: false })
  loginSuccessRedirect$ = this.actions$
    .ofType(User.LOGIN_SUCCESS)
    .do(() => this.router.navigate(['/']));

  constructor(
    private actions$: Actions,
    private af: AngularFireAuth,
    private router: Router) {
  }
}

