import { render } from "@testing-library/react";
import Shop from "../pages/Shop";
import { describe, it, expect } from "vitest";

describe("Shop", () => {
  it("renders search input and heading", () => {
    const { getByPlaceholderText, getByText } = render(<Shop />);
    expect(getByPlaceholderText("Search by title or artist")).toBeInTheDocument();
    expect(getByText("Shop Our Records")).toBeInTheDocument();
  });
});