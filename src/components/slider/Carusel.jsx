import React from "react";

export const Carusel = () => {
  const arr = [1, 2, 3, 4, 5, 5, 6, 76, 7];
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 bg-red-300">
      {/* <Carousel slideInterval={5000}>
        {arr.map((item) => (
          <img
            key={item}
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
          />
        ))}
      </Carousel> */}
    </div>
  );
};
