import { FC } from "react";
import { Link } from "react-router-dom";
import { easeInOut, spring, motion } from "framer-motion";

export const Home: FC = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: spring,
          ease: easeInOut,
          duration: 0.5,
          delay: 0.8,
        }}
        exit={{
          opacity: 0,
          scale: 0,
          transition: {
            type: spring,
            ease: easeInOut,
            duration: 0.5,
          },
        }}
        className="flex flex-col items-center justify-center rounded-full border-4 border-reddit-orange bg-gradient-to-r from-neutral-800 to-neutral-900 p-10 shadow-2xl sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-[416px] lg:w-[416px] xl:h-[512px] xl:w-[512px] 2xl:h-[576px] 2xl:w-[576px] 1080p:h-[704px] 1080p:w-[704px] 2K:h-[832px] 2K:w-[832px] 4K:h-[1040px] 4K:w-[1040px]"
      >
        <h1 className="text-center font-extrabold text-reddit-orange sm:text-lg sm:max-lg:py-1 md:text-xl lg:text-2xl lg:max-1080p:py-2 xl:text-3xl 2xl:text-4xl 1080p:py-3 1080p:text-5xl 2K:text-6xl 4K:py-4 4K:text-7xl">
          Real answers. Real Fast.
        </h1>
        <p className="text-center font-extrabold text-neutral-100 sm:text-xs sm:max-lg:py-1 md:text-sm lg:text-base lg:max-1080p:py-2 xl:text-lg 2xl:text-xl 1080p:py-3 1080p:text-2xl 2K:text-3xl 4K:py-4 4K:text-4xl">
          Tired of reading through a ton of comments, but love Reddit for
          getting answers from real people? Use our AI powered tool to get quick
          summaries of the posts pertaining to your question.
        </p>
        <div className="text-center sm:max-lg:py-1 lg:max-1080p:py-3 1080p:py-4 4K:py-5">
          <Link to="/search">
            <button className="rounded-full bg-reddit-orange font-extrabold text-neutral-100 shadow-xl sm:text-xs sm:max-lg:p-2 md:text-sm lg:p-3 lg:text-base xl:text-lg 2xl:text-xl 1080p:text-2xl 2K:text-3xl 4K:p-4 4K:text-4xl">
              Get Started
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
