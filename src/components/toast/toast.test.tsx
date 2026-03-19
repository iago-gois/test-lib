import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Toast, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "./toast";

describe("Toast", () => {
  it("renders title and description", async () => {
    render(
      <ToastProvider>
        <Toast open>
          <ToastTitle>Saved</ToastTitle>
          <ToastDescription>Your changes were saved.</ToastDescription>
        </Toast>
        <ToastViewport />
      </ToastProvider>
    );

    expect(await screen.findByText("Saved")).toBeInTheDocument();
    expect(await screen.findByText("Your changes were saved.")).toBeInTheDocument();
  });
});
