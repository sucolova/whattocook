import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSuggestions = createAsyncThunk(
    'suggestions/fetchSuggestions',
    async (fetchString) => {
        const response = await fetch(fetchString);
        const json = await response.json();
        return json;
    }
);

export const suggestionsSlice = createSlice({
    name: 'suggestions',
    initialState: {
        suggestions: [],
        status: 'nothing'
    },
    reducers: {
        deleteSuggestions: (state) => {
            state.suggestions = [];
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSuggestions.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchSuggestions.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.suggestions = action.payload;
            })
            .addCase(fetchSuggestions.rejected, (state) => {
                state.status = 'rejected';
            });
    }
});

export const { deleteSuggestions } = suggestionsSlice.actions;
export default suggestionsSlice.reducer;
export const selectSuggestions = (state) => state.suggestions.suggestions;
