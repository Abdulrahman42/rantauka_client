const initialState = {
  data: undefined,
  isLoading: false
};

const orders = (state = initialState, actions) => {
  switch (actions.type) {
    case "GET_ORDERS":
      return {
        ...state,
        data: actions.payload,
        isLoading: true
      };
    case "GET_ORDERS_FULFILLED":
      return {
        data: actions.payload.data,
        isLoading: false
      };
    case "GET_ORDERS_REJECTED":
      return {
        error: "Error",
        isLoading: false
      };
    default:
      return state;
  }
};

export default orders;
