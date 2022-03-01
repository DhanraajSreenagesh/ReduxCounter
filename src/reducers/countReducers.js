const initialState = { count: 0 };

const countReducers = (state = initialState, action) => {
  // console.log("$$$$", action);
  switch (action.type) {
    case "increment":
      return {
        // ...state,
        count: state.count + 1
      };

    case "decrement":
      return {
        // ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
};

export default countReducers;
