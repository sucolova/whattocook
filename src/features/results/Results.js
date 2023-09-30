import { useSelector } from "react-redux";
import { selectRecipes } from "../form/formSlice";
import { v4 as uuid } from "uuid";

export const Results = () => {
    const recipes = useSelector(selectRecipes);

    const recipesToRender = recipes ? recipes.map(recipe => {
        return <li key={uuid()}>
            <div>
                <h3>{recipe.title}</h3>
                <img src={recipe.image} alt=""></img>
                <p>used ingredients: {recipe.usedIngredientCount}</p>
                <ul>{recipe.usedIngredients.map(i => {
                    return <li>{i.id}</li>
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
