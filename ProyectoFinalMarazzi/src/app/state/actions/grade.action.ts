import { Grades } from '../../classes/grades';
import { createAction, props } from "@ngrx/store";

export const LoadGrades = createAction(
    "[Grade] Load Grades"
);

export const LoadGradesSuccess = createAction(
    "[Grade] Load Grades Success",
    props<{ grades: Grades[] }>()
);
