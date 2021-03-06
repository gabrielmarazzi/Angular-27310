
import { LoadStudentIdSuccess, LoadStudents, LoadStudentsInscriptionSuccess, LoadStudentsNoInscriptionSuccess, LoadStudentsSuccess } from './../actions/student.action';
import { createReducer, on } from "@ngrx/store";
import { StudentsState } from "src/app/classes/students.state";


export const InitialStateStudent: StudentsState = {
    loading: false,
    students: []
};

export const StudentReducer = createReducer(
    InitialStateStudent,
    on(LoadStudents, (state) => {
        return { ...state, loading: true };
    }),
    on(LoadStudentsSuccess, (state, { students }) => {
        //Esto fue un test solamente
        let xx = { ...state, loading: false, students };
        return xx;
    }),
    on(LoadStudentIdSuccess, (state, { students }) => {
        return { ...state, loading: false, students };
    }),
    on(LoadStudentsInscriptionSuccess, (state, { students }) => {
        return { ...state, loading: false, students };
    }),
    on(LoadStudentsNoInscriptionSuccess, (state, { students }) => {
        return { ...state, loading: false, students };
    }),

)
