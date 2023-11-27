import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Button from "./Button";

describe("App", () => {
  test("renders App component", () => {
    const { getByText } = render(<Button>Primary</Button>);
    expect(getByText("Primary")).not.toBeNull();
  });
});
