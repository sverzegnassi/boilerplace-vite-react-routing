import { useState } from "react";
import { Link } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "../components/Button";

function Index() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-3xl mx-auto px-8 py-24 space-y-4">
      <div className="flex justify-center gap-x-8">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="h-24" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-24" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold text-center">{"Vite + React"}</h1>
      <div className="bg-gray-200 border border-gray-900 p-4 space-y-2 rounded-xl shadow">
        <Button className="my-16"
          data-cy="counter-btn"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
        <p>
          Try navigate to{" "}
          <Link
            data-cy="link-to-another-page"
            className="text-orange-700 hover:text-orange-900 underline"
            to={`/another-page`}
          >
            another page
          </Link>{" "}
          or{" "}
          <Link
            className="text-orange-700 hover:text-orange-900 underline"
            to={`/yet-another-page`}
          >
            wherever you like
          </Link>
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default Index;
