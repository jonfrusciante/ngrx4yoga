import { Action } from '@ngrx/store';
import * as firebase from 'firebase/app';


export const LOG_OFF = '[User] Log Off';
export const LOG_OFF_SUCCESS = '[User] Log Off Success';
export const LOGIN = '[User] Log In';
export const LOGIN_SUCCESS = '[User] Login Success';
export const LOGIN_REDIRECT = '[Auth] Login Redirect';
export const GET_USER = '[Auth] Get User';
export const GET_USER_FAIL = '[Auth] Get User Fail';


export class LogOffAction implements Action {
  readonly type = LOG_OFF;
}

export class LogOffSuccessAction implements Action {
  readonly type = LOG_OFF_SUCCESS;
}

export class LogInAction implements Action {
  readonly type = LOGIN;
}

export class GetUserSuccessAction implements Action {
  readonly type = LOGIN_SUCCESS;

  constructor(public payload: firebase.User) { }
}

export class LoginRedirect implements Action {
  readonly type = LOGIN_REDIRECT;
}

export class GetUserAction implements Action {
  readonly type = GET_USER;
}

export class GetUserFailAction implements Action {
  readonly type = GET_USER_FAIL;
  constructor(public payload: any) { }
}


export type Actions =
  LogOffAction
  | LogOffSuccessAction
  | LogInAction
  | GetUserSuccessAction
  | LoginRedirect
  | GetUserAction
  | GetUserFailAction;
