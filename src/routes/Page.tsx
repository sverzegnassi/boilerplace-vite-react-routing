import { Link } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "./Page.style.css";

interface PageProps {
  title?: string;
}

function Page({ title }: PageProps) {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{title || "Give me a title"}</h1>
      <div className="card">
        <p>
          Try navigate back to the <Link to={`/`}>main page</Link>
        </p>
      </div>
    </>
  );
}

export default Page;
