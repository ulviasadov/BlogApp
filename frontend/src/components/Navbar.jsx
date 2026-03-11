import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="logo">Blog App</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/posts">Discover</Link>
          <Link to="/create-post">Create Post</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;