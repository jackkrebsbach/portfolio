import { useRouter } from "next/router";
import { FC } from "react";

export const Content: FC = () => {
  const router = useRouter();

  function handleButtonPress(e: any) {
    e.preventDefault();
    router.push("/projects");
  }
  return (
    <div className="flex flex-col md:pl-10 md:pr-0 content-center w-full sm:px-10 md:max-w-lg lg:max-w-xl">
      <h2 className="py-5 text-3xl font-bold self-start">
        {" "}
        Welcome, my name is Jack!{" "}
      </h2>
      <p className="text-lg">
        I currently study Math at Hope College in Holland, MI. I use data
        analysis and statistical learning methods to solve problems. I also
        enjoy building web applications, including this one!
      </p>
      <button
        onClick={handleButtonPress}
        className="bg-cyan-400 text-black font-bold py-4 px-5 rounded-lg my-8 justify-self-center self-center"
      >
        <span> View my Projects</span>
      </button>
    </div>
  );
};
