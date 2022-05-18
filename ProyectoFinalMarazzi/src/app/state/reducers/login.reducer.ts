import { createReducer, on } from "@ngrx/store";
import { LoginState } from "src/app/classes/login.state";
import { LoadLogin, LoadLoginSuccess } from "../actions/login.action";

export const InitialStateCourse: LoginState = {
    loginValid: false,
    login: []
};

export const LoginReducer = createReducer(
    InitialStateCourse,
    on(LoadLogin, (state) => {
        return { ...state, loading: true };
    }),
    on(LoadLoginSuccess, (state, { login }) => {
        //Esto fue un test solamente
        let xx = { ...state, loading: false, login };
        return xx;
    }),


)
