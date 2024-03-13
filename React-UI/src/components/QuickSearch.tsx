import { FC } from "react";
import { useState } from "react";
import { easeIn, spring, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

interface QuickSearchProps {
  onSearch: (userInput: string) => void;
}

export const QuickSearch: FC<QuickSearchProps> = ({ onSearch }) => {
  const [userInput, setUserInput] = useState("");
  const navigate = useNavigate();

  // Form handler to update state in search page component
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    navigate("/search");
    onSearch(userInput);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: spring, ease: easeIn, delay: 0.3, duration: 0.6 }}
      exit={{
        opacity: 0,
        transition: { delay: 0.1, duration: 0.5 },
      }}
      className="col-span-1 flex items-center justify-center gap-3 align-middle"
    >
      <form
        id="search-form"
        onSubmit={handleSubmit}
        className="inline-flex w-8/12 gap-3"
      >
        <motion.input
          id="search-bar"
          type="text"
          value={userInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserInput(e.target.value)
          }
          whileTap={{ scale: 1.01 }}
          className="w-full rounded-lg border-2 border-reddit-orange bg-neutral-700 p-1 text-lg font-bold text-neutral-100 focus:border-reddit-orange focus:outline-none"
        ></motion.input>
        <motion.button type="submit" whileTap={{ scale: 1.2 }}>
          <FaSearch className=" text-2xl text-reddit-orange" />
        </motion.button>
      </form>
    </motion.div>
  );
};
