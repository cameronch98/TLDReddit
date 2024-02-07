import { FC } from "react";
import { easeIn, motion, spring } from "framer-motion";

interface Post {
  title: string;
  id: string;
}

interface PostProps {
  postNum: number;
  post: Post;
  selectedPost: Post;
  onSelectPost: (post: Post) => void;
}

export const Post: FC<PostProps> = ({
  postNum,
  post,
  selectedPost,
  onSelectPost,
}) => {
  function handleClick() {
    if (post.id !== selectedPost.id) {
      onSelectPost(post);
    }
  }

  return (
    <motion.div
      initial={
        postNum % 2 === 1 ? { x: 1000, opacity: 0 } : { x: -1000, opacity: 0 }
      }
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: spring, ease: easeIn, delay: 0.1, duration: 0.6 }}
      exit={postNum <= 4 ? { x: -200, opacity: 0 } : { x: 200, opacity: 0 }}
      whileHover={{ scale: 1.01, transition: { duration: 0.1 } }}
      whileTap={{ scale: 1.2, transition: { duration: 0.1 } }}
      onClick={handleClick}
      className={`col-span-1 rounded-lg border-2 ${selectedPost.id === post.id ? "border-reddit-orange" : "border-neutral-900"} bg-neutral-700 p-4 shadow-lg hover:border-reddit-orange`}
    >
      <p className="text-lg font-extrabold text-neutral-100">{post.title}</p>
    </motion.div>
  );
};
