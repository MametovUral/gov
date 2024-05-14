import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/region";
import District from "./pages/district";
import RootLayout from "./layouts/root-Layout";
import Region from "./pages/region";
import InticatorLayout from "./layouts/inticator-Layout";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Region />,
        },
        {
          path: "/district",
          element: <District />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}
