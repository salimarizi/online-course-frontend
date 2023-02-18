import { faSadCry, faSadTear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row } from "react-bootstrap";
import CourseItem from "../course/CourseItem";

const CourseList = (props) => {
  return (
    <Row>
      <div className="col-md-12">
        {props.courses?.length ? (
          <Row className="d-flex justify-content-center gap-4 px-5 mt-4">
            {props.courses?.map((course, index) => {
              return (
                <CourseItem
                  id={course.id}
                  title={course.title}
                  description={course.description}
                  key={index}
                />
              );
            })}
          </Row>
        ) : (
          <h4 className="mt-5 text-center">
            Sorry, we can't find any course &nbsp;
            <FontAwesomeIcon icon={faSadCry} />
            <br/><br/><br/><br/><br/><br/><br/>
          </h4>
        )}
      </div>
    </Row>
  );
};
export default CourseList;
