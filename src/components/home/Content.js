import { Container, Row } from "react-bootstrap";
import CourseList from "../course/CourseList";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCourses } from "../../actions/Course";
import { useEffect } from "react";

const Content = (props) => {
  useEffect(() => {
    props.getCourses();
  }, []);

  return (
    <Container>
      <Row className="py-4">
        <div className="col-md-12">
          <Row>
            <div className="col-md-12 text-center border-bottom">
              <h2 className="mb-3">Our Courses</h2>
            </div>
          </Row>
          <CourseList courses={props.courses_data.slice(0, 3)} />
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
