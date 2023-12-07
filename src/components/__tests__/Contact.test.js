import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page test cases", () => {
  // afterAll(() => {
  //   console.log("After All");
  // });

  // afterEach(() => {
  //   console.log("After Each");
  // });

  // beforeAll(() => {
  //   console.log("Before All");
  // });

  // beforeEach(() => {
  //   console.log("Before Each Test case");
  // });

  it("should render contact us component", () => {
    render(<Contact />);

    // Querying
    const heading = screen.getByRole("heading");
    const nameField = screen.getByPlaceholderText("name");

    // Assertion
    expect(heading).toBeInTheDocument();
    expect(nameField).toBeInTheDocument();
  });

  it("should load submit button inside component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  it("should load 2 input fields", () => {
    render(<Contact />);

    //   Query;
    const inputBoxes = screen.getAllByRole("textbox");

    //   Assertion;
    expect(inputBoxes.length).toBe(2);
  });
});
