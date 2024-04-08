import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IoSearchOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Banner = ({ data }) => {
  const item = data[data.length - 1] || {};
  const item2 = data[data.length - 2] || {};

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
    >
      <SwiperSlide>
        <div className="bg-[linear-gradient(45deg,rgba(0,0,0,1),rgba(0,0,0,0.5)),url('/4.jpg')] w-full h-screen bg-cover bg-bottom flex items-center justify-center text-center px-20">
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-6xl font-semibold">
              BUY <span className="text-hero-color stroke-text">OR</span> SELL @ YOUR <span className="text-hero-color stroke-text">CONVENIENCE</span>
            </h1>
            <p>We give life to you home & property dreams at your budget</p>
            <div>
              <label className="relative">
                <input
                  type="text"
                  placeholder="search"
                  className="border-4 border-transparent focus:border-4 focus:border-[#73C2FC] p-3 md:w-[50%]  outline-none text-black transition-all rounded-md"
                />
                <IoSearchOutline className="absolute text-[#73C2FC] -top-1 right-2 text-3xl font-bold cursor-pointer" />
              </label>
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
              <p>Popular searches : </p>
              <p className="flex gap-3 items-center">
                <NavLink className="bg-[#D2EDF8] py-1 px-2 text-hero-color rounded-sm hover:bg-hero-color hover:text-[#D2EDF8] cursor-pointer transition-all">
                  Rent
                </NavLink>
                <NavLink className="bg-[#D2EDF8] py-1 px-2 text-hero-color rounded-sm hover:bg-hero-color hover:text-[#D2EDF8] cursor-pointer transition-all">
                  Lease
                </NavLink>
                <NavLink className="bg-[#D2EDF8] py-1 px-2 text-hero-color rounded-sm hover:bg-hero-color hover:text-[#D2EDF8] cursor-pointer transition-all">
                  Sale
                </NavLink>
                <NavLink className="bg-[#D2EDF8] py-1 px-2 text-hero-color rounded-sm hover:bg-hero-color hover:text-[#D2EDF8] cursor-pointer transition-all">
                  Apartment
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{
            backgroundImage: `linear-gradient(45deg,rgba(0,0,0,1),rgba(0,0,0,0.5)),url(${item.image_url})`,
          }}
          className="w-full h-screen bg-cover bg-bottom text-white flex items-center md:px-32"
        >
          <div className="space-y-4 md:space-y-6 md:max-w-[50%] text-center md:text-start">
            <p className="text-xl">
              {item?.segment_name} - {item?.area}
            </p>
            <h1 className="text-5xl font-bold">{item?.estate_title}</h1>
            <p className="text-base font-normal">{item?.description}</p>
            <p className="text-3xl font-semibold">{item?.price}</p>
            <NavLink
              to={`/details/${item.id}`}
              className="btn border-2 border-[#00AEFF] hover:border-[#00AEFF] bg-[#00AEFF] text-white hover:bg-[#004274] hover:text-[#00AEFF] px-6 text-base"
            >
              View Property
            </NavLink>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{
            backgroundImage: `linear-gradient(45deg,rgba(0,0,0,1),rgba(0,0,0,0.5)),url(${item2.image_url})`,
          }}
          className="w-full h-screen bg-cover bg-bottom text-white flex items-center md:px-32"
        >
          <div className="space-y-4 md:space-y-6 md:max-w-[50%] text-center md:text-start">
            <p className="text-xl">
              {item2?.segment_name} - {item2?.area}
            </p>
            <h1 className="text-5xl font-bold">{item2?.estate_title}</h1>
            <p className="text-base font-normal">{item2?.description}</p>
            <p className="text-3xl font-semibold">{item2?.price}</p>
            <NavLink
              to={`/details/${item2.id}`}
              className="btn border-2 border-[#00AEFF] hover:border-[#00AEFF] bg-[#00AEFF] text-white hover:bg-[#004274] hover:text-[#00AEFF] px-6 text-base"
            >
              View Property
            </NavLink>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

Banner.propTypes = {
  data: PropTypes.array,
};
export default Banner;
