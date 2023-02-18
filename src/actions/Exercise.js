import { GET_EXERCISE_RESULT } from "../constants";
import axios from "../utils/Api";

export const storeExercise = (exercise) => {
  return async (dispatch) => {
    return axios
      .post("exercise", exercise)
      .then(({ data }) => {
        if (data.success) {
          dispatch({ 
            type: GET_EXERCISE_RESULT,
            payload: {
              status: "success",
              output: data.data
            }
          });
        }
      })
      .catch((error) => {
        dispatch({ 
          type: GET_EXERCISE_RESULT,
          payload: {
            status: "error",
            output: error.response.data.errors
          }
        });
      });
  };
};
