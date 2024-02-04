import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { Results } from "../components/Results";
import { FC } from "react";

export const Search: FC = () => {
  const [query, setQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState("");

  function handleSearch(userInput: string) {
    setQuery(userInput);
  }

  function handleSelectPost(url: string) {
    setSelectedPost(url);
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Results
        query={query}
        selectedPost={selectedPost}
        onSelectPost={handleSelectPost}
      />
    </div>
  );
};
