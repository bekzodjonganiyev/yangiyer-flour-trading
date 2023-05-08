import { useState, useEffect, useContext } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// import photos from "./photos";
import { UsersContext, smallActions, baseUrl } from "../../context";
import { Link } from "react-router-dom";
import { LeftArrow } from "../../assets/icons";

export const ImageGallary = () => {
  const { photos } = useContext(UsersContext);
  const [index, setIndex] = useState(-1);
  const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];
  const images = photos?.map((photo) => ({
    src: baseUrl + "/" + photo.photo,
    width: +photo.width,
    height: +photo.height,
    sliderImages: breakpoints.map((breakpoint) => {
      const height = Math.round((photo.height / photo.width) * breakpoint);
      return {
        src: baseUrl + "/" + photo.photo,
        width: +breakpoint,
        height,
      };
    }),
  }));
  const slides = images?.map(({ src, width, height, sliderImages }) => ({
    src,
    width,
    height,
    srcSet: sliderImages.map((image) => ({
      src: image.src,
      width: image.width,
      height: image.height,
    })),
  }));

  useEffect(() => {
    smallActions.getPhotos("photo/all");
  }, []);
  return (
    <div className="mb-20 container w-[90%] mx-auto">
      <div className="flex justify-between items-center mb-8  ">
        <h1 className="text-secondary_color text-4xl font-bold">
          Fotogaleriya
        </h1>
        <Link
          to={"photos"}
          className="bg-primary_color py-2 px-6 rounded-md text-white flex items-center gap-2"
        >
          Barchasi{" "}
          <span>
            <LeftArrow />
          </span>
        </Link>
      </div>
      <PhotoAlbum
        photos={images}
        layout="columns"
        spacing={20}
        targetRowHeight={300}
        onClick={({ index }) => setIndex(index)}
        columns={(containerWidth) => {
          if (containerWidth < 400) return 1;
          if (containerWidth < 800) return 3;
          return 4;
        }}
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
