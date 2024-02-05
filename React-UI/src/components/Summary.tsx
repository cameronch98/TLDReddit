import { FC, useEffect, useState } from "react";
import axios from "axios";

interface Post {
  title: string;
  id: string;
}

interface SummaryProps {
  selectedPost: Post;
}

// Create axios instance
const commentClient = axios.create({
  baseURL: "http://localhost:5000",
});

export const Summary: FC<SummaryProps> = ({ selectedPost }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await commentClient.get(
          `/get-comments/${selectedPost.id}`,
        );
        setComments(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchComments();
  }, [selectedPost]);

  return (
    <div className="grid w-6/12 grid-cols-1 gap-3">
      <h1 className="col-span-1 text-lg font-bold text-neutral-100">
        Summary:
      </h1>
      <div className="col-span-1 rounded-lg border-2 border-reddit-orange bg-neutral-700 p-4 shadow-lg">
        <p className="text-neutral-100">{Object.values(comments)}</p>
      </div>
    </div>
  );
};
