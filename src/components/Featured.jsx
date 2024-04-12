import ItemCard from "./ItemCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Featured = ({ data }) => {
  const [latestData, setLatestData] = useState([]);
  useEffect(() => {
    const latest = data.slice(5, data.length - 1);
    setLatestData(latest);
  }, [data]);

  return (
    <div className="md:px-32 mt-10 md:mt-24">
      <div className="text-center space-y-3 mb-6">
        <h1
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          className="text-4xl md:text-5xl font-medium text-hero-color uppercase"
        >
          Latest Featured Properties
        </h1>
        <p
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="1000"
          className="max-w-[600px] mx-auto text-sm md:text-base font-light"
        >
          We are thrilled to present our latest featured property, an
          architectural masterpiece poised to redefine standards in commercial
          real estate.
        </p>
      </div>
      <div
        data-aos="fade-up"
        className="lg:flex hidden"
      >
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
              <ItemCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        data-aos="fade-up"
        className="flex lg:hidden px-6"
      >
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
              <ItemCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
Featured.propTypes = {
  data: PropTypes.array,
};
export default Featured;
