import { GET_ALL_COURSES, GET_SELECTED_COURSE } from "../constants";

const INIT_STATE = {
  courses_data: [
    {
      id: 0,
      title: "",
      description: "",
      career_path: "",
      syllabuses: [],
      projects: [],
    },
  ],
  course_data: {
    id: 0,
    title: "",
    description: "",
    career_path: "",
    syllabuses: [],
    projects: [],
  },
};

const course = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_COURSES: {
      return {
        ...state,
        courses_data: action.payload,
      };
    }

    case GET_SELECTED_COURSE: {
      return {
        ...state,
        course_data: action.payload,
      };
    }

    default:
      return state;
  }
};

export default course;
