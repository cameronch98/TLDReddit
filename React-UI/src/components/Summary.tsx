import { FC, useEffect, useState } from "react";
import UseAnimations from "react-useanimations";
import loading2 from "react-useanimations/lib/loading2";
import OpenAI from "openai";
import axios from "axios";
import { easeIn, motion, spring } from "framer-motion";

// TS Interfaces
interface Post {
  title: string;
  id: string;
}

interface SummaryProps {
  selectedPost: Post;
}

// Initialize openai API
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const Summary: FC<SummaryProps> = ({ selectedPost }) => {
  const [comments, setComments] = useState<string>("");
  const [summary, setSummary] = useState<string | null>("");

  // Fetch comments and reset summary upon post change
  useEffect(() => {
    setSummary("");
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/get-comments/${selectedPost.id}`,
        );
        console.log(response.data);
        setComments(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (selectedPost) {
      fetchComments();
    }
  }, [selectedPost]);

  // Generate the summary upon comment change
  useEffect(() => {
    const generateSummary = async () => {
      try {
        const completion = await openai.chat.completions.create({
          messages: [
            {
              role: "user",
              content: `Highlight the key contents of this Reddit post in 250 words or less and don't say anything until your response is ready. Focus on giving a summary with context that the original poster would care about, based on their post. You aren't presenting this to the original poster, you are presenting it to another person who wants to utilize this information. ${comments}`,
            },
          ],
          model: "gpt-4-turbo-preview",
          max_tokens: 300,
        });
        setSummary(completion.choices[0].message.content);
      } catch (error) {
        console.log(error);
      }
    };
    if (comments) {
      generateSummary();
    }
  }, [comments]);

  return summary ? (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: spring, ease: easeIn, delay: 0.2, duration: 0.6 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      className="grid w-4/12 grid-cols-1 gap-3 py-4"
    >
      <h1 className="col-span-1 text-2xl font-extrabold text-neutral-100">
        Summary:
      </h1>
      <div className="col-span-1 rounded-lg border-2 border-reddit-orange bg-neutral-700 p-4 shadow-lg">
        <p className="p-4 text-lg font-bold text-neutral-100">{summary}</p>
      </div>
    </motion.div>
  ) : (
    <div className="flex w-6/12 flex-col items-center justify-center py-8">
      <button
        className="inline-flex items-center rounded-lg border-2 border-reddit-orange bg-neutral-700 p-4 text-lg font-extrabold text-neutral-100 shadow-lg"
        disabled
      >
        Generating Summary
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
