import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import searchField from "./reducers/field";
import recipe from "./reducers/recipe";

const reducers = combineReducers({
  field: searchField,
  recipe,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
