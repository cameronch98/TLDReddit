import { FC, useEffect, useState } from "react";
import axios from "axios";
import { Post } from "./Post";

interface Post {
  title: string;
  id: string;
}

interface ResultsProps {
  query: string;
  selectedPost: Post;
  onSelectPost: (post: Post) => void;
}

interface Result {
  title: string;
  link: string;
}

// Get API key and search engine id
const apiKey = import.meta.env.VITE_SEARCH_API_KEY;
const engineId = import.meta.env.VITE_SEARCH_ENGINE_ID;

// Create axios instance
const searchClient = axios.create({
  baseURL: "https://www.googleapis.com/customsearch/v1",
});

export const Results: FC<ResultsProps> = ({
  query,
  selectedPost,
  onSelectPost,
}) => {
  const [results, setResults] = useState([]);

  // Fetch search results when query state changes
  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await searchClient.get(
          `?key=${apiKey}&cx=${engineId}&q=${query}`,
        );

        setResults(
          response.data.items.map((result: Result) => ({
            title: result.title,
            id: result.link.match(/(?<=comments\/)(.+?)(?=\/)/)![1],
          })),
        );
      } catch (error) {
        console.log(error);
      }
    };
    if (query) {
      fetchResults();
    }
  }, [query]);

  console.log(results);

  return (
    <div className="grid w-6/12 grid-cols-2 gap-3 py-4">
      <h1 className="col-span-2 text-2xl font-extrabold text-neutral-100">
        Choose a post:
      </h1>
      {results.map((post, i) => (
        <Post
          key={i}
          post={post}
          selectedPost={selectedPost}
          onSelectPost={onSelectPost}
        />
      ))}
    </div>
  );
};
