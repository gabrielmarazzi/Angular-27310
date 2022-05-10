import { Roles } from "./roles";

export class Persons {
    constructor(
        public id: number,
        public name: string,
        public lastName: string,
        public email: string,
        public password: string,
        public birthDay: Date,
        public role: Roles,
        public image: string,
        public active: boolean = false
    ) { }


}

export interface Persons {

    id: number;
    name: string;
    lastName: string;
    email: string;
    password: string;
    birthDay: Date;
    role: Roles;
    image: string;
    active: boolean;



}