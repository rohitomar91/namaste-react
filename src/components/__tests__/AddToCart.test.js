import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import Header from "../Header";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/restaurantMenu.json";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(MOCK_DATA) })
);

describe("Add To Cart Integration test", () => {
  it("should render restaurant menu component", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
          </Provider>
        </BrowserRouter>
      );
    });

    const accordionHeader = screen.getByText("CHICKEN CHIZZA (5)");
    expect(accordionHeader).toBeInTheDocument();
  });

  it("should click on second accordion", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
          </Provider>
        </BrowserRouter>
      );
    });
    const accordionHeader = screen.getByText("CHICKEN CHIZZA (5)");
    fireEvent.click(accordionHeader);

    const foodItems = screen.getAllByTestId("foodItems");

    expect(foodItems.length).toBe(5);
  });

  it("should be able to add menu items to cart", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
          </Provider>
        </BrowserRouter>
      );
    });

    const accordionHeader = screen.getByText("CHICKEN CHIZZA (5)");
    fireEvent.click(accordionHeader);

    const foodItems = screen.getAllByTestId("foodItems");
    const addBtns = screen.getAllByRole("button", { name: "Add +" });
    fireEvent.click(addBtns[0]);

    const cartItems = screen.getByRole("link", { name: "Cart - (1 items)" });

    expect(cartItems).toBeInTheDocument();
  });

  it("should be able to reset cart", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <Cart />
            <RestaurantMenu />
          </Provider>
        </BrowserRouter>
      );
    });

    const cartItems = screen.getByRole("link", { name: "Cart - (1 items)" });
    expect(cartItems).toBeInTheDocument();

    const clearCartBtn = screen.getByRole("button", { name: "Clear Cart" });
    fireEvent.click(clearCartBtn);

    const clearCartItems = screen.getByRole("link", {
      name: "Cart - (0 items)",
    });
    expect(clearCartItems).toBeInTheDocument();
  });
});
