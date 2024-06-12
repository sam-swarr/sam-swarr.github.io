import Header from "./Header";
import puzzle from "./assets/crossword/puzzle.png";
import pdf from "./assets/crossword/puzzle.pdf";
import puz from "./assets/crossword/puzzle.puz";
import ReactModal from "react-modal";
import Footer from "./Footer";

ReactModal.setAppElement("#root");

export const CrosswordLanding = () => {
  return (
    <div className={"landingContainer"}>
      <Header />
      <div className={"landingTitle"}>Crossword</div>
      <div className={"aboutLandingWrapper"}>
        <p>
          As a longtime crossword solver, I wanted to take a stab at
          constructing a puzzle. I learned a lot of useful tips from{" "}
          <a
            href={
              "https://www.nytimes.com/2018/09/14/crosswords/how-to-make-a-crossword-puzzle-the-series.html"
            }
          >
            this New York Times article series
          </a>{" "}
          on how to go about doing that, and I used the web-based editor,{" "}
          <a href={"https://www.keiranking.com/apps/phil/"}>Phil</a>, to edit
          and publish the puzzle.
        </p>
        <p>
          The result is a puzzle that pays homage to our cat, Sugar, and all
          felines in general.
        </p>
        <p>
          Print out the PDF or open the .puz file in your favorite puzzle
          software and give it a try!
        </p>
      </div>
      <div className={"aboutLinks crosswordLinks"}>
        <div className={"aboutLink"}>
          <a href={pdf} target="_blank">
            <span
              className={"linkIcon fa-solid fa-arrow-up-right-from-square"}
            />
            open as .pdf
          </a>
        </div>
        <div className={"aboutLink"}>
          <a href={puz} download={"puzzle.puz"}>
            <span className={"linkIcon fa-solid fa-download"} />
            download as .puz
          </a>
        </div>
      </div>
      <img
        className={"crosswordImage"}
        src={puzzle}
        alt={"A crossword puzzle about cats."}
        width={800}
      />
      <Footer />
    </div>
  );
};

export default CrosswordLanding;
