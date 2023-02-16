import { GET_EXERCISE_RESULT, FETCH_ERROR } from "../constants";
import axios from "../util/Api";

export const storeExercise = (exercise) => {
  return async (dispatch) => {
    return axios
      .post("exercise", exercise)
      .then(({ data }) => {
        if (data) {
          dispatch({ type: GET_EXERCISE_RESULT, payload: data });
        } else dispatch({ type: FETCH_ERROR, payload: data.error });
      })
      .catch((error) => {
        throw error;
      });
  };
};
