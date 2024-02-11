import { FC, useEffect } from "react";
import { useState } from "react";
import { easeIn, motion, spring } from "framer-motion";

// TS Interface for Search Bar Props
interface SearchBarProps {
  query: string;
  onSearch: (userInput: string) => void;
}

export const SearchBar: FC<SearchBarProps> = ({ query, onSearch }) => {
  // State for user input to search bar
  const [userInput, setUserInput] = useState("");

  // Form handler to update state in search page component
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSearch(userInput);
  }

  // Empty user input upon reset
  useEffect(() => {
    if (!query) {
      setUserInput("");
    }
  }, [query]);

  return (
    <motion.div
      initial={{ y: -200, scale: 0 }}
      animate={{ y: 0, scale: 1 }}
      transition={{ type: spring, ease: easeIn, delay: 0.1, duration: 0.6 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      className="w-4/12 py-4"
    >
      <form id="search-form" onSubmit={handleSubmit} className="">
        <h1 className="py-4 text-2xl font-extrabold text-neutral-100">
          Search a topic or question ...
        </h1>
        <motion.input
          id="search-bar"
          type="text"
          placeholder={query}
          value={userInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserInput(e.target.value)
          }
          whileTap={{ scale: 1.2 }}
          className="w-full rounded-lg border-2 border-reddit-orange bg-neutral-700 p-4 text-lg font-bold text-neutral-100 shadow-lg focus:border-reddit-orange focus:outline-none"
        ></motion.input>
      </form>
    </motion.div>
  );
};
