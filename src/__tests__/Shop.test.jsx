import { render } from "@testing-library/react";
import Shop from "../pages/Shop";
import { describe, it, expect } from "vitest";

describe("Shop", () => {
  it("renders Shop page with search bar", () => {
    const { getByPlaceholderText } = render(<Shop />);
    expect(getByPlaceholderText("Search by title or artist")).toBeInTheDocument();
  });
});