import { NavBar } from "./components/NavBar";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { FAQs } from "./pages/FAQs";

interface Post {
  title: string;
  id: string;
}

function App() {
  const [query, setQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState({ title: "", id: "" });

  const location = useLocation();

  // Handler for updating state when making a search
  function handleSearch(userInput: string) {
    setQuery(userInput);
    setSelectedPost({ title: "", id: "" });
  }

  // Handler for updating state when selecting post
  function handleSelectPost(post: Post) {
    setSelectedPost(post);
  }

  // Clear selected post when navigating away from search
  useEffect(() => {
    if (location.pathname !== "/search") {
      setSelectedPost({ title: "", id: "" });
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-600 font-sans">
      <AnimatePresence>
        <NavBar onSearch={handleSearch} />
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route
            path="/search"
            element={
              <Search
                query={query}
                selectedPost={selectedPost}
                onSearch={handleSearch}
                onSelectPost={handleSelectPost}
              />
            }
          />
          <Route path="/faqs" element={<FAQs />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
