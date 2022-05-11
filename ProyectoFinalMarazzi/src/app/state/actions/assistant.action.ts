import { Assistants } from '../../classes/assistants';
import { createAction, props } from "@ngrx/store";

export const LoadAssistants = createAction(
    "[Assistant] Load Assistants"
);

export const LoadAssistantsSuccess = createAction(
    "[Assistant] Load Assistants Success",
    props<{ assistants: Assistants[] }>()
);


export const LoadAssistantIdSuccess = createAction(
    "[Assistant] Load Assistant Id Success",
    props<{ assistants: Assistants[] }>()
);