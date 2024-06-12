import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={"home"}>
      <Header />
      <div className={"body"}>
        <div
          className={"backgammonLink link"}
          onClick={() => navigate("/bkgmn")}
        >
          <div className={"linkTitleWrapper"}>
            <div className={"linkTitle"}>Backgammon</div>
          </div>
        </div>
        <div className={"artLink link"} onClick={() => navigate("/art")}>
          <div className={"linkTitleWrapper"}>
            <div className={"linkTitle"}>Art</div>
          </div>
        </div>
        <div
          className={"curlingLink link"}
          onClick={() => navigate("/curling")}
        >
          <div className={"linkTitleWrapper"}>
            <div className={"linkTitle"}>Curling</div>
          </div>
        </div>
        <div
          className={"codenamesLink link"}
          onClick={() => navigate("/codenames")}
        >
          <div className={"linkTitleWrapper"}>
            <div className={"linkTitle"}>Codenames</div>
          </div>
        </div>
        <div
          className={"ludumLink link"}
          onClick={() => navigate("/ludumdare")}
        >
          <div className={"linkTitleWrapper"}>
            <div className={"linkTitle"}>Ludum Dare</div>
          </div>
        </div>
        <div
          className={"crosswordLink link"}
          onClick={() => navigate("/crossword")}
        >
          <div className={"linkTitleWrapper"}>
            <div className={"linkTitle"}>Crossword</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
