import { useState } from "react";
import { Link } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "./Index.style.css";

function Index() {
  const [count, setCount] = useState(0);

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
      <h1>{"Vite + React"}</h1>
      <div className="card">
        <button data-cy="counter-btn" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Try navigate to <Link data-cy="link-to-another-page" to={`/another-page`}>another page</Link> or{" "}
          <Link to={`/yet-another-page`}>wherever you like</Link>
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default Index;
