import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../components/Button";
import { ListBooks } from "../components/ListBooks";

export const Home: FC = () => {
  return (
    <>
      <NavLink to="/create" className="flex justify-end">
        <Button className="w-1/3 mb-12 uppercase">Add new book</Button>
      </NavLink>
      <ListBooks />
    </>
  );
};
