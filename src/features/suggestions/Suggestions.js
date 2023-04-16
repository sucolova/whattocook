import { useSelector } from "react-redux";
import { selectSuggestions } from "./suggestionsSlice";

export const Suggestions = () => {
    const suggestions = useSelector(selectSuggestions);

    const suggestionsToRender = suggestions ? suggestions.map(suggestion => {
        return <p>{suggestion.name}</p>
    }) : <p>no suggestions</p>;

    return(
        <div>
            {suggestionsToRender}
        </div>
    )
}
