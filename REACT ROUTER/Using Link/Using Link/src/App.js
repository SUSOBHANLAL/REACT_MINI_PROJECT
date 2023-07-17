import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./pages/Home";
import { List } from "./pages/List";
import { Contact } from "./pages/Contact";
import { Navbar } from "./components/Navbar";

export default function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/list", element: <List /> },
    { path: "/contact", element: <Contact /> }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
