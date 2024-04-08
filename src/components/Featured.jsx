import ItemCard from "./ItemCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import useFetchData from "../hooks/useFetchData";
import { useEffect, useState } from "react";

const Featured = () => {
  const { data } = useFetchData();
  const [latestData, setLatestData] = useState([]);
  useEffect(() => {
    const latest = data.slice(5, data.length - 1);
    setLatestData(latest);
  }, [data]);
  return (
    <div className="md:px-32">
      <div className="text-center space-y-3 mb-6">
        <h1 className="text-4xl md:text-5xl font-medium">
          Latest Featured Properties
        </h1>
        <p className="max-w-[600px] mx-auto text-sm md:text-base font-light">
          We are thrilled to present our latest featured property, an
          architectural masterpiece poised to redefine standards in commercial
          real estate.
        </p>
      </div>
      <div className="lg:flex hidden">
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={3}
          spaceBetween={15}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {latestData.map((item, idnex) => (
            <SwiperSlide key={idnex}>
              <ItemCard item={item}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex lg:hidden px-6">
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={1}
          spaceBetween={15}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
         {latestData.map((item, idnex) => (
            <SwiperSlide key={idnex}>
              <ItemCard item={item}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Featured;
