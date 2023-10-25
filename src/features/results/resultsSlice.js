import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchRecipe = createAsyncThunk(
    'results/fetchRecipe',
    async (id) => {
        const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=5bb6bc2b3c5a4b7c9d14ffbb0854d60b`);
        const json = await response.json();
        return json;
    }
);

export const resultsSlice = createSlice({
    name: 'results',
    initialState: {
        recipe: [],
        status: 'nothing'
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipe.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchRecipe.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.recipe = action.payload;
            })
            .addCase(fetchRecipe.rejected, (state) => {
                state.status = 'rejected';
            });
    }
});

export default resultsSlice.reducer;
export const selectRecipe = (state) => state.results.recipe;