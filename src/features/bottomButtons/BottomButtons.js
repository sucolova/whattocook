import { useDispatch, useSelector } from "react-redux"
import { deleteFood, fetchRecipes, selectFood } from "../form/formSlice";


export function BottomButtons() {
    const dispatch = useDispatch();
    const food = useSelector(selectFood);
    let fetchIngredientsString = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${food}&number=10&apiKey=5bb6bc2b3c5a4b7c9d14ffbb0854d60b`;
    return (
        <div className="bottomButtons">
            <button
                className="searchButton"
                onClick={() => {
                    dispatch(fetchRecipes(fetchIngredientsString));
                }}
            >
                find recipes
            </button>
            <button
                className="resetButton"
                onClick={() => {
                    dispatch(deleteFood());
                }}
            >
                restart
            </button>

        </div>

    )
}
