import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import RESTAURANTS_MOCK_DATA from "../mocks/restaurantsMockData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANTS_MOCK_DATA);
    },
  });
});

describe("Search Feature Integration test", () => {
  it("should render body component with search button", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const searchBtn = screen.getByRole("button", { name: "Search" });

    expect(searchBtn).toBeInTheDocument();
  });

  it("should search restaurant list for 'burger' text input", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const searchInput = screen.getByTestId("searchInput");
    const searchBtn = screen.getByRole("button", { name: "Search" });
    fireEvent.change(searchInput, { target: { value: "burger" } });
    fireEvent.click(searchBtn);

    const cardsAfterSearch = screen.getAllByTestId("restaurantCard");

    expect(cardsAfterSearch.length).toBe(1);
  });

  it("should filter top rated restaurants", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });

    const restaurantList = screen.getAllByTestId("restaurantCard");

    expect(restaurantList.length).toBe(9);

    const topRatedBtn = screen.getByRole("button", { name: "Top Rated" });
    fireEvent.click(topRatedBtn);

    const filteredRestaurantList = screen.getAllByTestId("restaurantCard");

    expect(filteredRestaurantList.length).toBe(5);
  });
});
