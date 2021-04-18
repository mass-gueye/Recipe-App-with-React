import "./App.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRecipes, getSearch } from "./ducks/actions";
import Recipe from "./components/Recipe/recipe.component";
import Footer from "./components/Footer/footer.component";

function App() {
  const searchbox = useSelector((state) => state.field.searchField);
  const dispatch = useDispatch();

  // Event handler on form submit
  const handleChange = (e) => {
    dispatch(getSearch(e.target.value));
  };

  // Event handler on form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(searchbox);
  };

  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    dispatch(getRecipes(query));
  }, [dispatch, query]);

  return (
    <div className="App">
      <form action="" className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-bar"
          value={searchbox}
          onChange={handleChange}
          required
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div>
        <Recipe />
        <Footer />
      </div>
    </div>
  );
}

export default App;
