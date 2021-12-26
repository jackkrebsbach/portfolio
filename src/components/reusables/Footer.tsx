/* eslint-disable react/jsx-no-target-blank */
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="w-full flex justify-between items-center p-5">
      <span className="hover:text-cyan-400 text-sm">© 2021 JACK KREBSBACH</span>
      <div className="space-x-5">
        <a href="https://github.com/jackkrebsbach" target="_blank">
          <i className="fab fa-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/jack-krebsbach-8649041b0/"
          target="_blank"
        >
          <i className="fab fa-linkedin-in" />
        </a>
      </div>
    </footer>
  );
};
