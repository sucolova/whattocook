import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchRecipes = createAsyncThunk(
    'form/fetchRecipes',
    async (fetchString) => {
        const response = await fetch(fetchString);
        const json = await response.json();
        return json;
    }
);

export const formSlice = createSlice({
    name: 'form',
    initialState: {
        input: '',
        food: '',
        status: 'nothing',
        recipes: []
    },
    reducers: {
        updateFood: (state, action) => {
            if (state.food === '') {
                state.food += `${action.payload}`
            } else {
                state.food += `,+${action.payload}`
            }
        },
        deleteFood: (state) => {
            state.food = '';
        },
        inputChange: (state, action) => {
            state.input = action.payload;
        },
        deleteInput: (state) => {
            state.input = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipes.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchRecipes.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.recipes = action.payload;
            })
            .addCase(fetchRecipes.rejected, (state) => {
                state.status = 'rejected';
            });
    }
});

export const { updateFood, deleteFood, inputChange, deleteInput } = formSlice.actions;
export default formSlice.reducer;
export const selectFood = (state) => state.form.food;
export const selectRecipes = (state) => state.form.recipes;
export const selectInput = (state) => state.form.input;

