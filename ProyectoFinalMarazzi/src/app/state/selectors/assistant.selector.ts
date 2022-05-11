import { AssistantsState } from 'src/app/classes/assistants.state';
import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const getAssistants = (state: AppState) => state.assistants;

export const selectorLoadingAssistants = createSelector(
    getAssistants,
    (state: AssistantsState) => state.loading
);

export const selectAssistants = createSelector(
    getAssistants,
    (state: AssistantsState) => state.assistants
);


export const selectAssistantId = createSelector(
    getAssistants,
    (state: AssistantsState) => state.assistants
);