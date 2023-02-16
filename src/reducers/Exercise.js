import { GET_EXERCISE_RESULT } from "../constants";

const INIT_STATE = {
  exercise_data: {
    status: "success",
    output: ""
  }
};

const exercise = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_EXERCISE_RESULT: {
      return {
        ...state,
        exercise_data: action.payload,
      };
    }

    default:
      return state;
  }
};

export default exercise;