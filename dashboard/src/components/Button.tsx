import { FC, ReactNode } from "react";

interface ButtonProps {
  className?: string;
  [x: string]: any;
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`${className} bg-emerald-800 hover:bg-slate-700 text-white font-semibold py-4 px-4 rounded`}
      {...props}
    >
      {children}
    </button>
  );
};
