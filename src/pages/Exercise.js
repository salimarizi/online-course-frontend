import { Container } from "react-bootstrap";
import Editor from "@monaco-editor/react";
import { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { storeExercise } from "../actions/Exercise";

const ExercisePage = (props) => {
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

  const compileCode = () => {
    props.storeExercise({
      language,
      code,
    });
  };

  return (
    <Container fluid>
      <div className="row">
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-12 bg-light p-2 font-semibold">
              <strong>Learn</strong>
            </div>
          </div>
        </div>
        <div className="col-md-4 row" style={{ background: "#1F1E1E" }}>
          <div className="col-md-12 py-2 text-white">script.js</div>
          <Editor
            theme="vs-dark"
            height="86vh"
            width="100%"
            language={language}
            value={code}
            onChange={setCode}
          />
          <div className="col-md-12 my-2">
            <div className="row">
              <div className="col-md-2">
                <button className="btn btn-primary" onClick={compileCode}>
                  Run
                </button>
              </div>
              <div className="col-md-4">
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
            </div>
          </div>
        </div>
        <div className="col-md-4 bg-dark">
          <div className="row">
            <div className="col-md-12 py-2 text-white">
              <b>Output</b>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 px-3 text-white">
              {props.exercise_data.output}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  exercise_data: state.ExerciseReducer.exercise_data,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ storeExercise }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ExercisePage);
