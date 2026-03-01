import React, { useRef, useEffect } from "react";
import { Swiper } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperComponent = ({
  slidesPerView = 1,
  autoplay = true,
  showNavigation = false,
  options = {},
  prevIcon = null,
  nextIcon = null,
  customStyles = {},
  btnPrev,
  btnNext,
  children,
}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (options?.navigation && prevRef.current && nextRef.current) {
      options.navigation.prevEl = prevRef.current;
      options.navigation.nextEl = nextRef.current;
    }
  }, [prevRef.current, nextRef.current]);

  const mergedOptions = {
    modules: [Autoplay, ...(showNavigation ? [Navigation] : [])],
    spaceBetween: 20,
    slidesPerView,
    pagination: true, 
    autoplay: autoplay ? { delay: 3000, disableOnInteraction: false } : false,
    loop: true,
    navigation: showNavigation
      ? { prevEl: prevRef.current, nextEl: nextRef.current }
      : false,
    ...options,

  };
  

  return (
    <div className="relative">
      {showNavigation && (
        <>
          <button
            ref={prevRef}
            className={customStyles.btnPrev}
          >
            {prevIcon || "<"}
          </button>
          <button
            ref={nextRef}
            className={customStyles.btnNext}
          >
            {nextIcon || ">"}
          </button>
        </>
      )}
      <Swiper {...mergedOptions}>{children}</Swiper>
    </div>
  );
};

export default SwiperComponent;
