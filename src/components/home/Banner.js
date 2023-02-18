import { Container, Row } from "react-bootstrap";

const Banner = () => (
  <Container>
    <Row className="py-4">
      <div className="col-md-7 d-flex align-items-center">
        <Row>
          <div className="col-md-12">
            <h3>Python</h3>
            <p>
              Python is a highly versatile and popular programming language used
              in many careers, including software development, data analysis,
              and machine learning engineering. Its increasing adoption has led
              to a rising demand for Python developers, making it a valuable
              skill to learn for anyone pursuing a career in the tech industry.
            </p>
          </div>
        </Row>
      </div>
      <div className="col-md-5">
        <img src="/banner.jpeg" alt="banner" className="img img-fluid" />
      </div>
    </Row>
  </Container>
);
export default Banner;
