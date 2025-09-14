import { render, fireEvent } from "@testing-library/react";
import RecordForm from "../components/RecordForm";

test("RecordForm > submits a new record with correct data", () => {
  // Mock the alert (optional, only if alert() exists in the component)
  vi.spyOn(window, "alert").mockImplementation(() => {});

  const mockAdd = vi.fn();

  const { getByLabelText, getByText } = render(
    <RecordForm onAddRecord={mockAdd} />
  );

  fireEvent.change(getByLabelText(/title/i), { target: { value: "Test Title" } });
  fireEvent.change(getByLabelText(/artist/i), { target: { value: "Test Artist" } });
  fireEvent.change(getByLabelText(/genre/i), { target: { value: "Rock" } });
  fireEvent.change(getByLabelText(/price/i), { target: { value: "19.99" } });

  fireEvent.click(getByText(/add record/i));

  expect(mockAdd).toHaveBeenCalled();
  expect(mockAdd).toHaveBeenCalledWith({
    title: "Test Title",
    artist: "Test Artist",
    genre: "Rock",
    price: 19.99,
  });
});