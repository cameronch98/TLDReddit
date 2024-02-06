import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { Results } from "../components/Results";
import { Summary } from "../components/Summary";
import { FC } from "react";

interface Post {
  title: string;
  id: string;
}

export const Search: FC = () => {
  const [query, setQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState({ title: "", id: "" });

  function handleSearch(userInput: string) {
    setQuery(userInput);
    setSelectedPost({ title: "", id: "" });
  }

  function handleSelectPost(post: Post) {
    setSelectedPost(post);
  }

  return (
    <div className="my-16 flex flex-col items-center justify-center gap-3">
      <SearchBar onSearch={handleSearch} />
      {query && (
        <Results
          query={query}
          selectedPost={selectedPost}
          onSelectPost={handleSelectPost}
        />
      )}
      {selectedPost.id && <Summary selectedPost={selectedPost} />}
    </div>
  );
};
