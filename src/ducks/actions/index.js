import axios from "axios";

const appId = "19a58d15";
const appkey = "3ce6b8345d56a82f1e2e24a8af1b3275";
const options = {
  "Content-Encoding": "gzip",
};

export const getRecipes = (query) => async (dispatch) => {
  const request = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appkey}&from=0&to=3&calories=591-722&health=alcohol-free`;

  const res = await axios.get(request, options);
  dispatch({
    type: "GET_DATA",
    payload: res.data,
  });
};

export const getSearch = (text) => ({
  type: "CHANGE_SEARCH_FIELD",
  payload: text,
});
