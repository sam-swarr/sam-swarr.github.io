import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { useSnapCarousel } from "react-snap-carousel";
import styles from "./carousel.module.css";

export interface CarouselProps<T> {
  readonly items: T[];
  readonly renderItem: (
    props: CarouselRenderItemProps<T>
  ) => React.ReactElement<CarouselItemProps>;
  readonly initialItemIndex: number;
  readonly scrollPadding?: boolean;
}

export interface CarouselRenderItemProps<T> {
  readonly item: T;
  readonly index: number;
  readonly isSnapPoint: boolean;
  readonly isActive: boolean;
}

export const Carousel = <T extends any>({
  items,
  renderItem,
  initialItemIndex,
  scrollPadding = false,
}: CarouselProps<T>) => {
  const {
    scrollRef,
    next,
    prev,
    goTo,
    pages,
    activePageIndex,
    snapPointIndexes,
  } = useSnapCarousel();

  const [hasShownInitialPhoto, setHasShownInitialPhoto] = useState(false);

  useEffect(() => {
    if (!hasShownInitialPhoto) {
      goTo(initialItemIndex, { behavior: "instant" });
      setHasShownInitialPhoto(true);
    }
  }, [hasShownInitialPhoto, setHasShownInitialPhoto, goTo]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft":
          next();
          return;
        case "ArrowRight":
          prev();
          return;
        default:
          return;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [next, prev]);

  return (
    <div
      className={classNames(styles.root, {
        [styles.scrollPadding]: scrollPadding,
      })}
    >
      <ul className={styles.scroll} ref={scrollRef}>
        {items.map((item, index) =>
          renderItem({
            item,
            index,
            isSnapPoint: snapPointIndexes.has(index),
            isActive: activePageIndex === index,
          })
        )}
      </ul>
      <div className={styles.pageIndicator}>
        {activePageIndex + 1} / {pages.length}
      </div>
      {/* <div className={styles.controls}>
        <button
          disabled={activePageIndex === 0}
          onClick={() => prev()}
          className={styles.prevButton}
        >
          {String.fromCharCode(8592)}
        </button>
        <ol className={styles.pagination}>
          {pages.map((_, i) => (
            <li
              key={i}
              className={classNames(styles.paginationItem, {
                [styles.paginationItemActive]: i === activePageIndex,
              })}
            >
              <button
                className={styles.paginationButton}
                onClick={() => goTo(i, { behavior: "instant" })}
              >
                {i + 1}
              </button>
            </li>
          ))}
        </ol>
        <button
          disabled={activePageIndex === pages.length - 1}
          onClick={() => next()}
          className={styles.nextButton}
        >
          {String.fromCharCode(8594)}
        </button>
      </div> */}
    </div>
  );
};

export interface CarouselItemProps {
  readonly isSnapPoint: boolean;
  readonly isActive: boolean;
  readonly src: string;
  readonly title: string;
  readonly subtitle: string;
  readonly onBackgroundClick: () => void;
}

export const CarouselItem = ({
  isSnapPoint,
  isActive,
  src,
  title,
  subtitle,
  onBackgroundClick,
}: CarouselItemProps) => {
  return (
    <li
      onClick={onBackgroundClick}
      className={classNames(styles.item, {
        [styles.snapPoint]: isSnapPoint,
        [styles.itemActive]: isActive,
      })}
    >
      {/* <div className={styles.itemText}>
        <h2 className={styles.itemTitle}>{title}</h2>
        <p className={styles.itemSubtitle}>{subtitle}</p>
      </div> */}
      <img
        src={src}
        className={styles.itemImage}
        alt=""
        onClick={(event) => event.stopPropagation()}
      />
    </li>
  );
};
