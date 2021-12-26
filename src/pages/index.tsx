import type { NextPage } from "next";
import { Content } from "../components/home/Content";
import { Headshot } from "../components/home/Headshot";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col w-full items-center content-center md:flex-row justify-center px-2">
      <Headshot />
      <Content />
    </div>
  );
};

export default Home;
