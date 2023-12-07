import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import RES_MOCK_DATA from "../mocks/restaurantCardMock.json";
import "@testing-library/jest-dom";

describe("RestaurantCard Component test cases", () => {
  it("should render RestaurantCard component with props data", () => {
    render(<RestaurantCard resData={RES_MOCK_DATA} />);

    const resName = screen.getByText("KFC");

    expect(resName).toBeInTheDocument();
  });

  it("should render RestaurantCard Component with Promoted label", () => {
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    render(<RestaurantCardPromoted resData={RES_MOCK_DATA} />);

    const promoLabel = screen.getByText("Promoted");

    expect(promoLabel).toBeInTheDocument();
  });
});
