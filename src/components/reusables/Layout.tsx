import React, { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

type Props = {
  children?: ReactNode;
  title?: string;
};

export const Layout = ({ children, title = "Jack Krebsbach" }: Props) => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-900 text-white">
    <div className="max-w-6xl flex flex-col w-full min-h-screen h-full justify-between items-center  md:p-5">
      <Header title={title} />
      {children}
      <Footer />
    </div>
  </div>
);
