import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseUISignInSuccess } from 'firebaseui-angular';
import { Store } from '@ngrx/store';
import { RouterLink } from '@angular/router';
import * as fromAuth from '../reducers';
import * as UserActions from '../actions/user.actions';

import { User } from '../models/user'
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';


@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.html'
})
export class LoginPageComponent implements OnInit {

    constructor(
        private afAuth: AngularFireAuth,
        private store: Store<fromAuth.State>,
        private afs: AngularFirestore) {
    }

    ngOnInit(): void {
        this.afAuth.authState.subscribe(d => console.log(d));
    }

    logout() {
        this.store.dispatch(new UserActions.LogOffAction());
    }

    successCallback(data: FirebaseUISignInSuccess) {
        this.store.dispatch(new UserActions.GetUserSuccessAction(data.currentUser));
        this.store.dispatch(new UserActions.LoginSuccessAction());
        // this.updateUserData(data.currentUser);
    }

    private updateUserData(user) {
        // Sets user data to firestore on login


        const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/12345`);
        const data: User = {
            uid: '12345',
            email: 'michael.m@gmail.com',
            displayName: 'Michael',
            photoURL: 'www.tgc.ch'
        }
        return userRef.set(data);

        
        // const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
        // const data: User = {
        //     uid: user.uid,
        //     email: user.email,
        //     displayName: user.displayName,
        //     photoURL: user.photoURL
        // }

        // return userRef.ref.set(data, { merge: true });

    }
}
