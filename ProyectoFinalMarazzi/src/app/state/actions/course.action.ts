import { createAction, props } from "@ngrx/store";
import { Courses } from "src/app/classes/courses";

export const LoadCourses = createAction(
    "[Course] Load Courses"
);

export const LoadCoursesSuccess = createAction(
    "[Course] Load Courses Success",
    props<{ courses: Courses[] }>()
);


export const LoadCourseIdSuccess = createAction(
    "[Course] Load Course Id Success",
    props<{ courses: Courses[] }>()
);