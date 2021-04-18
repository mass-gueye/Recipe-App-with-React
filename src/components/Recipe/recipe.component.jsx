import { useSelector } from "react-redux";
import "./recipe.styles.css";

const Recipe = () => {
  const recipes = useSelector((state) => state.recipe.recipes);
  const isLoading = useSelector((state) => state.recipe.loading);
  return (
    <div>
      {isLoading ? (
        "Loading"
      ) : (
        <div className="recipes">
          {recipes.hits.map((el, idx) => (
            <div key={idx} className="recipe">
              <h2 className="title">{el.recipe.label}</h2>
              <ol>
                {el.recipe.ingredients.map((ingredient, index) => (
                  <div key={index}>
                    <li>{ingredient.text}</li>
                  </div>
                ))}
              </ol>
              <p>Calories: {el.recipe.calories}</p>
              <img src={el.recipe.image} alt="" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Recipe;
