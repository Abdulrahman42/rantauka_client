import axios from "axios";
import { API_HOST } from "react-native-dotenv";

export const getHouses = () => {
  return {
    type: "GET_HOUSES",
    payload: axios.get(`${API_HOST}/api/v1/houses`)
  };
};
