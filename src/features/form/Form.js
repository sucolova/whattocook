//import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchSuggestions } from '../suggestions/suggestionsSlice';
import { deleteFood, fetchRecipes, selectFood, updateFood, inputChange, selectInput, deleteInput } from "./formSlice";
import { useEffect } from 'react';

export function Form() {
    const food = useSelector(selectFood);
    const input = useSelector(selectInput);
    const dispatch = useDispatch();
    let fetchIngredientsString = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${food}&number=10&apiKey=5bb6bc2b3c5a4b7c9d14ffbb0854d60b`;
    let fetchSuggestionsString = `https://api.spoonacular.com/food/ingredients/autocomplete?query=${input}&number=5&apiKey=5bb6bc2b3c5a4b7c9d14ffbb0854d60b`;

    useEffect(() => {
        if (input.length > 2) {
            console.log(input);
            dispatch(fetchSuggestions(fetchSuggestionsString));
        }
    }, [input, dispatch, fetchSuggestionsString]);

    return (
        <div>
            <input 
                aria-label="enter food"
                value={input}
                onChange={(e) => {
                    dispatch(inputChange(e.target.value));
                    }
                }
            />
            <button
                onClick={() => {
                    dispatch(updateFood(input));
                    dispatch(deleteInput());
                }}
            >
                enter
            </button>
            <button
                onClick={() => {
                    dispatch(fetchRecipes(fetchIngredientsString));
                    dispatch(deleteFood());
                }} 
            >
                fetch
            </button>

        </div>
    )
}
