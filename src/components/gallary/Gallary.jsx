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
// https://live.staticflickr.com/65535/52844915350_05f40a0311_z.jpg
// https://live.staticflickr.com/65535/52844915345_8515f42854_b.jpg
// https://live.staticflickr.com/65535/52844705909_1f9a6f5289_b.jpg
// https://live.staticflickr.com/65535/52844705884_ac4f3acd35_b.jpg
// https://live.staticflickr.com/65535/52844705879_0d9854e400_b.jpg
// https://live.staticflickr.com/65535/52843937262_c00dfc24be_b.jpg
// https://live.staticflickr.com/65535/52844698984_223d6da36f_b.jpg
// https://live.staticflickr.com/65535/52844908080_702bbda8ac_b.jpg
// https://live.staticflickr.com/65535/52844908075_08706d02b4_b.jpg
// https://live.staticflickr.com/65535/52844908070_db3bb62a5e_b.jpg
// https://live.staticflickr.com/65535/52844511686_9abcb45839_b.jpg
// https://live.staticflickr.com/65535/52843930042_2c9b3eb2c2_b.jpg
const imageArray = [
  { id: "65535/52844915350_05f40a0311_z", width: 1080, height: 1620 },
  { id: "52844915345_8515f42854_b", width: 1080, height: 720 },
  { id: "52844966468_720cfef03c_b", width: 1080, height: 500 },
  { id: "52844705879_0d9854e400_b", width: 1080, height: 607 },
  { id: "52844705909_1f9a6f5289_b", width: 1080, height: 721 },
  { id: "52844705884_ac4f3acd35_b", width: 1080, height: 600 },
  { id: "52844698984_223d6da36f_b", width: 1080, height: 720 },
  { id: "52844908080_702bbda8ac_b", width: 1080, height: 1549 },
  { id: "52843937262_c00dfc24be_b", width: 1080, height: 608 },
  { id: "52844908075_08706d02b4_b", width: 1080, height: 720 },
  { id: "52844908070_db3bb62a5e_b", width: 1080, height: 694 },
 
  { id: "52843930042_2c9b3eb2c2_b", width: 1080, height: 720 },
  
];

const photos = imageArray.map((photo) => ({
  src: `https://live.staticflickr.com/65535/${photo.id}.jpg`,
  width: photo.width,
  height: photo.height,
  images: breakpoints.map((breakpoint) => {
    const height = Math.round((photo.height / photo.width) * breakpoint);
    return {
      src: `https://live.staticflickr.com/65535/${photo.id}.jpg`,
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
