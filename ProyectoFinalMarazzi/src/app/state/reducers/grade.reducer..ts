
import { LoadGrades, LoadGradesSuccess } from '../actions/grade.action';
import { createReducer, on } from "@ngrx/store";
import { GradesState } from "src/app/classes/grades.state";


export const InitialStateGrade: GradesState = {
    loading: false,
    grades: []
};

export const GradeReducer = createReducer(
    InitialStateGrade,
    on(LoadGrades, (state) => {
        return { ...state, loading: true };
    }),
    on(LoadGradesSuccess, (state, { grades }) => {
        //Esto fue un test solamente
        let xx = { ...state, loading: false, grades };
        return xx;
    })

)
