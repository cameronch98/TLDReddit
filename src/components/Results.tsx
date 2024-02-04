import { FC, useEffect, useState } from "react";
import axios from "axios";
import { Post } from "./Post";

interface ResultsProps {
  query: string;
  selectedPost: string;
  onSelectPost: (url: string) => void;
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
            url: result.link,
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
    <div>
      {results.map(({ title, url }) => (
        <Post
          title={title}
          url={url}
          selectedPost={selectedPost}
          onSelectPost={onSelectPost}
        />
      ))}
    </div>
  );
};
