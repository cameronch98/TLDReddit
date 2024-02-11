import { Link, useLocation } from "react-router-dom";
import { FC } from "react";
import { QuickSearch } from "./QuickSearch";

interface NavBarProps {
  onSearch: (userInput: string) => void;
}

export const NavBar: FC<NavBarProps> = ({ onSearch }) => {
  const location = useLocation();

  return (
    <div className="grid grid-cols-3 bg-neutral-900 p-3">
      <nav className="col-span-1 flex grow flex-row gap-10 p-1">
        <Link
          to="/"
          className="flex items-center align-middle text-3xl font-extrabold text-reddit-orange"
        >
          TLDReddit
        </Link>
        <ul className="flex grow list-none flex-row gap-5">
          <li
            className={
              "flex items-center " +
              (location.pathname === "/"
                ? "rounded-lg bg-reddit-orange p-1"
                : "decoration-reddit-orange decoration-solid decoration-auto underline-offset-4 hover:underline")
            }
          >
            <Link
              to="/"
              className="align-middle text-xl font-bold text-neutral-100"
            >
              Home
            </Link>
          </li>
          <li
            className={
              "flex items-center " +
              (location.pathname === "/search"
                ? "rounded-lg bg-reddit-orange p-1"
                : "decoration-reddit-orange decoration-solid decoration-auto underline-offset-4 hover:underline")
            }
          >
            <Link
              to="/search"
              className="align-middle text-xl font-bold text-neutral-100"
            >
              Search
            </Link>
          </li>
          <li
            className={
              "flex items-center " +
              (location.pathname === "/faqs"
                ? "rounded-lg bg-reddit-orange p-1"
                : "decoration-reddit-orange decoration-solid decoration-auto underline-offset-4 hover:underline")
            }
          >
            <Link to="/faqs" className=" text-xl font-bold text-neutral-100">
              FAQs
            </Link>
          </li>
        </ul>
      </nav>
      {location.pathname !== "/search" && <QuickSearch onSearch={onSearch} />}
    </div>
  );
};
