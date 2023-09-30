import { useSelector, useDispatch } from 'react-redux';
import { fetchSuggestions, deleteSuggestions } from '../suggestions/suggestionsSlice';
import { inputChange, selectInput } from "./formSlice";
import { Suggestions } from '../suggestions/Suggestions';
import { useEffect } from 'react';

export function Form() {
    const input = useSelector(selectInput);
    const dispatch = useDispatch();
    let fetchSuggestionsString = `https://api.spoonacular.com/food/ingredients/autocomplete?query=${input}&number=5&apiKey=5bb6bc2b3c5a4b7c9d14ffbb0854d60b`;

    useEffect(() => {
        if (input.length > 0) {
            dispatch(fetchSuggestions(fetchSuggestionsString));
        }
        if (input.length === 0) {
            dispatch(deleteSuggestions());
        }
    }, [input, dispatch, fetchSuggestionsString]);

    return (
        <div>
            <input
                aria-label="enter food"
                id='textfield'
                value={input}
                onChange={(e) => {
                    dispatch(inputChange(e.target.value));
                }
                }
            />
            <Suggestions />
        </div>
    )
}
