import { createReducer, on } from "@ngrx/store";
import { CoursesState } from "src/app/classes/courses.state";
import { LoadCourseIdSuccess, LoadCourses, LoadCoursesSuccess } from "../actions/course.action";

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
    }),
    on(LoadCourseIdSuccess, (state, { courses }) => {
        return { ...state, loading: false, courses };
    })

)
