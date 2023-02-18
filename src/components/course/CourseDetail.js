import { Container, Row, Modal } from "react-bootstrap";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getSelectedCourse } from "../../actions/Course";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CourseDetail = (props) => {
  const [show, setShow] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    props.getSelectedCourse(id);
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>All Syllabuses</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.course_data.syllabuses?.map((syllabus, index) => (
            <Row key={index}>
              <div className="col-md-12 px-4">
                <h5>{index + 1 + ". " + syllabus.title}</h5>
                <p>{syllabus.description}</p>
              </div>
            </Row>
          ))}
        </Modal.Body>
      </Modal>
      <div className="col-md-12">
        <div className="bg-dark text-white">
          <Container>
            <Row>
              <div className="col-md-8 py-5 px-2">
                <h1 className="mb-3">{props.course_data.title}</h1>
                <p>{props.course_data.description}</p>
              </div>
              <div className="col-md-4 d-flex align-items-center justify-content-center">
                <Row>
                  <Link to="/exercise">
                    <button className="btn btn-primary">
                      Enroll {props.course_data.title}
                    </button>
                  </Link>
                </Row>
              </div>
            </Row>
          </Container>
        </div>
      </div>
      <div className="col-md-12">
        <div>
          <Container>
            <Row className="py-5">
              <div className="col-md-4">
                <img
                  src="/career_path.jpeg"
                  alt="career path"
                  className="img img-fluid rounded"
                />
              </div>
              <div className="col-md-7 py-5 px-2">
                <h3>Career Path</h3>
                <p>{props.course_data.career_path}</p>
              </div>
            </Row>
            <Row>
              <div className="col-md-12 text-center border-top py-3">
                <h2 className="mb-3">Syllabus</h2>
              </div>
            </Row>
            <Row>
              <div className="col-md-8 m-auto border border-dark mb-4 bg-light">
                {props.course_data.syllabuses
                  ?.slice(0, 7)
                  ?.map((syllabus, index) => (
                    <Row className="border-bottom" key={index}>
                      <div className="col-md-2 d-flex align-items-center justify-content-center">
                        <h3>{index + 1}</h3>
                      </div>
                      <div className="col-md-9 py-4">
                        <h4>
                          <strong>{syllabus.title}</strong>
                        </h4>
                        <p>{syllabus.description}</p>
                      </div>
                    </Row>
                  ))}
                {props.course_data.syllabuses?.length > 7 && (
                  <Row>
                    <div className="col-md-12 text-center pt-3 border-top border-dark">
                      <p
                        className="text-primary"
                        style={{ cursor: "pointer" }}
                        onClick={handleShow}
                      >
                        <b>
                          See all {props.course_data.syllabuses?.length}{" "}
                          Syllabuses
                        </b>
                      </p>
                    </div>
                  </Row>
                )}
              </div>
            </Row>
            <Row>
              <div className="col-md-12 text-center border-top py-3">
                <h2 className="mb-3">Projects you'll build</h2>
              </div>
            </Row>
            <Row className="d-flex justify-content-center gap-4 px-5 mt-4 pb-5">
              {props.course_data.projects?.map((project, index) => (
                <div className="col-lg-3 border border-dark" key={index}>
                  <Row>
                    <div className="col-md-12 p-4">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                  </Row>
                </div>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  course_data: state.CourseReducer.course_data,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getSelectedCourse }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetail);
