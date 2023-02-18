import { combineReducers } from "redux";

import CourseReducer from "./Course";
import ExerciseReducer from "./Exercise";

const reducer = combineReducers({
  CourseReducer,
  ExerciseReducer
});

export default reducer;
