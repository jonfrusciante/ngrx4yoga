import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthMethods, AuthProvider, AuthProviderWithCustomConfig, FirebaseUIAuthConfig, FirebaseUIModule, CredentialHelper } from 'firebaseui-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthGuard } from './services/auth-guard.service';
import { UserEffects } from './effects/user.effects';
import { reducers } from './reducers';
import { environment } from '../../environments/environment';
import { AuthRoutingModule, routedComponents } from './auth-routing.module';


const firebaseUiAuthConfig: FirebaseUIAuthConfig = {
  providers: [
    AuthProvider.Google,
    AuthProvider.Facebook,
    AuthProvider.Password
  ],
  method: AuthMethods.Redirect,
  tos: '<your-tos-link>',
  credentialHelper: CredentialHelper.AccountChooser
};


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([UserEffects])
  ],
  declarations: [routedComponents],
  exports: [routedComponents]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [AuthGuard]
    };
  }
}
