import { AxiosError } from "axios";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import useSWR from "swr";
import { Book } from "../types";
import { fetcher } from "../utils";
import { Button } from "./Button";
import { Spinner } from "./Spinner";

export const ListBooks: FC = () => {
  const url = "http://localhost:8000/api/books";
  const { data, error, mutate } = useSWR<Book[], AxiosError>(url, fetcher);
  mutate();

  if (error) {
    return <div>Something went wrong! {error.message}</div>;
  }

  const books = data ?? [];

  return (
    <>
      {!error && !data && <Spinner />}
      <ul>
        {books &&
          books.map((book) => (
            <li
              key={book.id}
              className="px-4 py-4 grid grid-cols-4 bg-gray-100  odd:bg-gray-300"
            >
              <div>{book.title}</div>
              <div>{book.author}</div>
              <div>{book.status}</div>
              <NavLink to={`/update/${book.id}`}>
                <Button className="bg-transparent hover:bg-transparent text-inherit font-normal py-0 px-0">
                  Update
                </Button>
              </NavLink>
            </li>
          ))}
      </ul>
    </>
  );
};
