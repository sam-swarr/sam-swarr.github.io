import Gallery, { PhotoClickHandler } from "react-photo-gallery";
import Header from "./Header";
import gameplayGif from "./assets/backgammon/backgammon_gameplay.gif";
import title from "./assets/backgammon/title.jpg";
import matchSettings from "./assets/backgammon/match_settings.jpg";
import gameplay1 from "./assets/backgammon/gameplay1.jpg";
import gameplay2 from "./assets/backgammon/gameplay2.jpg";
import settings from "./assets/backgammon/settings.jpg";
import gameplay3 from "./assets/backgammon/gameplay3.jpg";
import ReactModal from "react-modal";
import { Carousel, CarouselItem } from "./Carousel";
import { useCallback, useState } from "react";
import Footer from "./Footer";

ReactModal.setAppElement("#root");

export const BackgammonLanding = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback<PhotoClickHandler>((_event, { index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

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

  const carouselItems = galleryPhotoData.map((p) => ({
    src: p.src,
  }));

  return (
    <div className={"backgammonContainer"}>
      <Header />
      <div className={"aboutBackgammonTitle"}>Backgammon</div>
      <div className={"aboutBackgammonWrapper"}>
        This web-based implementation of the classic board game was built using
        React / Typescript for the front end and Cloud Firestore for the
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
        <div className={"aboutBackgammonLink"}>
          <a href={"https://sam-swarr.github.io/backgammon/"}>
            <span className={"linkIcon fa-solid fa-gamepad"} />
            click here to play
          </a>
        </div>
        <div className={"aboutBackgammonLink"}>
          <a href={"https://github.com/sam-swarr/backgammon/"}>
            <span className={"linkIcon fa-brands fa-github"} />
            view source code
          </a>
        </div>
      </div>
      <div className={"galleryWrapper"}>
        <div className={"screenshotsTitleWrapper"}>Screenshots</div>
        <Gallery
          direction={"column"}
          columns={2}
          photos={galleryPhotoData}
          onClick={openLightbox}
        />
        <ReactModal
          className={"reactModal"}
          overlayClassName={"reactModalOverlay"}
          isOpen={viewerIsOpen}
          onRequestClose={closeLightbox}
        >
          <Carousel
            items={carouselItems}
            initialItemIndex={currentImage}
            renderItem={({ item, index, isActive, isSnapPoint }) => (
              <CarouselItem
                key={index}
                imageWrapperClassName={"backgammonCarouselItem"}
                isSnapPoint={isSnapPoint}
                isActive={isActive}
                src={item.src}
                title={""}
                subtitle={""}
                onBackgroundClick={closeLightbox}
              />
            )}
          />
        </ReactModal>
      </div>
      <Footer />
    </div>
  );
};

export default BackgammonLanding;
