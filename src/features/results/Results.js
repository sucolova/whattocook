import { useSelector, useDispatch } from "react-redux";
import { selectRecipes } from "../form/formSlice";
import { selectRecipe } from "./resultsSlice";
import { useEffect, useState } from "react";
import { fetchRecipe } from "./resultsSlice";
import { v4 as uuid } from 'uuid';

export const Results = () => {
  const recipes = useSelector(selectRecipes);
  const fetchedRecipe = useSelector(selectRecipe);
  const [recipesToRender, setRecipesToRender] = useState();
  const [clickedId, setClickedId] = useState();
  const dispatch = useDispatch();


  useEffect(() => {
    setRecipesToRender(recipes
      ? recipes.map((recipe) => {
        if (clickedId === recipe.id) {
          return (
            <li key={uuid()}>
              <div className="dish" onClick={() => {
                setClickedId(recipe.id);
                dispatch(fetchRecipe(recipe.id));
              }}>
                <h3>{recipe.title}</h3>
                <img src={recipe.image} alt=""></img>
                <h4>used ingredients: {recipe.usedIngredientCount}</h4>
                <ul>
                  {recipe.usedIngredients.map((i) => {
                    return <li key={uuid()}>{i.name}</li>;
                  })}
                </ul>
                <h4>missed ingredients: {recipe.missedIngredientCount}</h4>
                <ul>
                  {recipe.missedIngredients.map((i) => {
                    return <li key={uuid()}>{i.name}</li>;
                  })}
                </ul>
              </div>

              <div className="recipe" >
                <ul>
                  {fetchedRecipe.analyzedInstructions[0].steps ? fetchedRecipe.analyzedInstructions[0].steps.map((i) => {
                    return <li key={uuid()}>{i.step}</li>
                  }) : <p></p>}
                </ul>
              </div>

            </li>
          );
        } else {
          return (
            <li key={uuid()} className="dish" onClick={() => {
              setClickedId(recipe.id);
              dispatch(fetchRecipe(recipe.id));
            }}>
              <h3>{recipe.title}</h3>
              <img src={recipe.image} alt=""></img>
              <h4>used ingredients: {recipe.usedIngredientCount}</h4>
              <ul>
                {recipe.usedIngredients.map((i) => {
                  return <li key={uuid()}>{i.name}</li>;
                })}
              </ul>
              <h4>missed ingredients: {recipe.missedIngredientCount}</h4>
              <ul>
                {recipe.missedIngredients.map((i) => {
                  return <li key={uuid()}>{i.name}</li>;
                })}
              </ul>
            </li>
          );
        }
      })
      : ""
    )
  }, [clickedId, recipes, dispatch, fetchedRecipe.title, fetchedRecipe.analyzedInstructions]);
  return <ul className="recipesAndDishesWrapper">{recipesToRender}</ul>;
};
