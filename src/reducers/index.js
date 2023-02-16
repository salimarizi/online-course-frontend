import { combineReducers } from "redux";

import ProductsReducer from "./Products";
import ExerciseReducer from "./Exercise";

const reducer = combineReducers({
  ProductsReducer,
  ExerciseReducer
});

export default reducer;
