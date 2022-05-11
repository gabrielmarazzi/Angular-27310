import { Students } from '../../classes/students';
import { createAction, props } from "@ngrx/store";

export const LoadStudents = createAction(
    "[Student] Load Students"
);

export const LoadStudentsSuccess = createAction(
    "[Student] Load Students Success",
    props<{ students: Students[] }>()
);

export const LoadStudentIdSuccess = createAction(
    "[Student] Load Student Id Success",
    props<{ students: Students[] }>()
);

export const LoadStudentsInscriptionSuccess = createAction(
    "[Student] Load Students Inscription Success",
    props<{ students: Students[] }>()
);

export const LoadStudentsNoInscriptionSuccess = createAction(
    "[Student] Load Students NO Inscription Success",
    props<{ students: Students[] }>()
);