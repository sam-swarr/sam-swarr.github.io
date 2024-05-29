import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import ArtGallery from "./ArtGallery";
import Home from "./Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/art",
      element: <ArtGallery />,
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
