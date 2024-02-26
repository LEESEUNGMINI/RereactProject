import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cucun from "./routes/Cucun";
import NewResipy from "./routes/NewResipy";
import GeaTip from "./routes/GeaTip";
import Detail from "./routes/Detail";
import Service from "./routes/Service";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cucun",
    element: <Cucun />,
  },
  {
    path: "/cucun/:RCP_NM",
    element: <Detail />,
  },
  {
    path: "/newresipy",
    element: <NewResipy />,
  },
  {
    path: "/geatip",
    element: <GeaTip />,
  },
  {
    path: "service",
    element: <Service />,
  },
]);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
