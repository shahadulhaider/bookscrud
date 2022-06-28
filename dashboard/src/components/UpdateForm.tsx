import axios from "axios";
import { FC, SyntheticEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Book, Status } from "../types";
import { Button } from "./Button";
import { FormInput } from "./FormInput";
import { Select } from "./Select";

export type FormFields = {
  title: string;
  author: string;
  status: Status;
};

export const UpdateForm: FC<{ book: Book }> = ({ book }) => {
  const [defaultValues, setDefaultValues] = useState({
    title: book.title,
    author: book.author,
  });

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFields>();

  const onSubmit = handleSubmit((formData) => {
    const url = `http://localhost:8000/api/books/${book.id}`;
    axios
      .put(url, formData)
      .then((res) => {
        if (res.status === 200) {
          reset({ ...defaultValues });
          setDefaultValues({ ...defaultValues });
          navigate("/");
        }
      })
      .catch((err) => {
        reset({ ...defaultValues });
        setDefaultValues({ ...defaultValues });
        console.log(err);
      });
  });

  const handleDelete = (event: SyntheticEvent) => {
    event.stopPropagation();
    event.preventDefault();

    const url = `http://localhost:8000/api/books/${book.id}`;
    axios
      .delete(url)
      .then((res) => {
        if (res.status === 200) {
          navigate("/");
        }
      })
      .catch((err) => {
        reset({ ...defaultValues });
        setDefaultValues({ ...defaultValues });
        console.log(err);
      });
  };

  return (
    <form onSubmit={onSubmit}>
      <FormInput<FormFields>
        id="title"
        type="text"
        name="title"
        label="Title"
        placeholder="Title"
        defaultValue={defaultValues.title}
        className="mb-2"
        register={register}
        rules={{
          required: "Title is required",
        }}
        errors={errors}
      />
      <FormInput<FormFields>
        id="author"
        type="text"
        name="author"
        label="author"
        placeholder="Author"
        defaultValue={defaultValues.author}
        className="mb-2"
        register={register}
        rules={{
          required: "Author is required",
        }}
        errors={errors}
      />
      <Select id="status" label="status" {...register("status")} />
      <Button
        className="mt-4 transform duration-200 py-2 w-full uppercase text-white font-semibold rounded shadow-md focus:outline-none disabled:opacity-50"
        type="submit"
      >
        Update
      </Button>
      <Button
        className="mt-4 py-2 w-full uppercase text-white font-semibold rounded shadow-md focus:outline-none bg-red-500 hover:bg-red-700 disabled:opacity-50"
        type="submit"
        onClick={(event: SyntheticEvent) => handleDelete(event)}
      >
        Delete
      </Button>
    </form>
  );
};
