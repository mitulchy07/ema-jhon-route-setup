import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Orders from "../src/components/Orders/Orders";
import Shop from "../src/components/Shop/Shop";
import "./App.css";
import Inventory from "./components/Inventory/Inventory";
import Main from "./components/layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Shop></Shop>,
        },
        {
          path: "/orders",
          element: <Orders></Orders>,
        },
        {
          path: "/Inventory",
          element: <Inventory></Inventory>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
