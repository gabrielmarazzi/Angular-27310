import { Assistants } from "./assistants";
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
        public active: boolean = false
    ) { }


}
