import { ActionReducerMap } from "@ngrx/store";
import { AssistantsState } from "../classes/assistants.state";
import { CoursesState } from "../classes/courses.state";
import { GradesState } from "../classes/grades.state";
import { StudentsState } from "../classes/students.state";
import { TeachersState } from "../classes/teachers.state";
import { AssistantReducer } from "./reducers/assistant.reducer";
import { CoursesReducer } from "./reducers/course.reducer";
import { GradeReducer } from "./reducers/grade.reducer.";
import { StudentReducer } from "./reducers/student.reducer";
import { TeacherReducer } from "./reducers/teacher.reducer";

export interface AppState {
    courses: CoursesState;
    students: StudentsState;
    assistants: AssistantsState;
    teachers: TeachersState;
    grades: GradesState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    courses: CoursesReducer,
    students: StudentReducer,
    assistants: AssistantReducer,
    teachers: TeacherReducer,
    grades: GradeReducer

}