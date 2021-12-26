import Image from "next/image";
import img from "../../../public/headshot/headshot.jpg";
import { FC } from "react";

export const Headshot: FC = () => {
  return (
    <div className="w-48 py-5  sm:w-52 md:w-60 lg:w-72">
      <Image
        src={img}
        alt="headshot"
        placeholder="blur"
        priority
        className="rounded-[2rem] w-full"
      />
    </div>
  );
};
