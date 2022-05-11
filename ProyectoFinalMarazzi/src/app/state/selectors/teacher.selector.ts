import { TeachersState } from 'src/app/classes/teachers.state';
import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const getTeachers = (state: AppState) => state.teachers;

export const selectorLoadingTeachers = createSelector(
    getTeachers,
    (state: TeachersState) => state.loading
);

export const selectTeachers = createSelector(
    getTeachers,
    (state: TeachersState) => state.teachers
);

export const selectTeacherId = createSelector(
    getTeachers,
    (state: TeachersState) => state.teachers
);