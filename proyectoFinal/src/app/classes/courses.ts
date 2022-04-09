import { Assistants } from "./assistants";
import { Students } from "./students";
import { Teachers } from "./teachers";

export class Courses {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public difficulty: string,
        public starDate: Date,
        public endDate: Date,
        public image: string,
        public active: boolean = false
    ) { }


}
