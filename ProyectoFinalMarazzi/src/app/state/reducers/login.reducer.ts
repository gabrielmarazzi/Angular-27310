import { LoginState } from './../../classes/login.state';
import { createReducer, on } from "@ngrx/store";

import { LoadLogin, LoadLoginSuccess } from "../actions/login.action";

export const InitialStateLogin: LoginState = {
    loginValid: false,
    login: []
};

export const LoginReducer = createReducer(
    InitialStateLogin,
    on(LoadLogin, (state) => {
        return { ...state, loading: true };
    }),
    on(LoadLoginSuccess, (state, { login }) => {
        let xx = { ...state, loading: false, login };
        return xx;
    }),

)
