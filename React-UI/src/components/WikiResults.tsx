import { FC, useCallback, useEffect, useState } from "react";
import axios from "axios";
import { easeIn, motion, spring } from "framer-motion";
import UseAnimations from "react-useanimations";
import loading2 from "react-useanimations/lib/loading2";
import { WikiPost } from "./WikiPost";

interface WikiResultsProps {
  summary: string | null;
}

export const WikiResults: FC<WikiResultsProps> = ({ summary }) => {
  const [posts, setPosts] = useState<{ title: string; link: string }[]>([]);

  // Callback to fetch new wikipedia links
  const fetchResults = useCallback(async () => {
    try {
      console.log("Making request to http://localhost:4217/api/context");
      const response = await axios.post(
        `http://localhost:4217/api/context`,
        {
          summary: summary,
        },
        {
          headers: { "Content-Type": "application/json" },
        },
      );
      console.log(response.data);
      const resultsPairs: [string, string][] = Object.entries(
        response.data.links,
      );
      setPosts(resultsPairs.map(([title, link]) => ({ title, link })));
    } catch (error) {
      console.log(error);
    }
  }, [summary]);

  // Get new search results when query state changes
  useEffect(() => {
    setPosts([]);
    if (summary) {
      fetchResults();
    }
  }, [summary, fetchResults]);

  return posts.length !== 0 ? (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: spring, ease: easeIn, duration: 0.2 }}
      exit={{ scale: 0 }}
      className="grid w-4/12 grid-cols-3 gap-3 py-4"
    >
      <h1 className="col-span-3 text-2xl font-extrabold text-neutral-100">
        Related Wiki Links:
      </h1>
      {posts.map((post, i) => (
        <WikiPost key={i} post={post} />
      ))}
    </motion.div>
  ) : (
    <div className="flex w-6/12 flex-col items-center justify-center py-8">
      <button
        className="inline-flex items-center rounded-lg border-2 border-reddit-orange bg-neutral-700 p-4 text-lg font-extrabold text-neutral-100 shadow-lg"
        disabled
      >
        Generating Related Posts
        <UseAnimations
          animation={loading2}
          size={48}
          strokeColor={"#FF5700"}
          fillColor={"#FF5700"}
          className="inline-block pl-3"
        />
      </button>
    </div>
  );
};
