const initialState = {
  recipes: [],
  loading: true,
};

const recipe = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        recipes: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default recipe;
