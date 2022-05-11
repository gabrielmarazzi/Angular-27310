
import { LoadTeacherIdSuccess, LoadTeachers, LoadTeachersSuccess } from '../actions/teacher.action';
import { createReducer, on } from "@ngrx/store";
import { TeachersState } from "src/app/classes/teachers.state";


export const InitialStateTeacher: TeachersState = {
    loading: false,
    teachers: []
};

export const TeacherReducer = createReducer(
    InitialStateTeacher,
    on(LoadTeachers, (state) => {
        return { ...state, loading: true };
    }),
    on(LoadTeachersSuccess, (state, { teachers }) => {
        //Esto fue un test solamente
        let xx = { ...state, loading: false, teachers };
        return xx;
    }),

    on(LoadTeacherIdSuccess, (state, { teachers }) => {
        return { ...state, loading: false, teachers };
    })


)
