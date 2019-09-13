const initialState = {
  data: [],
  isLoading: true
};

const houses = (state = initialState, actions) => {
  switch (actions.type) {
    case "GET_HOUSES":
      return {
        ...state,
        data: actions.payload,
        isLoading: true
      };
    case "GET_HOUSES_FULFILLED":
      return {
        ...state,
        data: actions.payload.data,
        isLoading: false
      };
    case "GET_HOUSES_REJECTED":
      return {
        ...state,
        error: "Error",
        isLoading: false
      };
    default:
      return state;
  }
};

export default houses;
