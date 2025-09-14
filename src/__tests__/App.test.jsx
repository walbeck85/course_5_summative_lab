import { render } from "@testing-library/react";
import App from "../App";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";

describe("App", () => {
  it("renders the App component with navigation", () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(getByText(/admin portal/i)).toBeInTheDocument();
  });
});