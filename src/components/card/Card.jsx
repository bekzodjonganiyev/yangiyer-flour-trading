import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { baseUrl } from "../../context";

export const Card = ({ imgSrc, imgAlt, title, description, className }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {/* <img src={imgSrc} alt={imgAlt} /> */}
      <LazyLoadImage
        src={baseUrl + "/" + imgSrc}
        alt={imgAlt}
        effect={"opacity"}
        className="w-full img-lazy rounded-xl mb-4"
        width={"100%"}
        height={"100%"}
      />
      <h2 className="text-xl text-secondary_color font-semibold mb-4 text-left">
        {title}
      </h2>
      <p
        className="text-secondary_color text-lg line-clamp-3"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};
