import classNames from "classnames";
import { FC, forwardRef } from "react";

export type InputSize = "medium" | "large";
export type InputType = "text" | "email";

export type SelectProps = {
  id: string;
  name: string;
  label: string;
  size?: InputSize;
  className?: string;
  defaultValue?: string;
};

type Options = Pick<HTMLOptionElement, "label" | "value">;

const options: Array<Options> = [
  {
    label: "Available",
    value: "available",
  },
  {
    label: "Borrowed",
    value: "borrowed",
  },
];

const sizeMap: { [key in InputSize]: string } = {
  medium: "p-3 text-base",
  large: "p-4 text-base",
};

export const Select: FC<SelectProps> = forwardRef<
  HTMLSelectElement,
  SelectProps
>(({ id, name, label, size = "medium", className = "", ...props }, ref) => {
  return (
    <select
      id={id}
      ref={ref}
      name={name}
      aria-label={label}
      className={classNames([
        "relative inline-flex w-full rounded appearance-none transition-colors ease-in-out text-base text-normal text-gray-500 bg-white bg-clip-padding bg-no-repeat border border-gray-300 hover:border-blue-400 focus:text-gray-700 focus:bg-white focus:outline-none focus:border-blue-400 focus:ring-blue-400 focus:ring-4 focus:ring-opacity-30",
        sizeMap[size],
        className,
      ])}
      {...props}
    >
      {options.map(({ label, value }) => (
        <option label={label} value={value} key={value}>
          {value}
        </option>
      ))}
    </select>
  );
});
