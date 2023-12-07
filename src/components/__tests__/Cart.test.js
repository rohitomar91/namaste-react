import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import Cart from "../Cart";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/restaurantMenu.json";

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(MOCK_DATA) })
);

describe("Cart component test cases", () => {
  it("should render cart component with empty cart labels", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Cart />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "See restaurants near you" }));
  });

  it("should render cart with items", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Cart />
            <RestaurantMenu />
          </Provider>
        </BrowserRouter>
      );
    });

    const foodItemsBefore = screen.getAllByTestId("foodItems");

    expect(foodItemsBefore.length).toBe(20);

    const addBtns = screen.getAllByRole("button", { name: "Add +" });
    fireEvent.click(addBtns[0]);
    fireEvent.click(addBtns[1]);

    const foodItems = screen.getAllByTestId("foodItems");
    const clearCartBtn = screen.getByRole("button", { name: "Clear Cart" });

    expect(clearCartBtn).toBeInTheDocument();
    expect(foodItems.length).toBe(22);
  });
});
