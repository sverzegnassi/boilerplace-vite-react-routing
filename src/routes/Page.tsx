import { Link } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

interface PageProps {
  title?: string;
}

function Page({ title }: PageProps) {
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
        <h1 className="text-3xl font-bold text-center">{title || "Give me a title"}</h1>
        <div className="bg-gray-200 border border-gray-900 p-4 space-y-2 rounded-xl shadow">
          <p>
            Try navigate back to the <Link className="text-orange-700 hover:text-orange-900 underline" to={`/`}>main page</Link>
          </p>
        </div>
        </div>
  );
}

export default Page;
