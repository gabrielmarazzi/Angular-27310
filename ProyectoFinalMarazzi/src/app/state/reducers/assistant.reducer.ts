
import { LoadAssistantIdSuccess, LoadAssistants, LoadAssistantsSuccess } from '../actions/assistant.action';
import { createReducer, on } from "@ngrx/store";
import { AssistantsState } from "src/app/classes/assistants.state";


export const InitialStateAssistant: AssistantsState = {
    loading: false,
    assistants: []
};

export const AssistantReducer = createReducer(
    InitialStateAssistant,
    on(LoadAssistants, (state) => {
        return { ...state, loading: true };
    }),
    on(LoadAssistantsSuccess, (state, { assistants }) => {
        //Esto fue un test solamente
        let xx = { ...state, loading: false, assistants };
        return xx;
    }),
    on(LoadAssistantIdSuccess, (state, { assistants }) => {
        return { ...state, loading: false, assistants };
    })

)
