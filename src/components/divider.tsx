import React from "react";

type DividerProps = {
  text?: string;
};

function Divider({ text }: DividerProps) {
  return (
    <div className="pt-12 flex flex-row col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5 items-center pl-1">
      <p>{text}</p>
      <div className="w-full border-b border-solid border-gray-200 ml-4" />
    </div>
  );
}

export default Divider;
