import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../features/form/formSlice';
import suggestionsReducer from '../features/suggestions/suggestionsSlice';

export const store = configureStore({
    reducer: {
        form: formReducer,
        suggestions: suggestionsReducer
    },
});
