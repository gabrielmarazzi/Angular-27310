import { Students } from './students';


export interface StudentsState {
    students: Students[];
    loading: boolean;
}