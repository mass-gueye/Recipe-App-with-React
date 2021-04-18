const initialState = {
  searchField: "",
};

const searchField = (state = initialState, action = {}) => {
  switch (action.type) {
    case "CHANGE_SEARCH_FIELD":
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

export default searchField;
