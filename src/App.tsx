import { Routes, Route, useLocation } from "react-router-dom";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import Home from "./pages/Home";
import WorkRouter from "./pages/WorkRouter";
import Blog from "./pages/Blog";
import BlogPostDetail from "./pages/BlogPostDetail";

function App() {
  const location = useLocation();
  const showHero = !location.pathname.startsWith("/works/");

  return (
    <>
      {showHero && <HeroBanner />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works/:slug" element={<WorkRouter />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPostDetail />} />
      </Routes>
    </>
  );
}

export default App;
