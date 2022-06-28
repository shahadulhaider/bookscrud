import { FC } from "react";
import { CreateForm } from "../components/CreateForm";

export const Create: FC = () => {
  return (
    <>
      <div className="flex flex-col items-center mb-16">
        <h1 className="py-6 px-8 text-4xl font-light border border-0 border-b-2 border-solid border-emerald-800">Add new book</h1>
      </div>
      <CreateForm />
    </>
  );
};
