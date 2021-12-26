import Link from "next/dist/client/link";
import { NavLink } from "./NavLink";
import { useState } from "react";
import Head from "next/head";
import cn from "classnames";

type HeaderProps = {
  title?: string;
};

export const Header = ({ title }: HeaderProps) => {
  const [notOpen, setNotOpen] = useState(true);

  function handleClick(event: any) {
    event.preventDefault();
    setNotOpen(!notOpen);
  }
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Portfolio for Jack Krebsbach" />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <header className="w-full flex justify-between p-5">
        <div>
          <Link href="/">
            <a>
              <h1 className="text-2xl font-bold hover:text-cyan-400 sm:text-4xl">
                Jack Krebsbach
              </h1>
            </a>
          </Link>
          <div className="hidden sm:inline">
            <span> Data Science </span>
            <span> | </span>
            <span> Web Development </span>
          </div>
        </div>

        <div className="flex flex-col self-end justify-self-center sm:self-center">
          <button onClick={handleClick}>
            <i className="fas fa-bars  md:hidden md:h-0"></i>
          </button>
          <nav
            className={cn({
              ["flex absolute sm:static space-y-2 flex-col sm:flex-row sm:space-y-0 sm:space-x-5 top-20 right-10"]:
                true,
              ["hidden"]: notOpen,
            })}
          >
            <NavLink href="/">
              <a>Home</a>
            </NavLink>
            <NavLink href="/projects">
              <a>Projects</a>
            </NavLink>
            <NavLink href="/resume.pdf">
              <a target="_blank">Resume</a>
            </NavLink>
            <NavLink href="/contact">
              <a>Contact</a>
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
};
