import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const ImageGallery = ({ images, title }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="image-gallery">
      {/* Main Slider */}
      <div className="relative mb-4">
        <Swiper
          spaceBetween={10}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="h-[70vh] rounded-lg overflow-hidden"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full bg-gray-100">
                <img 
                  src={image} 
                  alt={`${title} - Image ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom Navigation Buttons */}
        <button className="swiper-button-prev absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-white p-3 rounded-full shadow-md text-gray-800 hover:bg-gray-50 focus:outline-none">
          <ChevronLeft size={20} />
        </button>
        <button className="swiper-button-next absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-white p-3 rounded-full shadow-md text-gray-800 hover:bg-gray-50 focus:outline-none">
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Thumbs Slider */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="h-24"
        breakpoints={{
          640: {
            slidesPerView: 5,
          },
          768: {
            slidesPerView: 6,
          },
          1024: {
            slidesPerView: 7,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-300">
            <div className="h-full w-full rounded-md overflow-hidden">
              <img 
                src={image} 
                alt={`Thumbnail ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageGallery;