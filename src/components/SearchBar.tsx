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
    <form id="search-form" onSubmit={handleSubmit}>
      <p>Search a topic or question ...</p>
      <input
        id="search-bar"
        type="text"
        value={userInput}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUserInput(e.target.value)
        }
      ></input>
    </form>
  );
};
