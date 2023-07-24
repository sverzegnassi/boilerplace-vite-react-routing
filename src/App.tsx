import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page.tsx"
import Index from "./routes/Index.tsx";
import Page from "./routes/Page.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/another-page",
    element: <Page title="Another Page" />,
  },
  {
    path: "/yet-another-page",
    element: <Page title="Yet another Page" />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
