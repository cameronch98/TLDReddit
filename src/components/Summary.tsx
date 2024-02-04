import { FC } from "react";

interface SummaryProps {
  selectedPost: { title: string; subreddit: string; id: string };
}

export const Summary: FC<SummaryProps> = ({ selectedPost }) => {
  return <h1>Summary</h1>;
};
