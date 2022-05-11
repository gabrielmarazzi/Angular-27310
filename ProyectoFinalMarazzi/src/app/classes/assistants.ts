import { Courses } from "./courses";
import { Persons } from "./persons";

export class Assistants {
    constructor(
        public id: number,
        public legajo: string,
        public person: Persons,
        public courses: Array<Courses>,

    ) { }
}


export interface Assistants {
    id: number;
    legajo: string;
    person: Persons;
    courses: Courses[];

}