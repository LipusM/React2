import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./style.css";

import Header from "./components/Header"
import List from "./components/List";
import Counter from "./components/Counter";
import Planets from "./components/Planets";

const router = createBrowserRouter([
  {
    path: "/",
    element: <List />
  },
  {
    path: "/pocitadlo",
    element: <Counter/>
  },
  {
    path: "/planety",
    element: <Planets />
  }
])

const App = () => {
  return (
    <>
      <Header 
      title="HyperAppka"
      description="Toto je nejlepší!"
      showDescription={true}
      />
      <RouterProvider router={router} />
    </>
  );
};

createRoot(document.querySelector("#app")).render(<App />);
