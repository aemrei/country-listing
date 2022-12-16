import { Button } from "./Button";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
  it("should render a button", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should render a button with the correct text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button")).toHaveTextContent("Click me");
  });

  it("should render a button with the correct class", () => {
    render(<Button className="myCustomClass">Click me</Button>);
    expect(screen.getByRole("button")).toHaveClass("myCustomClass");
  });
});
