import { Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarker } from "@fortawesome/free-solid-svg-icons";

const Footer = () => (
  <footer className="page-footer font-small pt-4 bg-dark text-white">
    <Container>
      <Row>
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">About Us</h5>
          <p>
            Online learning is a way of obtaining education and skills through
            the internet, with access to virtual classrooms, resources, and
            instructors. It offers flexibility and accessibility to students
            regardless of their location or schedule. Its popularity has
            increased, especially due to the COVID-19 pandemic.
          </p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Features</h5>
          <ul className="list-unstyled">
            <li>
              <a
                href="#!"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Online Course
              </a>
            </li>
            <li>
              <a
                href="#!"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Live Code
              </a>
            </li>
            <li>
              <a
                href="#!"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Best Practices
              </a>
            </li>
            <li>
              <a
                href="#!"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Study Together
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Contact</h5>
          <ul className="list-unstyled">
            <li className="text-white">
              <FontAwesomeIcon icon={faPhone} /> +62 83822001
            </li>
            <li className="text-white">
              <FontAwesomeIcon icon={faEnvelope} /> salim9asmp1pdl@gmail.com
            </li>
            <li>
              <FontAwesomeIcon icon={faMapMarker} /> Indonesia
            </li>
          </ul>
        </div>
      </Row>
    </Container>

    <div className="footer-copyright text-center py-3">
      © 2020 Copyright:
      <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
    </div>
  </footer>
);

export default Footer;
