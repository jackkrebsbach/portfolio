import Link from "next/link";

export default function Custom404() {
  return (
    <div className="main-container">
      <div>
        <h1> Uh-oh, this page does not exist!</h1>
        <Link href="/">
          <a>
            Click <u> here </u>to go home.
          </a>
        </Link>
      </div>
    </div>
  );
}
