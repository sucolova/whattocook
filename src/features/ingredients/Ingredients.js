import { useSelector } from "react-redux";
import { selectFood } from "../form/formSlice";
import { v4 as uuid } from "uuid";

export function Ingredients() {
    const food = useSelector(selectFood);
    const foodArray = food.split(',+');

    const foodToRender = food.length > 1 ? foodArray.map((food) => {
        return <li key={uuid()}>{food}</li>;
    }) : '';


    return (
        <div className="ingredientsList">
            <h2>at Home:</h2>
            <ul>
                {foodToRender}
            </ul>
        </div>
    )
}
