import { createAction, props } from "@ngrx/store";
import { Login } from "src/app/classes/login";


export const LoadLogin = createAction(
    "[Login] Load login"
);

export const LoadLoginSuccess = createAction(
    "[Login] Load login Success",
    props<{ login: Login[] }>()
);


