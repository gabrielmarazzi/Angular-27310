import { CoursesState } from 'src/app/classes/courses.state';
import { createSelector } from '@ngrx/store';
import { AppState } from './../app.state';

export const getCourses = (state: AppState) => state.courses;

export const selectorLoadingCourses = createSelector(
    getCourses,
    (state: CoursesState) => state.loading
);

export const selectorCourses = createSelector(
    getCourses,
    (state: CoursesState) => state.courses
);
export const selectCourseId = createSelector(
    getCourses,
    (state: CoursesState) => state.courses
);
