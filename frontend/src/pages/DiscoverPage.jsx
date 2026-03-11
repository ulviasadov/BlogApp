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
    <div className="blogs">
      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="blog-container">
            <div className="user-info">
              <img src={`http://localhost:5033${post.imageUrl}`} alt="Profile picture" className="profile-picture" />
              <h5>{post.userName}</h5>
            </div>
            <h4>{post.title}</h4>
            <hr />
            <p>{post.bodyText}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default DiscoverPage;