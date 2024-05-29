import Header from "./Header";

export const Home = () => {
  return (
    <div className={"home"}>
      <Header />
      <div className={"body"}>
        <div className={"backgammonLink"}>Backgammon</div>
        <div className={"artLink"}>Art</div>
        <div className={"curlingLink"}>Curling</div>
        <div className={"codenamesLink"}>Codenames</div>
        <div className={"ludumLink"}>Ludum Dare</div>
        <div className={"crosswordLink"}>Crossword</div>
      </div>
    </div>
  );
};

export default Home;
