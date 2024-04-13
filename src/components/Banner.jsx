import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IoSearchOutline } from "react-icons/io5";
import { NavLink,useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { createNumToToken } from "../utils/createToken";
import { useRef, useState } from "react";
import { ToastContainer, toast, Flip } from "react-toastify";

const Banner = ({ data }) => {
  const item = data[data.length - 6] || {};
  const item2 = data[data.length - 8] || {};
  const token = createNumToToken(item.id);
  const token2 = createNumToToken(item2.id);
  const [hashSearch, setHashSearch] = useState("");
  const inputRef = useRef();
  const navigate = useNavigate();
  const handleSearch = (e) => {
    setHashSearch(e.target.innerText.trim().toLowerCase());
  };
  const handleSearchValue = () => {
    const search = inputRef.current.value;
    if (search === "") {
      toast.error("Please provide a search value.!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
      });
      return;
    }
    navigate(`/search/${search}`);
  };

  return (
    <>
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
          <div className="bg-[linear-gradient(45deg,rgba(0,0,0,1),rgba(0,0,0,0.5)),url('/bg.jpg')] w-full h-screen bg-cover bg-bottom flex items-center justify-center text-center px-20">
            <div className="text-white space-y-6">
              <h1
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-4xl md:text-6xl font-semibold"
              >
                BUY <span className="text-[#73C2FC] stroke-text">OR</span> SELL
                YOUR{" "}
                <span className="text-[#73C2FC] stroke-text">CONVENIENCE</span>
              </h1>
              <p data-aos="fade-up" data-aos-duration="1500">
                We give life to you home & property dreams at your budget
              </p>
              <div>
                <label className="relative">
                  <input
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    type="text"
                    placeholder="search"
                    ref={inputRef}
                    defaultValue={hashSearch}
                    className="border-4 border-transparent focus:border-4 focus:border-[#73C2FC] p-3 md:w-[50%]  outline-none text-black transition-all rounded-md"
                  />
                  <IoSearchOutline
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    onClick={handleSearchValue}
                    className="absolute text-[#73C2FC] -top-1 right-2 text-3xl font-bold cursor-pointer"
                  />
                </label>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <p data-aos="fade-up" data-aos-duration="2500">
                  Popular searches :{" "}
                </p>
                <p className="flex gap-3 items-center">
                  <a
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    onClick={(e) => handleSearch(e)}
                    className="bg-[#D2EDF8] py-1 px-2 text-hero-color rounded-sm hover:bg-hero-color hover:text-[#D2EDF8] cursor-pointer transition-all"
                  >
                    Rent
                  </a>
                  <a
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    onClick={(e) => handleSearch(e)}
                    className="bg-[#D2EDF8] py-1 px-2 text-hero-color rounded-sm hover:bg-hero-color hover:text-[#D2EDF8] cursor-pointer transition-all"
                  >
                    Sale
                  </a>
                  <a
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    onClick={(e) => handleSearch(e)}
                    className="bg-[#D2EDF8] py-1 px-2 text-hero-color rounded-sm hover:bg-hero-color hover:text-[#D2EDF8] cursor-pointer transition-all"
                  >
                    Apartment
                  </a>
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
                to={`/details/${token}`}
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
                to={`/details/${token2}`}
                className="btn border-2 border-[#00AEFF] hover:border-[#00AEFF] bg-[#00AEFF] text-white hover:bg-[#004274] hover:text-[#00AEFF] px-6 text-base"
              >
                View Property
              </NavLink>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <ToastContainer />
    </>
  );
};

Banner.propTypes = {
  data: PropTypes.array,
};
export default Banner;
