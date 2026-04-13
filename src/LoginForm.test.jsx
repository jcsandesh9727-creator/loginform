import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";

describe("LoginForm Interaction Tests", () => {

  test("Typing Test - user can type email and password", async () => {
    const user = userEvent.setup();

    render(<LoginForm onSubmit={jest.fn()} />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    await user.type(emailInput, "test@example.com");
    await user.type(passwordInput, "password123");

    expect(emailInput).toHaveValue("test@example.com");
    expect(passwordInput).toHaveValue("password123");
  });

  test("Happy Path - form submits with correct data", async () => {
    const user = userEvent.setup();

    const mockSubmit = jest.fn();

    render(<LoginForm onSubmit={mockSubmit} />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button", { name: /login/i });

    await user.type(emailInput, "test@example.com");
    await user.type(passwordInput, "password123");

    await user.click(submitButton);

    expect(mockSubmit).toHaveBeenCalledTimes(1);
    expect(mockSubmit).toHaveBeenCalledWith({
      email: "test@example.com",
      password: "password123",
    });
  });

  test("Validation Failure - shows error and does not submit", async () => {
    const user = userEvent.setup();

    const mockSubmit = jest.fn();

    render(<LoginForm onSubmit={mockSubmit} />);

    const submitButton = screen.getByRole("button", { name: /login/i });

    await user.click(submitButton);

    const errorMessage = screen.getByRole("alert");

    expect(errorMessage).toBeInTheDocument();
    expect(mockSubmit).not.toHaveBeenCalled();
  });

});