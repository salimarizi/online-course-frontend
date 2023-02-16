import {
  GET_ALL_PRODUCTS,
  GET_SELECTED_PRODUCT,
  FETCH_ERROR,
} from "../constants";
import axios from "../util/Api";

export const getProducts = () => {
  return (dispatch) => {
    return axios
      .get("products")
      .then(({ data }) => {
        if (data) dispatch({ type: GET_ALL_PRODUCTS, payload: data });
        else dispatch({ type: FETCH_ERROR, payload: data.error });
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const getSelectedPost = (productId) => {
  return (dispatch) => {
    return axios
      .get(`products/${productId}`)
      .then(({ data }) => {
        if (data) dispatch({ type: GET_SELECTED_PRODUCT, payload: data });
        else dispatch({ type: FETCH_ERROR, payload: data.error });
      })
      .catch((error) => {
        throw error;
      });
  };
};
