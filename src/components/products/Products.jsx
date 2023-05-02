import { useAppContext } from "../../context/app.contex";
import Slider from "react-slick";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

import './Products.css'

export const Products = () => {
  const {t} = useTranslation();
  const { colors } = useAppContext();

  const images = [
    {src: 'https://backend.tkti.uz/uploads/file-1681043430632.png', alt: 'Image 1'},
    {src: 'https://backend.tkti.uz/uploads/file-1681043403804.png', alt: 'Image 3'},
    {src: 'https://backend.tkti.uz/uploads/file-1681043362030.png', alt: 'Image 2'},
    {src: 'https://backend.tkti.uz/uploads/file-1681043316631.png', alt: 'Image 1'},
    {src: 'https://backend.tkti.uz/uploads/file-1681043430632.png', alt: 'Image 1'},
    {src: 'https://backend.tkti.uz/uploads/file-1681043403804.png', alt: 'Image 3'},
    
  ]
  const settings = {
   
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container-fluid ">
      
    <div className="container-fluid w-[100vw]  py-10   bg-[#F0F0F0]">
    <div className="container w-[80%] mx-auto">
      <h2 className={`${colors.lightTextColor2} text-center text-5xl font-bold mb-4`}>
         Bizning mahsulotlarimiz
            
          </h2>
          </div>
          <div>
          {/* <Slider {...settings}> */}
          {images.map(image => (
             <img  className=" w-[100px] py-5 rounded-3xl	 cursor-pointer" src={image.src} alt={image.alt} />
          ))}
          {/* </Slider> */}
          </div>
         
          <div className="container w-[80%] mx-auto">
          <Slider {...settings}>


      {images.map(image => (
        <div className="image" key={image.src}>
				<div id="zoom-In" >
					<figure className="w-[200px] h-[full]">
          <img  className=" w-[100px] py-5 rounded-3xl	 cursor-pointer" src={image.src} alt={image.alt} />
					</figure>
					
        </div>
			</div>
       
      ))}
      </Slider>
   
        </div>
        
      

      
    </div>
    </div>
  );
};
