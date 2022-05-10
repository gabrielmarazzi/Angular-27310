import { createReducer, on } from "@ngrx/store";
import { CoursesState } from "src/app/classes/courses.state";
import { LoadCourses, LoadCoursesSuccess } from "../actions/course.action";

export const InitialStateCourse: CoursesState = {
    loading: false,
    courses: []
};

export const CoursesReducer = createReducer(
    InitialStateCourse,
    on(LoadCourses, (state) => {
        return { ...state, loading: true };
    }),
    on(LoadCoursesSuccess, (state, { courses }) => {
        //Esto fue un test solamente
        let xx = { ...state, loading: false, courses };
        return xx;
    })

)
