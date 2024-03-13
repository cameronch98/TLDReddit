import { easeIn, motion, spring } from "framer-motion";
import { FC } from "react";

export const FAQs: FC = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: spring, ease: easeIn, delay: 0.3, duration: 0.6 }}
        exit={{
          opacity: 0,
          scale: 0,
          transition: { delay: 0.1, duration: 0.5 },
        }}
        className="rounded-xl border-4 border-reddit-orange bg-gradient-to-r from-neutral-800 to-neutral-900 p-10 shadow-2xl sm:w-8/12 xl:w-6/12 2xl:w-5/12 2K:w-4/12 4K:w-3/12 4K:p-16"
      >
        <div>
          <h1 className="font-extrabold text-reddit-orange sm:pb-2 sm:text-xl lg:text-2xl 2K:text-3xl 4K:pb-4 4K:text-5xl">
            FAQS
          </h1>
          <hr className="border-reddit-orange sm:py-1 4K:py-2"></hr>
        </div>
        <div>
          <h2 className="font-extrabold text-reddit-orange sm:py-2 sm:text-lg lg:text-xl 2K:text-2xl 4K:py-4 4K:text-4xl">
            What is the point of this app?
          </h2>
          <p className="font-bold text-neutral-100 sm:text-sm lg:text-base 2K:text-lg 4K:text-2xl">
            This app was created for those that like to use Reddit as a one stop
            shop for getting thoughts or answers from real people. However,
            finding what you wanted in a post can take a bit sometimes due to
            the need to sift through comments. TLDReddit aims to take care of
            that by summarizing the key topics in the post.
          </p>
        </div>
        <div>
          <h2 className="font-extrabold text-reddit-orange sm:py-2 sm:text-lg lg:text-xl 2K:text-2xl 4K:py-4 4K:text-4xl">
            How do I use the app?
          </h2>
          <p className="font-bold text-neutral-100 sm:text-sm lg:text-base 2K:text-lg 4K:text-2xl">
            Simply use the quick search bar, the get started button on the home
            page, or navigate to the search page using the navigation bar to
            perform a search. TLDReddit will present you with a selection of the
            most related Reddit posts. Simply select one and the synopsis of the
            post will be generated for you in real time. You can regenerate the
            synopsis by clicking the reload button underneath the summary. Once
            the summary has been generated, related Wikipedia links based on key
            words from the summary will be generated beneath. Click one to be
            taken to the Wikipedia page in a new tab!
          </p>
        </div>
        <div>
          <h2 className="font-extrabold text-reddit-orange sm:py-2 sm:text-lg lg:text-xl 2K:text-2xl 4K:py-4 4K:text-4xl">
            How are these summaries generated?
          </h2>
          <p className="font-bold text-neutral-100 sm:text-sm lg:text-base 2K:text-lg 4K:text-2xl">
            The searches are performed by the Google Custom Search JSON API
            using a programmable search engine. The text from the selected post
            is pulled using the Reddit PRAW API and fed to the OpenAI API using
            model gpt-4-turbo. The queries are fine-tuned behind the scenes in
            order to get you the best summary of key points possible.
          </p>
        </div>
        <h2 className="font-extrabold text-reddit-orange sm:py-2 sm:text-lg lg:text-xl 2K:text-2xl 4K:py-4 4K:text-4xl">
          How quickly can I get a summary?
        </h2>
        <p className="font-bold text-neutral-100 sm:text-sm lg:text-base 2K:text-lg 4K:text-2xl">
          The search functionality operates very quickly, usually yielding
          results in under 2 seconds. Summary generation takes a bit longer,
          with most queries being processed in about 15-30 seconds!
        </p>
        <div></div>
        <h2 className="font-extrabold text-reddit-orange sm:py-2 sm:text-lg lg:text-xl 2K:text-2xl 4K:py-4 4K:text-4xl">
          How quickly can I get Wikipedia links?
        </h2>
        <p className="font-bold text-neutral-100 sm:text-sm lg:text-base 2K:text-lg 4K:text-2xl">
          The contextual Wikipedia feature should output related pages in less
          than 10 seconds after summary generation is finished!
        </p>
        <div>
          <h2 className="font-extrabold text-reddit-orange sm:py-2 sm:text-lg lg:text-xl 2K:text-2xl 4K:py-4 4K:text-4xl">
            What features are on the way?
          </h2>
          <p className="font-bold text-neutral-100 sm:text-sm lg:text-base 2K:text-lg 4K:text-2xl">
            We plan on implementing the ability to make an account and save the
            results of your own queries, an option to see the Reddit post you
            choose on the search page via embedding, the ability to requery the
            post for specifics, and more! We understand the need to keep things
            familiar though, so the core process of the application will remain
            intact! Use the new features if you wish! If not, that’s fine too!
          </p>
        </div>
      </motion.div>
    </div>
  );
};
