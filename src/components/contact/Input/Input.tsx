import { FC } from "react";

interface Props {
  name: string;
  value: string;
  setValue: (e: any) => any;
  textarea?: boolean;
}

export const Input: FC<Props> = ({ name, value, setValue, textarea }) => {
  if (textarea) {
    return (
      <div className="flex flex-col w-full pt-3">
        <label className="font-bold" htmlFor={name}>
          {name}
        </label>
        <textarea
          name={name}
          id="name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="rounded-lg bg-zinc-800 py-2"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full pt-3">
      <label className="font-bold" htmlFor={name}>
        {name}
      </label>
      <input
        className="rounded-lg bg-zinc-800 py-2 px-4"
        name={name}
        id="name"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
