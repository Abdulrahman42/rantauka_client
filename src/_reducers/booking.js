const initialState = {
  data: undefined,
  date: undefined,
  duration: 1,
  isLoading: false
};

const booking = (state = initialState, actions) => {
  switch (actions.type) {
    case "GET_BOOKING":
      return {
        ...state,
        isLoading: true
      };
    case "GET_BOOKING_FULFILLED":
      return {
        ...state,
        data: actions.payload.data,
        isLoading: false
      };
    case "GET_BOOKING_REJECTED":
      return {
        ...state,
        data: actions.payload.data,
        isLoading: false
      };
    case "CHANGE_BOOKING_DATE":
      return {
        ...state,
        date: actions.payload
      };
    case "CHANGE_BOOKING_DURATION":
      return {
        ...state,
        duration: actions.payload
      };
    default:
      return state;
  }
};

export default booking;
