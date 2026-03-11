import { useEffect, useState } from "react";
import { getPosts } from "../api/posts";

function DiscoverPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await getPosts();
        console.log("API RESPONSE:", response.data);
        setPosts(response.data);
      } catch (err) {
        console.log("API ERROR:", err);
        setError("Failed to load posts.");
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  console.log("POSTS STATE:", posts);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h2>Discover Posts</h2>

      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <h3>{post.userName}</h3>
            <h4>{post.title}</h4>
            <p>{post.bodyText}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default DiscoverPage;