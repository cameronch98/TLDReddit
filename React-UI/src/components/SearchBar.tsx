import { FC } from "react";
import { useState } from "react";

// TS Interface for Search Bar Props
interface SearchBarProps {
  onSearch: (userInput: string) => void;
}

export const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  // State for user input to search bar
  const [userInput, setUserInput] = useState("");

  // Form handler to update state in search page component
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSearch(userInput);
  }

  return (
    <div className="w-6/12 py-4">
      <form id="search-form" onSubmit={handleSubmit} className="">
        <h1 className="py-4 text-2xl font-extrabold text-neutral-100">
          Search a topic or question ...
        </h1>
        <input
          id="search-bar"
          type="text"
          value={userInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserInput(e.target.value)
          }
          className="w-full rounded-lg border-2 border-reddit-orange bg-neutral-700 p-4 text-neutral-100 shadow-lg focus:border-reddit-orange focus:outline-none"
        ></input>
      </form>
    </div>
  );
};
