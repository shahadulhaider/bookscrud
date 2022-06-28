import { FC } from "react";

export const Spinner: FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-4 h-4 border-b-2 border-gray-900 rounded-full animate-spin"></div>
    </div>
  );
};
