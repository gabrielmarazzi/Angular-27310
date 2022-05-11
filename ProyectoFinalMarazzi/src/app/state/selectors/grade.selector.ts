import { GradesState } from 'src/app/classes/grades.state';
import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const getGrades = (state: AppState) => state.grades;

export const selectorLoadingGrades = createSelector(
    getGrades,
    (state: GradesState) => state.loading
);

export const selectGrades = createSelector(
    getGrades,
    (state: GradesState) => state.grades
);