import React from "react";

function LoginForm({ onSubmit }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields required");
      return;
    }

    setError("");
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email-input">Email</label>
      <input
        id="email-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="password-input">Password</label>
      <input
        id="password-input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>

      {error && <div role="alert">{error}</div>}
    </form>
  );
}

export default LoginForm;