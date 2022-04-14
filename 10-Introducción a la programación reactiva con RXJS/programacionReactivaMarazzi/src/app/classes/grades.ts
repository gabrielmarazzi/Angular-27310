import { Courses } from "./courses";
import { Students } from "./students";

export class Grades {

    constructor(
        public id: number,
        public course: number,
        public grade: number,
        public date: Date,
        public descripcion: string = '',
    ) {

    }





}
