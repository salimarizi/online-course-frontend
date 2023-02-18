import {
  GET_ALL_COURSES,
  GET_SELECTED_COURSE,
  FETCH_ERROR,
} from "../constants";
import axios from "../utils/Api";

export const getCourses = (search = "") => {
  return (dispatch) => {
    return axios
      .get("courses", { params: { q: search } })
      .then(({ data }) => {
        if (data) dispatch({ type: GET_ALL_COURSES, payload: data.data });
        else dispatch({ type: FETCH_ERROR, payload: data.error });
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const getSelectedCourse = (courseId) => {
  return (dispatch) => {
    return axios
      .get(`courses/${courseId}`)
      .then(({ data }) => {
        if (data) dispatch({ type: GET_SELECTED_COURSE, payload: data.data });
        else dispatch({ type: FETCH_ERROR, payload: data.error });
      })
      .catch((error) => {
        throw error;
      });
  };
};
