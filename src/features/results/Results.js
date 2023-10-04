import { useSelector } from "react-redux";
import { selectRecipes } from "../form/formSlice";
import { useEffect, useState } from "react";

export const Results = () => {
  const recipes = useSelector(selectRecipes);
  const [recipesToRender, setRecipesToRender] = useState();
  const [clickedId, setClickedId] = useState([]);

  useEffect(() => {
   setRecipesToRender (recipes
      ? recipes.map((recipe) => {
          if (clickedId.includes(recipe.id)) {
            return (
              <div>
                <h1>found {recipe.id}</h1>
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
                      return <li>{i.name}</li>;
                    })}
                  </ul>
                  <p>missed ingredients: {recipe.missedIngredientCount}</p>
                  <ul>
                    {recipe.missedIngredients.map((i) => {
                      return <li>{i.name}</li>;
                    })}
                  </ul>
                  <button
                    onClick={() => {
                      setClickedId(clickedId.push(recipe.id));
                      console.log(clickedId);
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
  }, [clickedId, recipes]);
  return <ul>{recipesToRender}</ul>;
};
