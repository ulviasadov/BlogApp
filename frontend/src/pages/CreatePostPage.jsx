function CreatePostPage() {
  return (
    <section className="page-section">
      <h2>Create Post</h2>

      <form className="form">
        <input type="text" placeholder="Title" />
        <textarea placeholder="Write your post here..." rows="6"></textarea>
        <button type="submit">Create</button>
      </form>
    </section>
  );
}

export default CreatePostPage;