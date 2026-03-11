import { useState } from "react";
import { registerUser } from "../api/account";

function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    imageFile: null,
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setForm((prev) => {
      return {
        ...prev,
        [name]: files ? files[0] : value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    try {
      const formData = new FormData();
      formData.append("Name", form.name);
      formData.append("Email", form.email);
      formData.append("Password", form.password);

      if (form.imageFile) {
        formData.append("ImageFile", form.imageFile);
      }

      const response = await registerUser(formData);
      setMessage(response.data.message || "Register successful");

      setForm({
        name: "",
        email: "",
        password: "",
        imageFile: null,
      });

      e.target.reset();
    } catch (err) {
      console.log(err);

      setError(
        err.response?.data?.message ||
        "Register failed. Please check your data."
      );
    }
  };

  return (
    <section className="page-section">
      <h2>Register</h2>

      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Username"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        <input
          type="file"
          name="imageFile"
          accept=".jpg,.jpeg,.png"
          onChange={handleChange}
        />

        <button type="submit">Register</button>
      </form>

      {message && <p className="success-text">{message}</p>}
      {error && <p className="error-text">{error}</p>}
    </section>
  );
}

export default RegisterPage;