import { AxiosError } from "axios";
import { FC } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { UpdateForm } from "../components/UpdateForm";
import { Book } from "../types";
import { fetcher } from "../utils";

export const Update: FC = () => {
  const { id } = useParams();
  const url = `http://localhost:8000/api/books/${id}`;
  const { data, error } = useSWR<Book, AxiosError>(url, fetcher);

  if (error) {
    return <div>Something went wrong! {error.message}</div>;
  }

  return (
    <>
      <div className="flex flex-col items-center mb-16">
        <h1 className="py-6 px-8 text-4xl font-light border border-0 border-b-2 border-solid border-emerald-800">
          Update book
        </h1>
      </div>
      {data && <UpdateForm book={data} />}
    </>
  );
};
