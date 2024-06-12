import Gallery, { PhotoClickHandler } from "react-photo-gallery";
import Header from "./Header";
import title from "./assets/codenames/title.jpg";
import roles from "./assets/codenames/roles.jpg";
import gameplay1 from "./assets/codenames/gameplay1.jpg";
import gameplay2 from "./assets/codenames/gameplay2.jpg";

import ReactModal from "react-modal";
import { Carousel, CarouselItem } from "./Carousel";
import { useCallback, useState } from "react";
import Footer from "./Footer";

ReactModal.setAppElement("#root");

export const CodenamesLanding = () => {
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
      width: 460,
      height: 1000,
    },
    {
      src: roles,
      width: 460,
      height: 1000,
    },
    {
      src: gameplay1,
      width: 460,
      height: 1000,
    },
    {
      src: gameplay2,
      width: 460,
      height: 1000,
    },
  ];

  const carouselItems = galleryPhotoData.map((p) => ({
    src: p.src,
  }));

  return (
    <div className={"landingContainer"}>
      <Header />
      <div className={"landingTitle"}>Codenames</div>
      <div className={"aboutLandingWrapper"}>
        I built this digital version of the party card game during the pandemic
        as a fun way to keep in touch with friends and family. 4+ players can
        hop into a group call, create a game lobby, and then take turns being
        spymaster giving clues to their team in order to guess the correct
        words. The app was built using React and Firebase Realtime Database. The
        original card game was designed by Vlaada Chvátil and published by Czech
        Games Edition.
      </div>
      <div className={"aboutLinks"}>
        <div className={"aboutLink"}>
          <a href={"https://codenames-189d7.web.app/"} target="_blank">
            <span className={"linkIcon fa-solid fa-gamepad"} />
            click here to play
          </a>
        </div>
        <div className={"aboutLink"}>
          <a href={"https://github.com/sam-swarr/codenames"} target="_blank">
            <span className={"linkIcon fa-brands fa-github"} />
            view source code
          </a>
        </div>
      </div>
      <div className={"galleryWrapper"}>
        <div className={"screenshotsTitleWrapper"}>Screenshots</div>
        <Gallery
          direction={"column"}
          columns={4}
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

export default CodenamesLanding;
