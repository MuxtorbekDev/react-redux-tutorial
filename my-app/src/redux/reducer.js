const initialState = { value: 0 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        value: state.value + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        value: state.value - 1,
      };
    case "RESTART":
      return {
        ...state,
        value: (state.value = 0),
      };
    case "RANDOM":
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
