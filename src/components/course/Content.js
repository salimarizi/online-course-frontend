import { Container, Row } from "react-bootstrap";
import CourseList from "../course/CourseList";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCourses } from "../../actions/Course";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Content = (props) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    props.getCourses();
  }, []);

  const handleSearchTyping = (e) => {
    setSearch(e.target.value);
  }

  const handleSubmit = () => {
    props.getCourses(search);
  }

  return (
    <Container>
      <Row className="py-4">
        <div className="col-md-12">
          <Row>
            <div className="col-md-12 text-center">
              <h2 className="mb-3">All Courses</h2>
            </div>
          </Row>
          <Row className="pb-3 border-bottom d-flex">
            <div className="col-md-10 text-center">
              <input
                className="form-control"
                placeholder="Search courses you would like"
                onChange={handleSearchTyping}
              />
            </div>
            <div className="col-md-2">
              <button className="btn btn-primary" onClick={handleSubmit}>
                <FontAwesomeIcon icon={faSearch}/> Search
              </button>
            </div>
          </Row>
          <CourseList courses={props.courses_data} />
        </div>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  courses_data: state.CourseReducer.courses_data,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getCourses }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
