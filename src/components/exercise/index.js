import { Container, Row } from "react-bootstrap";
import Editor from "@monaco-editor/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { storeExercise } from "../../actions/Exercise";

const Exercise = (props) => {
  const languages = ["javascript", "python"];
  const initCodes = ["console.log('Hello, World!');", "print('Hello, World!')"];

  const [language, setLanguage] = useState(languages[0]);
  const [code, setCode] = useState(initCodes[0]);

  const handleChangeLanguage = (event) => {
    const val = event.target.value;
    console.log(val);
    setLanguage(val);

    const selectedIndex = languages.indexOf(val);
    setCode(initCodes[selectedIndex]);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
  };

  const compileCode = () => {
    props.storeExercise({
      language,
      code,
    });
  };

  return (
    <Container fluid>
      <Row>
        <div className="col-md-4">
          <Row>
            <div className="col-md-12 bg-light p-2 font-semibold">
              <strong>Learn</strong>
            </div>
          </Row>
          <Row>
            <div className="col-md-12">
              <p className="px-3 mb-3" align="justify">
                A simple integrated development environment (IDE) for compiling
                Python and JavaScript code that is web-based would provide a
                platform for developers to write, test and deploy their code
                from any device with an internet connection. The web-based IDE
                would feature a code editor with syntax highlighting,
                auto-completion, and debugging capabilities for Python and
                JavaScript languages. The editor would allow for easy switching
                between the two languages and would provide a seamless coding
                experience.
              </p>
              <p className="px-3" align="justify">
                The web-based IDE would offer the added advantage of
                accessibility, allowing developers to work on their projects
                from any location and device without the need for local software
                installation. Additionally, web-based IDEs can leverage
                cloud-based infrastructure to provide scalable and reliable
                development environments. This feature can be especially helpful
                for teams collaborating on a project as it enables them to work
                on the same codebase, with real-time updates and version
                control. In conclusion, a simple web-based IDE that only
                compiles Python and JavaScript code can provide a
                cost-effective, efficient, and accessible solution for
                developers, making coding faster, easier, and more
                collaborative.
              </p>
            </div>
          </Row>
        </div>
        <Row className="col-md-4" style={{ background: "#1F1E1E" }}>
          <div className="col-md-12 py-2 text-white">script.js</div>
          <Editor
            theme="vs-dark"
            height="76vh"
            width="100%"
            language={language}
            value={code}
            onChange={setCode}
          />
          <div className="col-md-12 my-2">
            <Row>
              <div className="col-md-2">
                <button className="btn btn-primary" onClick={compileCode}>
                  Run
                </button>
              </div>
              <div className="col-md-2">
                <button className="btn btn-dark" onClick={copyCode}>
                  <FontAwesomeIcon icon={faCopy} />
                </button>
              </div>
              <div className="col-md-3"></div>
              <div className="col-md-4 ml-4">
                <select className="form-select" onChange={handleChangeLanguage}>
                  {languages.map((lang, index) => {
                    return (
                      <option value={lang} key={index}>
                        {lang.charAt(0).toUpperCase() + lang.slice(1)}
                      </option>
                    );
                  })}
                </select>
              </div>
            </Row>
          </div>
        </Row>
        <div className="col-md-4 bg-dark">
          <Row>
            <div className="col-md-12 py-2 text-white">
              <b>Output</b>
            </div>
          </Row>
          <Row>
            <div
              className={
                "col-md-12 px-3 " +
                (props.exercise_data.status === "success"
                  ? "text-white"
                  : "text-danger")
              }
              style={{ whiteSpace: "pre-line", lineBreak: "anywhere" }}
            >
              {props.exercise_data.output}
            </div>
          </Row>
        </div>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  exercise_data: state.ExerciseReducer.exercise_data,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ storeExercise }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Exercise);
