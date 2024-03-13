import { FC } from "react";
import { easeIn, motion, spring } from "framer-motion";
import { Link } from "react-router-dom";

interface WikiPost {
  title: string;
  link: string;
}

interface WikiPostProps {
  post: WikiPost;
}

export const WikiPost: FC<WikiPostProps> = ({ post }) => {
  return (
    <Link to={post.link} target="_blank">
      <motion.div
        initial={{ opacity: 0, size: 0 }}
        animate={{ opacity: 1, size: 1 }}
        transition={{ type: spring, ease: easeIn, delay: 0.1, duration: 0.6 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
        whileHover={{ scale: 1.01, transition: { duration: 0.1 } }}
        whileTap={{ scale: 1.2, transition: { duration: 0.1 } }}
        className={`col-span-1 rounded-lg border-2 border-neutral-900 bg-neutral-700 p-4 shadow-lg hover:border-reddit-orange`}
      >
        <p className="text-lg font-extrabold text-neutral-100">{post.title}</p>
      </motion.div>
    </Link>
  );
};
