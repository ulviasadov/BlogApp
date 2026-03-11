import { useState } from "react";
import { loginUser } from "../api/account";

function LoginPage() {
  const [form, setForm] = useState({
    name: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    try {
      const response = await loginUser(form);
      setMessage(response.data.message || "Login successful");

      setForm({
        name: "",
        password: "",
      });
    } catch (err) {
      console.log(err);

      setError(
        err.response?.data?.message ||
        "Login failed. Please check your username and password."
      );
    }
  };

  return (
    <section className="page-section">
      <h2>Login</h2>

      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Username"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        <button type="submit">Login</button>
      </form>

      {message && <p className="success-text">{message}</p>}
      {error && <p className="error-text">{error}</p>}
    </section>
  );
}

export default LoginPage;