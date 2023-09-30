import { useDispatch, useSelector } from "react-redux";
import { deleteInput, inputChange, updateFood } from "../form/formSlice";
import { deleteSuggestions, selectSuggestions } from "./suggestionsSlice";
import { v4 as uuid } from 'uuid';

export const Suggestions = () => {
    const suggestions = useSelector(selectSuggestions);
    const dispatch = useDispatch();

    const suggestionsToRender = suggestions ? suggestions.map(suggestion => {
        return <button
            onClick={() => {
                dispatch(inputChange(suggestion.name));
                dispatch(updateFood(suggestion.name));
                dispatch(deleteInput());
                dispatch(deleteSuggestions());
            }
            }
            key={uuid()}
        >{suggestion.name}</button>
    }) : <p>no suggestions</p>;

    return (
        <div className="suggestionsWrapper">
            {suggestionsToRender}
        </div>
    )
}
