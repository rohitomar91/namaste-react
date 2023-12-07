import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import ItemList from "../ItemList";
import MOCK_ITEMS_LIST from "../mocks/restaurantCategoryItems.json";

describe("ItemList component test cases", () => {
  it("should render ItemList component", () => {
    render(
      <Provider store={appStore}>
        <ItemList items={MOCK_ITEMS_LIST} />
      </Provider>
    );
    expect(screen.getAllByTestId("foodItems").length).toBe(20);
  });

  it("should render Item inside ItemList Component with all details", () => {
    render(
      <Provider store={appStore}>
        <ItemList items={MOCK_ITEMS_LIST} />
      </Provider>
    );
    expect(screen.getAllByTestId("foodItemName").length).toBe(20);

    const itemPrice = screen.getAllByTestId("foodItemPrice")[0].textContent;

    expect(itemPrice).toBe("₹160");

    const itemPriceSecond =
      screen.getAllByTestId("foodItemPrice")[1].textContent;

    expect(itemPriceSecond).toBe("₹189");
  });
});
