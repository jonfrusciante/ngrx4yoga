import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseUISignInSuccess } from 'firebaseui-angular';
import { Store } from '@ngrx/store';
import { RouterLink } from '@angular/router';
import * as fromAuth from '../reducers';
import * as User from '../actions/user.actions';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.html'
})
export class LoginPageComponent implements OnInit {

    constructor(
        private afAuth: AngularFireAuth,
        private store: Store<fromAuth.State>) {
    }

    ngOnInit(): void {
        this.afAuth.authState.subscribe(d => console.log(d));
    }

    logout() {
        this.store.dispatch(new User.LogOffAction());
    }

    successCallback(data: FirebaseUISignInSuccess) {
        this.store.dispatch(new User.GetUserSuccessAction(data.currentUser));
        this.store.dispatch(new User.LoginSuccessAction());
    }
}
