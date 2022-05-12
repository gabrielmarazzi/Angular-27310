import { identifierName } from "@angular/compiler";
import { Store } from "@ngrx/store";
import { AppState } from "../state/app.state";

export class Login {
    constructor(
        public id: number,
        public user: string,
        public guid: string,
        public role: number,
        public idPerson: number,
    ) { }

    public static getUserFromStore(store: Store<AppState>): string {
        let user = "";
        store.select('login').subscribe(login => {
            if (login.login.length > 0) {
                user = login.login[0].user;


            }
        });
        return user;
    }

    public static getGuidFromStore(store: Store<AppState>): string {
        let guid = "";
        store.select('login').subscribe(login => {
            if (login.login.length > 0) {
                guid = login.login[0].guid;
            }
        });
        return guid;
    }

    public static getIdFromStore(store: Store<AppState>): number {
        let id = 0;
        store.select('login').subscribe(login => {
            if (login.login.length > 0) {
                id = login.login[0].id;


            }
        });
        return id;
    }

    public static getRoleFromStore(store: Store<AppState>): number {
        let role = 0;
        store.select('login').subscribe(login => {
            if (login.login.length > 0) {
                role = login.login[0].role;
            }
        });
        return role;
    }

}
export interface Login {
    id: number;
    user: string;
    guid: string;
    role: number;
    idPerson: number;

}
