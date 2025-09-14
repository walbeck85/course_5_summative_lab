import { render } from "@testing-library/react";
import Admin from "../pages/Admin";
import { describe, it, expect } from "vitest";

describe("Admin", () => {
  it("renders the Admin form with required inputs", () => {
    const { getByLabelText, getByText } = render(<Admin />);
    expect(getByLabelText(/title/i)).toBeInTheDocument();
    expect(getByLabelText(/artist/i)).toBeInTheDocument();
    expect(getByLabelText(/genre/i)).toBeInTheDocument();
    expect(getByLabelText(/price/i)).toBeInTheDocument();
    expect(getByText(/add record/i)).toBeInTheDocument();
  });
});