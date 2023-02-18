import { render, screen } from "@testing-library/react";
import App from "./App";
import Banner from "./components/home/Banner";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders component in home page", () => {
  render(<Banner />);
  const pythonTitle = screen.getByText("Python");
  expect(pythonTitle).toBeInTheDocument();
});
