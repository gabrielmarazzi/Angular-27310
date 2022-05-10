import { ActionReducerMap } from "@ngrx/store";
import { CoursesState } from "../classes/courses.state";
import { StudentsState } from "../classes/students.state";
import { CoursesReducer } from "./reducers/course.reducer";
import { StudentReducer } from "./reducers/student.reducer";

export interface AppState {
    courses: CoursesState;
    students: StudentsState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    courses: CoursesReducer,
    students: StudentReducer
    //se puede agregar mas de uno
    //students: StudentsState
}