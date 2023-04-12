import { useSelector } from "react-redux"
import { selectRecipes } from "../form/formSlice"

export const Results = () => {
    const recipes = useSelector(selectRecipes);

    const recipesToRender = recipes ? recipes.map(recipe => {
        return <p>{recipe.title}</p>
    }) : 'empty';

    return(
        <div>
            {recipesToRender}
        </div>
    )
}
