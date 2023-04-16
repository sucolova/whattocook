import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import formReducer from '../features/form/formSlice';
import suggestionsReducer from '../features/suggestions/suggestionsSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        form: formReducer,
        suggestions: suggestionsReducer
    },
});
