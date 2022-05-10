import { Assistants } from "./assistants";
import { Clases } from "./clases";
import { Students } from "./students";
import { Teachers } from "./teachers";

export class Courses {
    constructor(
        public id: number,
        public camada: string,
        public name: string,
        public description: string,
        public difficulty: string,
        public startDate: Date,
        public endDate: Date,
        public image: string,
        public active: boolean = false,
        public assistants: Assistants[] = [],
        public students: Students[] = [],
        public teachers: Teachers[] = [],
        public clases: Clases[] = []
    ) { }


}

//Interface para Redux

export interface Courses {

    id: number;
    camada: string;
    name: string;
    description: string;
    difficulty: string;
    startDate: Date;
    endDate: Date;
    image: string;
    active: boolean;
    assistants: Assistants[];
    students: Students[];
    teachers: Teachers[];
    clases: Clases[];



}