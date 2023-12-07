import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

describe("Header component test cases", () => {
  it("should render Header component with login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    // const loginBtn = screen.getByRole("button");
    // const loginBtn = screen.getByText("Logout");
    const loginBtn = screen.getByRole("button", { name: "Logout" });

    expect(loginBtn).toBeInTheDocument();
  });

  it("should render Header component with cart items as 0", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cartItems = screen.getByRole("link", {
      name: "Cart - (0 items)",
    });

    // const cartItems = screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();
  });

  it("should change logout button to login on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const logoutBtn = screen.getByRole("button", { name: "Logout" });
    fireEvent.click(logoutBtn);
    const loginBtn = screen.getByRole("button", { name: "Login" });
    expect(loginBtn).toBeInTheDocument();
  });
});
