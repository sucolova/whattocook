import { useSelector, useDispatch } from "react-redux";
import { selectRecipes } from "../form/formSlice";
import { selectRecipe } from "./resultsSlice";
import { useEffect, useState } from "react";
import { fetchRecipe } from "./resultsSlice";
import { v4 as uuidv4 } from 'uuid';

export const Results = () => {
  const recipes = useSelector(selectRecipes);
  const fetchedRecipe = useSelector(selectRecipe);
  const [recipesToRender, setRecipesToRender] = useState();
  const [clickedId, setClickedId] = useState();
  const dispatch = useDispatch();


  useEffect(() => {
    setRecipesToRender(recipes
      ? recipes.map((recipe) => {
        console.log(recipe.id, clickedId)
        if (clickedId === recipe.id) {
          return (
            <div>
              <h1>{fetchedRecipe.title}</h1>
              <ul>
                {fetchedRecipe.analyzedInstructions[0] ? fetchedRecipe.analyzedInstructions[0].steps.map((i) => {
                  return <li>{i.step}</li>
                }) : <p></p>}
              </ul>
            </div>
          );
        } else {
          return (
            <li key={recipe.id}>
              <div>
                <h3>{recipe.title}</h3>
                <img src={recipe.image} alt=""></img>
                <p>used ingredients: {recipe.usedIngredientCount}</p>
                <ul>
                  {recipe.usedIngredients.map((i) => {
                    return <li key={uuidv4()}>{i.name}</li>;
                  })}
                </ul>
                <p>missed ingredients: {recipe.missedIngredientCount}</p>
                <ul>
                  {recipe.missedIngredients.map((i) => {
                    return <li key={uuidv4()}>{i.name}</li>;
                  })}
                </ul>
                <button
                  onClick={() => {
                    setClickedId(recipe.id);
                    dispatch(fetchRecipe(recipe.id));

                  }}
                >
                  get the recipe
                </button>
              </div>
              <div></div>
            </li>
          );
        }
      })
      : ""
    )
  }, [clickedId, recipes, dispatch, fetchedRecipe.title, fetchedRecipe.analyzedInstructions]);
  return <ul>{recipesToRender}</ul>;
};
