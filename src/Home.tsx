import { useNavigate } from "react-router-dom";
import Header from "./Header";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={"home"}>
      <Header />
      <div className={"body"}>
        <div className={"backgammonLink"}>Backgammon</div>
        <div className={"artLink"} onClick={() => navigate("/art")}>
          Art
        </div>
        <div className={"curlingLink"}>Curling</div>
        <div className={"codenamesLink"}>Codenames</div>
        <div className={"ludumLink"}>Ludum Dare</div>
        <div className={"crosswordLink"}>Crossword</div>
      </div>
    </div>
  );
};

export default Home;
