import { FC, useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Post } from "./Post";
import { easeIn, motion, spring } from "framer-motion";

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

const apiKey = import.meta.env.VITE_SEARCH_API_KEY;
const engineId = import.meta.env.VITE_SEARCH_ENGINE_ID;

const searchClient = axios.create({
  baseURL: "https://www.googleapis.com/customsearch/v1",
});

export const Results: FC<ResultsProps> = ({
  query,
  selectedPost,
  onSelectPost,
}) => {
  const [results, setResults] = useState([]);

  // Callback to fetch new search results
  const fetchResults = useCallback(async () => {
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
  }, [query]);

  // Fetch and set new search results when query state changes
  useEffect(() => {
    setResults([]);
    if (query) {
      fetchResults();
    }
  }, [query, fetchResults]);

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: spring, ease: easeIn, duration: 0.2 }}
      exit={{ scale: 0 }}
      className="grid w-4/12 grid-cols-2 gap-3 py-4"
    >
      <h1 className="col-span-2 text-2xl font-extrabold text-neutral-100">
        Choose a post:
      </h1>
      {results.map((post, i) => (
        <Post
          key={i}
          postNum={i}
          post={post}
          selectedPost={selectedPost}
          onSelectPost={onSelectPost}
        />
      ))}
    </motion.div>
  );
};
