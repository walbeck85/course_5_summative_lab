import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";
import { describe, it, expect } from "vitest";

describe("Home", () => {
  it("displays the correct landing text", async () => {
    render(<Home />);
    expect(await screen.findByText(/vinyl vault/i)).toBeInTheDocument();
  });
});