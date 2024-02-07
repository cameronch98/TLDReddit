import { FC } from "react";
import { Home } from "../pages/Home";
import { Search } from "../pages/Search";
import { FAQs } from "../pages/FAQs";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export const AnimatedRoutes: FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
    </AnimatePresence>
  );
};
