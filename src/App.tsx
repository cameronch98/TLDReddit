import Home from "./pages/Home";
import { Search } from "./pages/Search";
import { FAQs } from "./pages/FAQs";
import { NavBar } from "./components/NavBar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="h-screen bg-neutral-800 font-sans">
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/faqs" element={<FAQs />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
