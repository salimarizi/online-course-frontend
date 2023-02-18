import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import App from "./App";
import HomePage from "./pages/Home";
import ExercisePage from "./pages/Exercise";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders component in home page", () => {
  render(
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </Provider>
  );
  const pythonTitle = screen.getByText("Python");
  expect(pythonTitle).toBeInTheDocument();
});

test("renders component in exercise", () => {
  render(
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<ExercisePage />} />
        </Routes>
      </Router>
    </Provider>
  );
  const runButton = screen.getByText("Run");
  expect(runButton).toBeInTheDocument();
});
