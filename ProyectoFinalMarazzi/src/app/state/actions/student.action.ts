import { Students } from '../../classes/students';
import { createAction, props } from "@ngrx/store";

export const LoadStudents = createAction(
    "[STudent] Load Students"
);

export const LoadStudentsSuccess = createAction(
    "[STudent] Load Students Success",
    props<{ students: Students[] }>()
);
