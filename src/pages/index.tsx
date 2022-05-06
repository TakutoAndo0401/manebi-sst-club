import { NextPage } from 'next';
import { Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

// TOP
const Top: NextPage = () => {
  const images = ['/image/kurumi_001.jpeg', '/image/AIRY6834.jpeg', '/image/DSC01988.jpeg'];

  // 前に戻るボタン
  const SwiperButtonPre = () => {
    const swiper = useSwiper();
    return (
      <button
        className="absolute top-2/4 left-10 z-10 w-12 text-white cursor-pointer"
        onClick={() => swiper.slidePrev()}
      >
        <ChevronLeftIcon />
      </button>
    );
  };

  // 次へ進むボタン
  const SwiperButtonNext = () => {
    const swiper = useSwiper();
    return (
      <button
        className="absolute top-2/4 right-10 z-10 w-12 text-white cursor-pointer"
        onClick={() => swiper.slideNext()}
      >
        <ChevronRightIcon />
      </button>
    );
  };

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
        slidesPerView={1}
        effect="fade"
        pagination={{
          clickable: true,
        }}
        loop
        autoplay
      >
        {images.map((src: string, index: number) => {
          return (
            <SwiperSlide key={`${index}`}>
              <img src={src} alt={`TOP画像_${index + 1}`} className="w-full" />
            </SwiperSlide>
          );
        })}
        <SwiperButtonPre />
        <SwiperButtonNext />
      </Swiper>
    </div>
  );
};

export default Top;
