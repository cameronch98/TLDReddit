import { FC } from "react";
import { Link } from "react-router-dom";

export const Home: FC = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-3/12">
        <h1 className="py-4 text-center text-7xl font-extrabold text-reddit-orange">
          Real answers. Real Fast.
        </h1>
        <p className="py-4 text-center text-4xl font-extrabold text-neutral-100">
          Tired of reading through a ton of comments, but love Reddit for
          getting answers from real people? Use our AI powered tool to get quick
          summaries of the posts pertaining to your question.
        </p>
        <div className="py-4 text-center">
          <Link to="/search">
            <button className="rounded-lg bg-reddit-orange p-3 text-2xl font-extrabold text-neutral-100">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
