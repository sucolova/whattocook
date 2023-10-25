import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../features/form/formSlice';
import suggestionsReducer from '../features/suggestions/suggestionsSlice';
import resultsReducer from '../features/results/resultsSlice';

export const store = configureStore({
    reducer: {
        form: formReducer,
        suggestions: suggestionsReducer,
        results: resultsReducer
    },
});
