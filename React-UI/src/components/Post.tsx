import { FC } from "react";

interface Post {
  title: string;
  id: string;
}

interface PostProps {
  post: Post;
  selectedPost: Post;
  onSelectPost: (post: Post) => void;
}

export const Post: FC<PostProps> = ({ post, selectedPost, onSelectPost }) => {
  function handleClick() {
    if (post.id !== selectedPost.id) {
      onSelectPost(post);
    }
  }

  return (
    <div
      onClick={handleClick}
      className={`col-span-1 rounded-lg border-2 ${selectedPost.id === post.id ? "border-reddit-orange" : "border-neutral-900"} bg-neutral-700 p-4 shadow-lg hover:border-reddit-orange`}
    >
      <p className="text-neutral-100">{post.title}</p>
    </div>
  );
};
