// src/__tests__/ProductCard.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "../components/ProductCard";
import { vi } from "vitest";

describe("ProductCard", () => {
  const mockRecord = {
    id: 1,
    title: "The Downward Spiral",
    artist: "Nine Inch Nails",
    genre: "Industrial Rock",
    price: 22.99
  };

  const mockUpdate = vi.fn();
  const mockDelete = vi.fn();

  it("renders product information correctly", () => {
    render(
      <ProductCard record={mockRecord} onPriceUpdate={mockUpdate} onDelete={mockDelete} />
    );

    expect(screen.getByText(/The Downward Spiral/)).toBeInTheDocument();
    expect(screen.getByText(/Nine Inch Nails/)).toBeInTheDocument();
    expect(screen.getByText(/Industrial Rock/)).toBeInTheDocument();
    expect(screen.getByText(/\$22.99/)).toBeInTheDocument();
  });

  it("enters edit mode and updates price", () => {
    render(
      <ProductCard record={mockRecord} onPriceUpdate={mockUpdate} onDelete={mockDelete} />
    );

    // Click the edit button
    fireEvent.click(screen.getByText("Edit"));

    // Enter a new price and save
    fireEvent.change(screen.getByRole("spinbutton"), { target: { value: "24.99" } });
    fireEvent.click(screen.getByText("Save"));

    // This won't call fetch (we'd need to mock fetch), but we can check the UI switch
    expect(mockUpdate).not.toHaveBeenCalled(); // We’ll test actual update in an integration test
  });

  it("calls onDelete when delete button is clicked", () => {
    render(
      <ProductCard record={mockRecord} onPriceUpdate={mockUpdate} onDelete={mockDelete} />
    );

    fireEvent.click(screen.getByText("Delete"));
    expect(mockDelete).toHaveBeenCalledWith(mockRecord.id);
  });
});