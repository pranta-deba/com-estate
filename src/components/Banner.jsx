import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="bg-[linear-gradient(45deg,rgba(0,0,0,0.9),rgba(0,0,0,0.2)),url('/4.jpg')] w-full h-screen bg-cover bg-bottom flex items-center px-20">
          <div className="text-white space-y-6">
            <h1 className="text-6xl font-semibold">BUY OR SELL @ YOUR <br /> CONVENIENCE</h1>
            <p>We give life to you home & property dreams at your budget</p>
            <input type="text" placeholder="search" className="border-2 border-[#73C2FC]"/>
            <div>
            <p>Popular searches: </p>
            <p></p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-[linear-gradient(45deg,rgba(0,0,0,0.9),rgba(0,0,0,0.2)),url('/2.webp')] w-full h-screen bg-cover bg-bottom">
          
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-[linear-gradient(45deg,rgba(0,0,0,0.9),rgba(0,0,0,0.2)),url('/3.webp')] w-full h-screen bg-cover bg-bottom">
          
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
