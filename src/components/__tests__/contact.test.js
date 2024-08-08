import { screen, render } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should render contact us page component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

test("Should render two input boxes from contact us page component", () => {
  render(<Contact />);

  const inputBoxes = screen.getAllByRole("textbox");

  expect(inputBoxes.length).toBe(3);
});
