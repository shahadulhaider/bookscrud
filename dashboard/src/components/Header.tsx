import { FC } from "react";

export const Header: FC = () => {
  return (
    <header>
      <nav className="shadow-lg py-6 bg-emerald-600  flex items-center w-full">
        <a href="/" className="text-white font-light text-4xl mx-16 lg:mx-72">
          dashboard
        </a>
      </nav>
    </header>
  );
};
