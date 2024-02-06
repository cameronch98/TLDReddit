import { FC, useEffect, useState } from "react";
import OpenAI from "openai";
import axios from "axios";

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

  // Fetch comments upon post change
  useEffect(() => {
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
    fetchComments();
  }, [selectedPost]);

  // Generate the summary upon comment change
  useEffect(() => {
    const generateSummary = async () => {
      try {
        const completion = await openai.chat.completions.create({
          messages: [
            {
              role: "user",
              content: `Highlight the key contents of this Reddit post in 350 words or less and don't say anything until your response is ready. Focus on things the original poster would care about. ${comments}`,
            },
          ],
          model: "gpt-4-turbo-preview",
          max_tokens: 500,
        });
        setSummary(completion.choices[0].message.content);
      } catch (error) {
        console.log(error);
      }
    };
    generateSummary();
  }, [comments]);

  return (
    <div className="grid w-6/12 grid-cols-1 gap-3 py-4">
      <h1 className="col-span-1 text-2xl font-extrabold text-neutral-100">
        Summary:
      </h1>
      <div className="col-span-1 rounded-lg border-2 border-reddit-orange bg-neutral-700 p-4 shadow-lg">
        <p className="font-bold text-neutral-100">{summary}</p>
      </div>
    </div>
  );
};
