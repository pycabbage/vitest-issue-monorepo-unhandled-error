import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Button from "./Button";

describe("Button", () => {
  test("renders Button component", () => {
    const { getByText } = render(<Button>Primary</Button>);
    expect(getByText("Primary")).not.toBeNull();
  });
});
