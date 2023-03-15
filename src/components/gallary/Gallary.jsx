import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
// optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

import { useAppContext } from "../../context/app.contex";
const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id, width, height) =>
  `https://source.unsplash.com/${id}/${width}x${height}`;

const unsplashPhotos = [
  { id: "Osq7UAVxIOI", width: 1080, height: 780 },
  { id: "Dhmn6ete6g8", width: 1080, height: 1620 },
  { id: "RkBTPqPEGDo", width: 1080, height: 720 },
  { id: "Yizrl9N_eDA", width: 1080, height: 721 },
  { id: "KG3TyFi0iTU", width: 1080, height: 1620 },
  { id: "Jztmx9yqjBw", width: 1080, height: 607 },
  { id: "-heLWtuAN3c", width: 1080, height: 608 },
  { id: "xOigCUcFdA8", width: 1080, height: 720 },
  { id: "1azAjl8FTnU", width: 1080, height: 1549 },
  { id: "ALrCdq-ui_Q", width: 1080, height: 720 },
  { id: "twukN12EN7c", width: 1080, height: 694 },
  { id: "9UjEyzA6pP4", width: 1080, height: 1620 },
  { id: "sEXGgun3ZiE", width: 1080, height: 720 },
  { id: "S-cdwrx-YuQ", width: 1080, height: 1440 },
  { id: "q-motCAvPBM", width: 1080, height: 1620 },
  { id: "Xn4L310ztMU", width: 1080, height: 810 },
  { id: "iMchCC-3_fE", width: 1080, height: 610 },
  { id: "X48pUOPKf7A", width: 1080, height: 160 },
  { id: "GbLS6YVXj0U", width: 1080, height: 810 },
  { id: "9CRd1J1rEOM", width: 1080, height: 720 },
  { id: "xKhtkhc9HbQ", width: 1080, height: 1440 },
];

const photos = unsplashPhotos.map((photo) => ({
  src: unsplashLink(photo.id, photo.width, photo.height),
  width: photo.width,
  height: photo.height,
  images: breakpoints.map((breakpoint) => {
    const height = Math.round((photo.height / photo.width) * breakpoint);
    return {
      src: unsplashLink(photo.id, breakpoint, height),
      width: breakpoint,
      height,
    };
  }),
}));

const slides = photos.map(({ src, width, height, images }) => ({
  src,
  width,
  height,
  srcSet: images.map((image) => ({
    src: image.src,
    width: image.width,
    height: image.height,
  })),
}));

export const Gallary = () => {
  const [index, setIndex] = useState(-1);
  const { colors } = useAppContext();
  return (
    <div className="my-10">
      <h1
        className={`${colors.lightTextColor2} text-3xl font-bold text-center mb-10`}
      >
        Gallary
      </h1>

      <PhotoAlbum
        photos={photos}
        layout="rows"
        targetRowHeight={300}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  );
};
