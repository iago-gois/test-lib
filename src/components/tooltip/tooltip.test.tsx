import { Button } from "@/components/button";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";

describe("Tooltip", () => {
  it("renders trigger content", () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Info</Button>
          </TooltipTrigger>
          <TooltipContent>Helpful text</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );

    expect(screen.getByRole("button", { name: "Info" })).toBeInTheDocument();
  });
});
