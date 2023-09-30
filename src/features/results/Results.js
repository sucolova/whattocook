import { useSelector } from "react-redux";
import { selectRecipes } from "../form/formSlice";
import { v4 as uuid } from "uuid";

export const Results = () => {
    const recipes = useSelector(selectRecipes);

    const recipesToRender = recipes ? recipes.map(recipe => {
        return <li key={uuid()}>{recipe.title}</li>
    }) : '';

    return (
        <ul>
            {recipesToRender}
        </ul>
    )
}
