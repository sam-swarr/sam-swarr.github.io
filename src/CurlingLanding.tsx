import Gallery, { PhotoClickHandler } from "react-photo-gallery";
import Header from "./Header";
import gameplayGif from "./assets/curling/gameplay.gif";
import gameplay1 from "./assets/curling/gameplay1.jpg";
import gameplay2 from "./assets/curling/gameplay2.jpg";
import gameplay3 from "./assets/curling/gameplay3.jpg";
import gameplay4 from "./assets/curling/gameplay4.jpg";
import ReactModal from "react-modal";
import { Carousel, CarouselItem } from "./Carousel";
import { useCallback, useState } from "react";
import Footer from "./Footer";

ReactModal.setAppElement("#root");

export const CurlingLanding = () => {
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
      src: gameplay1,
      width: 1200,
      height: 677,
    },
    {
      src: gameplay2,
      width: 1200,
      height: 677,
    },
    {
      src: gameplay3,
      width: 1200,
      height: 677,
    },
    {
      src: gameplay4,
      width: 1200,
      height: 677,
    },
  ];

  const carouselItems = galleryPhotoData.map((p) => ({
    src: p.src,
  }));

  return (
    <div className={"landingContainer"}>
      <Header />
      <div className={"landingTitle"}>Curling Simulator</div>
      <div className={"aboutLandingWrapper"}>
        This game was built out of the passion I had for the sport in my youth.
        Hone your shotcalling and sweeping strategy in this 3D curling
        simulator. The ice, collisions, and sweeping physics have been carefully
        tuned to faithfully replicate the authentic curling experience. The game
        was programmed in Unity, and the 3D models were created using Blender.
      </div>
      <img
        className={"gameplayGif"}
        src={gameplayGif}
        alt={"Animation showing backgammon app gameplay."}
        width={801}
      />
      <div className={"aboutLinks"}>
        <div className={"aboutLink"}>
          <a href={"https://github.com/sam-swarr/curling-simulator/releases/"}>
            <span className={"linkIcon fa-solid fa-download"} />
            click here to download
          </a>
        </div>
        <div className={"aboutLink"}>
          <a href={"https://github.com/sam-swarr/curling-simulator/"}>
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

export default CurlingLanding;
