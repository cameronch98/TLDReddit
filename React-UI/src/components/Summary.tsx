import { FC } from "react";

interface Post {
  title: string;
  id: string;
}

interface SummaryProps {
  selectedPost: Post;
}

export const Summary: FC<SummaryProps> = ({ selectedPost }) => {
  return <h1>{selectedPost.id}</h1>;
};
