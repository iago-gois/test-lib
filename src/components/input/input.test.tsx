import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Input } from "./input";

describe("Input", () => {
  it("renders with accessible label", () => {
    render(
      <>
        <label htmlFor="name-input">Name</label>
        <Input id="name-input" />
      </>
    );

    expect(screen.getByLabelText("Name")).toBeInTheDocument();
  });

  it("accepts placeholder", () => {
    render(<Input placeholder="Type here" />);
    expect(screen.getByPlaceholderText("Type here")).toBeInTheDocument();
  });
});
