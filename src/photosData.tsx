import mushroom_1 from "./assets/mushroom_1.jpeg";
import mushroom_2 from "./assets/mushroom_2.jpeg";
import mushroom_3 from "./assets/mushroom_3.jpeg";
import picos from "./assets/picos.jpeg";

export type PhotoData = {
  src: string;
  title: string;
  subtitle: string;
  width: number;
  height: number;
};

export const photosData: PhotoData[] = [
  {
    src: mushroom_1,
    title: '"Porcini"',
    subtitle: 'Watercolor — 8" x 10"',
    width: 636,
    height: 800,
  },
  {
    src: mushroom_2,
    title: '"Amanita"',
    subtitle: 'Watercolor — 8" x 10"',
    width: 618,
    height: 800,
  },
  {
    src: mushroom_3,
    title: '"Chanterelle"',
    subtitle: 'Watercolor — 8" x 10"',
    width: 629,
    height: 800,
  },
  {
    src: picos,
    title: '"Picos de Europa"',
    subtitle: 'Watercolor — 14" x 12"',
    width: 800,
    height: 678,
  },
];
