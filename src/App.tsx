import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import ArtGallery from "./ArtGallery";
import Home from "./Home";
import BackgammonLanding from "./BackgammonLanding";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/art",
        element: <ArtGallery />,
      },
      {
        path: "/bkgmn",
        element: <BackgammonLanding />,
      },
    ],
    { basename: "/" }
  );

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
