import { Link } from "react-router-dom";
import { FC } from "react";

export const NavBar: FC = () => {
  return (
    <nav className="flex grow flex-row gap-10 bg-neutral-900 p-3">
      <Link
        to="/"
        className="flex items-center align-middle text-3xl font-extrabold text-reddit-orange"
      >
        TLDReddit
      </Link>
      <ul className="flex grow list-none flex-row gap-5">
        <li className="flex items-center rounded-lg bg-reddit-orange p-1">
          <Link
            to="/"
            className="align-middle text-xl font-bold text-neutral-100"
          >
            Home
          </Link>
        </li>
        <li className="flex items-center decoration-reddit-orange decoration-solid decoration-auto underline-offset-4 hover:underline">
          <Link
            to="/search"
            className="align-middle text-xl font-bold text-neutral-100"
          >
            Search
          </Link>
        </li>
        <li className="flex items-center decoration-reddit-orange decoration-solid decoration-auto underline-offset-4 hover:underline">
          <Link to="/faqs" className=" text-xl font-bold text-neutral-100">
            FAQs
          </Link>
        </li>
      </ul>
    </nav>
  );
};
