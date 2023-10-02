import { useSelector } from "react-redux";
import { selectRecipes } from "../form/formSlice";

export const Results = () => {
    const recipes = useSelector(selectRecipes);

    const recipesToRender = recipes ? recipes.map(recipe => {
        return <li key={recipe.id}>
            <div>
                <h3>{recipe.title}</h3>
                <img src={recipe.image} alt=""></img>
                <p>used ingredients: {recipe.usedIngredientCount}</p>
                <ul>{recipe.usedIngredients.map(i => {
                    return <li>{i.name}</li>
                })}</ul>
                <p>missed ingredients: {recipe.missedIngredientCount}</p>
                <ul>{recipe.missedIngredients.map(i => {
                    return <li>{i.name}</li>
                })}</ul>


            </div>
        </li>
    }) : '';

    return (
        <ul>
            {recipesToRender}
        </ul>
    )
}
