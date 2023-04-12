import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { deleteFood, fetchRecipes, selectFood, updateFood } from "./formSlice";

export function Form() {
    const [input, setInput] = useState('');
    const food = useSelector(selectFood);
    const dispatch = useDispatch();
    let fetchString = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${food}&number=10&apiKey=5bb6bc2b3c5a4b7c9d14ffbb0854d60b`;

    return (
        <div>
            <input 
                aria-label="enter food"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                onClick={() => {
                    dispatch(updateFood(input));
                    setInput('');
                }}
            >
                enter
            </button>
            <button
                onClick={() => {
                    dispatch(fetchRecipes(fetchString));
                    dispatch(deleteFood());
                }} 
            >
                fetch
            </button>

        </div>
    )
}
