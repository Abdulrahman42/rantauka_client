import axios from "axios";
import { API_HOST } from "react-native-dotenv";

export const getOrders = token => {
  const config = {
    headers: {
      "content-type": "multipart/form-data",
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  };
  return {
    type: "GET_ORDERS",
    payload: axios.get(`${API_HOST}/api/v1/bookings`, config)
  };
};
