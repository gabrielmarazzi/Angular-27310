import { Teachers } from '../../classes/teachers';
import { createAction, props } from "@ngrx/store";

export const LoadTeachers = createAction(
    "[Teacher] Load Teachers"
);

export const LoadTeachersSuccess = createAction(
    "[Teacher] Load Teachers Success",
    props<{ teachers: Teachers[] }>()
);

export const LoadTeacherIdSuccess = createAction(
    "[Teacher] Load Teacher Id Success",
    props<{ teachers: Teachers[] }>()
);