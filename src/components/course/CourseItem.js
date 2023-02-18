import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import truncate from "../../utils/Formatter";

const CourseItem = (props) => (
  <div className="col-lg-3">
    <Row>
      <div className="col-md-12 py-2 bg-primary text-white">Free Course</div>
    </Row>
    <Row className="border">
      <div className="col-md-12 py-3">
        <h4>
          <b>{props.title}</b>
        </h4>
        <p>{truncate(props.description, 240)}</p>
        <Link to={`/courses/${props.id}`}>
          <div className="d-grid">
            <button className="btn btn-primary">Detail</button>
          </div>
        </Link>
      </div>
    </Row>
  </div>
);

export default CourseItem;
