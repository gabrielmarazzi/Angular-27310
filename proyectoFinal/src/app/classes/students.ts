import { Courses } from "./courses";
import { Grades } from "./grades";
import { Persons } from "./persons";

export class Students {
    constructor(
        public id: number,
        public legajo: string,
        public person: Persons,
        public courses: Array<Courses>,
        public grades: Array<Grades>,
        public promedioGeneral: number,

    ) { }



}

