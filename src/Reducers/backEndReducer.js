const backEndReducer = (state = [], action) => {
  switch (action.type) {
    case "DATA":
      return state.concat(action.payload);
    default:
      return state;
  }
};

export default backEndReducer;
