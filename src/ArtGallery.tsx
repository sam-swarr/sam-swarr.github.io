import { useState, useCallback } from "react";
import Gallery, { PhotoClickHandler } from "react-photo-gallery";
import ReactModal from "react-modal";
import { photosData, PhotoData } from "./photosData";
import { Carousel, CarouselItem } from "./Carousel";
import Header from "./Header";
import Footer from "./Footer";

ReactModal.setAppElement("#root");

export const ArtGallery = () => {
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

  const galleryPhotoData = photosData.map((p: PhotoData) => ({
    src: p.src,
    width: p.width,
    height: p.height,
  }));

  const carouselItems = photosData.map((p: PhotoData) => ({
    src: p.src,
    title: p.title,
    subtitle: p.subtitle,
  }));

  return (
    <div className={"galleryContainer"}>
      <Header />
      <div className={"galleryWrapper"}>
        <Gallery photos={galleryPhotoData} onClick={openLightbox} />
        <ReactModal
          className={"reactModal artGallery"}
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
                imageWrapperClassName={"artGalleryCarouselItem"}
                isSnapPoint={isSnapPoint}
                isActive={isActive}
                src={item.src}
                title={item.title}
                subtitle={item.subtitle}
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

export default ArtGallery;
