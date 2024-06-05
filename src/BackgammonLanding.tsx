import Gallery from "react-photo-gallery";
import Header from "./Header";
import gameplayGif from "./assets/backgammon/backgammon_gameplay.gif";
import title from "./assets/backgammon/title.jpg";
import matchSettings from "./assets/backgammon/match_settings.jpg";
import gameplay1 from "./assets/backgammon/gameplay1.jpg";
import gameplay2 from "./assets/backgammon/gameplay2.jpg";
import settings from "./assets/backgammon/settings.jpg";
import gameplay3 from "./assets/backgammon/gameplay3.jpg";

export const BackgammonLanding = () => {
  const galleryPhotoData = [
    {
      src: title,
      width: 800,
      height: 450,
    },
    {
      src: matchSettings,
      width: 800,
      height: 450,
    },
    {
      src: gameplay1,
      width: 800,
      height: 450,
    },
    {
      src: gameplay2,
      width: 800,
      height: 450,
    },
    {
      src: settings,
      width: 800,
      height: 450,
    },
    {
      src: gameplay3,
      width: 800,
      height: 450,
    },
  ];

  return (
    <div className={"backgammonContainer"}>
      <Header />
      <div className={"aboutBackgammonTitle"}>Backgammon</div>
      <div className={"aboutBackgammonWrapper"}>
        This web-based implementation of the classic board game is implemented
        using React / Typescript for the front end and Cloud Firestore for the
        realtime backend. The adaptive UI supports both desktop and mobile. Two
        players can play locally on the same device, or you can create a
        networked game lobby and challenge a friend over the internet.
      </div>
      <img
        className={"backgammonGameplayGif"}
        src={gameplayGif}
        alt={"Animation showing backgammon app gameplay."}
        width={780}
      />
      <div className={"aboutBackgammonLinks"}>
        <a href={"https://sam-swarr.github.io/backgammon/"}>
          <span className={"backgammonPlayIcon"} />
          click here to play
        </a>
        <a href={"https://github.com/sam-swarr/backgammon/"}>
          <span className={"backgammonGithubIcon"} />
          view source code
        </a>
      </div>
      <div className={"galleryWrapper"}>
        Screenshots
        <Gallery photos={galleryPhotoData} />
      </div>
    </div>
  );
};

export default BackgammonLanding;
