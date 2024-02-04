import { FC } from "react";

interface PostProps {
  title: string;
  url: string;
  selectedPost: string;
  onSelectPost: (url: string) => void;
}

export const Post: FC<PostProps> = ({
  title,
  url,
  selectedPost,
  onSelectPost,
}) => {
  return (
    <div onClick={}>
      <p>{title}</p>
    </div>
  );
};
