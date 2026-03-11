import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DiscoverPage from "./pages/DiscoverPage";
import CreatePostPage from "./pages/CreatePostPage";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/posts" element={<DiscoverPage />} />
          <Route path="/create-post" element={<CreatePostPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;