import { StudentsState } from 'src/app/classes/students.state';
import { createSelector } from '@ngrx/store';
import { AppState } from './../app.state';

export const getStudents = (state: AppState) => state.students;


export const selectorLoadingStudents = createSelector(
    getStudents,
    (state: StudentsState) => state.loading
);

export const selectStudents = createSelector(
    getStudents,
    (state: StudentsState) => state.students
);

export const selectStudentId = createSelector(
    getStudents,
    (state: StudentsState) => state.students
);


