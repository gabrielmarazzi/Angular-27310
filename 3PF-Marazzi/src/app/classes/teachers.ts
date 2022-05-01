import { Courses } from "./courses";
import { Persons } from "./persons";

export class Teachers {
    constructor(
        public id: number,
        public legajo: string,
        public person: Persons,
        public courses: Array<Courses>,
    ) { }
}
