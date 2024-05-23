import { useState, useCallback, useEffect } from "react";
import Gallery, { PhotoClickHandler } from "react-photo-gallery";
import ReactModal from "react-modal";
import { photosData, PhotoData } from "./photosData";
import { Carousel, CarouselItem } from "./Carousel";

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
    <div className={"gallery_wrapper"}>
      <Gallery photos={galleryPhotoData} onClick={openLightbox} />
      <ReactModal isOpen={viewerIsOpen} onRequestClose={closeLightbox}>
        <Carousel
          items={carouselItems}
          renderItem={({ item, index, isActive, isSnapPoint }) => (
            <CarouselItem
              key={index}
              isSnapPoint={isSnapPoint}
              isActive={isActive}
              src={item.src}
              title={item.title}
              subtitle={item.subtitle}
            />
          )}
        />
      </ReactModal>
      {/* <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway> */}
    </div>
  );
};

export default ArtGallery;
