import { useState } from "react";
import { createPost } from "../api/posts";

function CreatePostPage() {
  const [form, setForm] = useState({
    title: "",
    bodyText: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    try {
      const response = await createPost(form);
      setMessage(response.data.message || "Post created successfully");

      setForm({
        title: "",
        bodyText: "",
      });
    } catch (err) {
      console.log(err);

      setError(
        err.response?.data?.message || "Failed to create post."
      );
    }
  };

  return (
    <section className="page-section">
      <h2>Create Post</h2>

      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
        />

        <textarea
          name="bodyText"
          placeholder="Write your post here..."
          rows="6"
          value={form.bodyText}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Create</button>
      </form>

      {message && <p className="success-text">{message}</p>}
      {error && <p className="error-text">{error}</p>}
    </section>
  );
}

export default CreatePostPage;