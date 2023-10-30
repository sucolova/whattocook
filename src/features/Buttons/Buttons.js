import { useDispatch, useSelector } from "react-redux"
import { deleteFood, deleteRecipes, fetchRecipes, selectFood, updateFood, deleteInput, selectInput } from "../form/formSlice";
import { deleteSuggestions } from "../suggestions/suggestionsSlice";


export function Buttons() {
    const dispatch = useDispatch();
    const food = useSelector(selectFood);
    const input = useSelector(selectInput);
    let fetchIngredientsString = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${food}&number=10&apiKey=5bb6bc2b3c5a4b7c9d14ffbb0854d60b`;
    return (
        <div className="buttons">
            <button
                className="searchButton"
                onClick={() => {
                    dispatch(fetchRecipes(fetchIngredientsString));
                }}
            >
                find recipes
            </button>
            <button className="addButton" onClick={() => {
                dispatch(updateFood(input));
                dispatch(deleteInput());
                dispatch(deleteSuggestions());
                document.getElementById('textfield').focus();
            }
            }>add</button>

            <button
                className="resetButton"
                onClick={() => {
                    dispatch(deleteFood());
                    dispatch(deleteRecipes());
                }}
            >
                restart
            </button>

        </div>

    )
}
