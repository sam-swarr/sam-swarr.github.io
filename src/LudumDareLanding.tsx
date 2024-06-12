import Gallery, { PhotoClickHandler } from "react-photo-gallery";
import Header from "./Header";
import gameplayGif from "./assets/ludumdare/gameplay.gif";
import title from "./assets/ludumdare/title.jpg";
import gameplay1 from "./assets/ludumdare/gameplay1.jpg";

import ReactModal from "react-modal";
import { Carousel, CarouselItem } from "./Carousel";
import { useCallback, useState } from "react";
import Footer from "./Footer";

ReactModal.setAppElement("#root");

export const LudumDareLanding = () => {
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
      width: 1200,
      height: 675,
    },
    {
      src: gameplay1,
      width: 1200,
      height: 675,
    },
  ];

  const carouselItems = galleryPhotoData.map((p) => ({
    src: p.src,
  }));

  return (
    <div className={"landingContainer"}>
      <Header />
      <div className={"landingTitle"}>Moon Harvest</div>
      <div className={"aboutLandingWrapper"}>
        <p>
          Ludum Dare is a semi-annual game jam where entrants have one weekend
          to create a game based on a theme voted on by the community. You have
          48 hours to author all the code and assets for your game. All
          submissions are then played and reviewed by the other contestants.
        </p>
        <p>
          The theme for Ludum Dare 52 was "harvest", so I created this simple
          game where you need to guide your moon harvester to collect barrels of
          fuel by constructing platforms. The result was just okay, but it was a
          great opportunity challenge myself, learn to use Unity better, and see
          what I could create in a short time.
        </p>
      </div>
      <img
        className={"gameplayGif"}
        src={gameplayGif}
        alt={"Animation showing Moon Harvest app gameplay."}
        width={800}
      />
      <div className={"aboutLinks"}>
        <div className={"aboutLink"}>
          <a href={"https://swarrizard.itch.io/moon-harvest"} target="_blank">
            <span className={"linkIcon fa-solid fa-gamepad"} />
            click here to play
          </a>
        </div>
        <div className={"aboutLink"}>
          <a
            href={"https://ldjam.com/events/ludum-dare/52/moon-harvest"}
            target="_blank"
          >
            <span className={"linkIcon fa-solid fa-globe"} />
            view Ludum Dare page
          </a>
        </div>
        <div className={"aboutLink"}>
          <a href={"https://github.com/sam-swarr/ludumdare52"} target="_blank">
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
                imageWrapperClassName={"landingCarouselItem"}
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

export default LudumDareLanding;
