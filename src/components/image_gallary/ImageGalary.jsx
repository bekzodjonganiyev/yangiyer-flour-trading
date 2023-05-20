import { useState, useEffect } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import { Spinner } from "flowbite-react";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { baseUrl } from "../../context";
import { Link } from "react-router-dom";
import { LeftArrow } from "../../assets/icons";
import apiClient from "../../utils/apiClient";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
export const ImageGallary = () => {
  const { t } = useTranslation();
  const [photos, setPhotos] = useState({
    data: [],
    isLoading: true,
    error: null,
  });

  const [index, setIndex] = useState(-1);
  const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

  const images = photos?.data?.map((photo) => ({
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

  const getData = async () => {
    const res = await apiClient.get("photo/all");
    if (res.status === 200) {
      setPhotos({
        data: res.data,
        isLoading: false,
        error: "",
      });
    } else {
      setPhotos({ data: [], isLoading: false, error: "Nimadir xato" });
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="mb-24 container w-[90%] mx-auto">
      <div className="flex justify-between items-center mb-8  ">
        <h1 className="text-secondary_color text-2xl md:text-4xl font-bold">
          {t("Header.Fotogalery")}
        </h1>
        <Link
          to={"photos"}
          className="bg-primary_color py-2 px-6 rounded-md text-white flex items-center gap-2 max-md:hidden"
        >
          {t("Header.All")}
          <span>
            <LeftArrow />
          </span>
        </Link>
      </div>
      {photos.isLoading ? (
        <Spinner
          color="info"
          aria-label="Extra large spinner example"
          size="xl"
        />
      ) : (
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
      )}
      <Link
        to={"photos"}
        className="bg-primary_color py-2 px-6 mt-7 text-center rounded-md text-white hidden items-center justify-center gap-2 max-md:flex"
      >
        <p className="gap-2 flex items-center">
          {t("Header.All")}
          <span>
            <LeftArrow />
          </span>
        </p>
      </Link>

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
