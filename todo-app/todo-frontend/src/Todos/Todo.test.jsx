import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/dom";
import Todo from "./Todo";

// @vitest-environment jsdom

test("renders todo text", () => {
  render(<Todo todo={{ text: "Learn Docker multi-stage builds" }} />);
  expect(screen.getByText("Learn Docker multi-stage builds")).toBeDefined();
});
