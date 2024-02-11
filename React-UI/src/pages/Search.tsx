import { SearchBar } from "../components/SearchBar";
import { Results } from "../components/Results";
import { Summary } from "../components/Summary";
import { FC } from "react";

interface Post {
  title: string;
  id: string;
}

interface SearchProps {
  query: string;
  selectedPost: Post;
  onSearch: (userInput: string) => void;
  onSelectPost: (post: Post) => void;
}

export const Search: FC<SearchProps> = ({
  query,
  selectedPost,
  onSearch,
  onSelectPost,
}) => {
  return (
    <div className="my-16 flex flex-col items-center justify-center gap-3">
      <SearchBar query={query} onSearch={onSearch} />
      {query && (
        <Results
          query={query}
          selectedPost={selectedPost}
          onSelectPost={onSelectPost}
        />
      )}
      {selectedPost.id && <Summary selectedPost={selectedPost} />}
    </div>
  );
};
