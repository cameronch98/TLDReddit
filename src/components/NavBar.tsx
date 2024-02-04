import { Link } from "react-router-dom";
import { FC } from "react";

export const NavBar: FC = () => {
  return (
    <nav className="flex grow flex-row gap-10 bg-neutral-900 p-3">
      <Link
        to="/"
        className="align-middle text-xl font-extrabold text-reddit-orange"
      >
        TLDReddit
      </Link>
      <ul className="flex grow list-none flex-row gap-5">
        <li className="decoration-reddit-orange decoration-solid decoration-auto underline-offset-4 hover:underline">
          <Link
            to="/"
            className="align-middle text-base font-bold text-neutral-100"
          >
            Home
          </Link>
        </li>
        <li className="decoration-reddit-orange decoration-solid decoration-auto underline-offset-4 hover:underline">
          <Link
            to="/search"
            className="align-middle text-base font-bold text-neutral-100"
          >
            Search
          </Link>
        </li>
        <li className="decoration-reddit-orange decoration-solid decoration-auto underline-offset-4 hover:underline">
          <Link
            to="/faqs"
            className="align-middle text-base font-bold text-neutral-100"
          >
            FAQs
          </Link>
        </li>
      </ul>
    </nav>
  );
};
