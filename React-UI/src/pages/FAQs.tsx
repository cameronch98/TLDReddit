import { easeIn, motion, spring } from "framer-motion";
import { FC } from "react";

export const FAQs: FC = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-3/12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: spring, ease: easeIn, delay: 0.1, duration: 1 }}
          exit={{
            opacity: 0,
          }}
        >
          <h1 className="py-4 text-6xl font-extrabold text-reddit-orange">
            FAQS
          </h1>
          <hr className="border-reddit-orange py-4"></hr>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 2000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: spring, ease: easeIn, delay: 0.1, duration: 1 }}
          exit={{ opacity: 0 }}
        >
          <h2 className="py-4 text-4xl font-extrabold text-reddit-orange">
            What is the point of this app?
          </h2>
          <p className="py-2 text-xl font-bold text-neutral-100">
            This app was created with those that like to use Reddit as a one
            stop shop for getting thoughts or answers from real people. However,
            finding what you wanted in a post can take a bit sometimes due to
            the need to sift through comments. TLDReddit aims to take care of
            that by summarizing the key topics in the post.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -2000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: spring, ease: easeIn, delay: 0.1, duration: 1 }}
          exit={{ opacity: 0 }}
        >
          <h2 className="py-4 text-4xl font-extrabold text-reddit-orange">
            How do I use the app?
          </h2>
          <p className="py-2 text-xl font-bold text-neutral-100">
            Simply use the quick search bar, the get started button on the home
            page, or the search button in the navigation bar to perform a
            search. TLDReddit will present you with a selection of the most
            related Reddit posts. Simply select one and the synopsis of the post
            will be generated for you in real time.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 2000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: spring, ease: easeIn, delay: 0.1, duration: 1 }}
          exit={{ opacity: 0 }}
        >
          <h2 className="py-4 text-4xl font-extrabold text-reddit-orange">
            How are these summaries generated?
          </h2>
          <p className="py-2 text-xl font-bold text-neutral-100">
            The searches are performed by the Google Custom Search JSON API
            using a programmable search engine. The text from the selected post
            is pulled using the Reddit PRAW API and fed to the OpenAI API using
            model gpt-4-turbo. The queries are fine-tuned behind the scenes in
            order to get you the best summary of key points possible.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -2000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: spring, ease: easeIn, delay: 0.1, duration: 1 }}
          exit={{ opacity: 0 }}
        >
          <h2 className="py-4 text-4xl font-extrabold text-reddit-orange">
            What features are on the way?
          </h2>
          <p className="py-2 text-xl font-bold text-neutral-100">
            We plan on implementing the ability to make an account and save the
            results of your own queries, an option to see the Reddit post you
            choose on the search page via embedding, the ability to requery the
            post for specifics, and more! We understand the need to keep things
            familiar though, so the core process of the application will remain
            intact! Use the new features if you wish! If not, that’s fine too!
          </p>
        </motion.div>
      </div>
    </div>
  );
};
