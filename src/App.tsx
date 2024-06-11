import { RouterProvider, createHashRouter } from "react-router-dom";
import "./App.css";
import ArtGallery from "./ArtGallery";
import Home from "./Home";
import BackgammonLanding from "./BackgammonLanding";
import CurlingLanding from "./CurlingLanding";
import CodenamesLanding from "./CodenamesLanding";
import LudumDareLanding from "./LudumDareLanding";

function App() {
  const router = createHashRouter([
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
    {
      path: "/curling",
      element: <CurlingLanding />,
    },
    {
      path: "/codenames",
      element: <CodenamesLanding />,
    },
    {
      path: "/ludumdare",
      element: <LudumDareLanding />,
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
