import React from "react";
import "./Carusel.css"
import bgVideo from "../../assets/images/bg_vide.avif"

export const Carusel = () => {
  const arr = [1, 2, 3, 4, 5, 5, 6, 76, 7];
  return (
    <div className=" my-10">
      {/* <Carousel slideInterval={5000}>
        {arr.map((item) => (
          <img
            key={item}
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
          />
        ))}
      </Carousel> */}
      {/* <video autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className='content'>
		  <h1>This is a text</h1>
		</div> */}
    <img src="https://media.istockphoto.com/id/146785820/photo/combine-harvesting-in-a-field-of-golden-wheat.jpg?b=1&s=170667a&w=0&k=20&c=bTkPuOmYT7f0zvp_ORbDCY7euyqQfcoCuSVKFWaLx4w=" alt="" className="w-full" />
    </div>
  );
};
