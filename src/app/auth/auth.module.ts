import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthMethods, AuthProvider, AuthProviderWithCustomConfig, FirebaseUIAuthConfig, FirebaseUIModule, CredentialHelper } from 'firebaseui-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginPageComponent } from './containers/login-page.component';
import { AuthGuard } from './services/auth-guard.service';
import { UserEffects } from './effects/user.effects';
import { reducers } from './reducers';
import { environment } from '../../environments/environment';


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


export const COMPONENTS = [LoginPageComponent];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild([{ path: 'login', component: LoginPageComponent }]),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig)
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RootAuthModule,
      providers: [AuthGuard]
    };
  }
}

@NgModule({
  imports: [
    AuthModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([UserEffects])
  ],
})
export class RootAuthModule {}
