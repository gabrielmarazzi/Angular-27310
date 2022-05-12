import { LoginState } from 'src/app/classes/login.state';
import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const getLogin = (state: AppState) => state.login;

export const selectorLoadingLogin = createSelector(
    getLogin,
    (state: LoginState) => state.loginValid
);

export const selectorLogin = createSelector(
    getLogin,
    (state: LoginState) => state.login
);
export const selectCourseId = createSelector(
    getLogin,
    (state: LoginState) => state.login
);
