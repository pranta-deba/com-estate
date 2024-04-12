import { FaLocationDot } from "react-icons/fa6";
import { ImCodepen } from "react-icons/im";
import { MdSegment } from "react-icons/md";
import { SiBlueprint } from "react-icons/si";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { createNumToToken } from "../utils/createToken";

const ItemCard = ({ item }) => {
  const {
    id,
    estate_title,
    image_url,
    location,
    segment_name,
    price,
    status,
    area,
  } = item || {};
  const discountPriceFind = parseInt(
    price.split(" ")[0].split("$")[1].split(",").join("")
  );
  const discount = 45;
  const token = createNumToToken(id);
  return (
    <div data-aos="fade-up" className="md:w-sm hover:shadow-sm hover:shadow-[#00AEFF] rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 border-2 cursor-pointer relative">
      {discountPriceFind > 50000 ? (
        <p className="absolute right-2 top-2 bg-[red] px-6 py-2 rounded-lg text-white font-medium">
          OFF {discount}%
        </p>
      ) : (
        ""
      )}
      <figure className="overflow-hidden">
        <img
          src={image_url}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500 hover:scale-110 transition-all"
        />
      </figure>
      <div className="flex justify-between p-4">
        <div className="flex-1 border-r-2 px-2 space-y-2">
          <h3 className="text-hero-color md:h-[60px] md:overflow-auto scrollBar text-xl font-semibold">
            {estate_title}
          </h3>
          <div className="flex items-baseline">
            <p className="text-[#00AEFF] text-2xl font-semibold">
              {price?.split(" ")[0]}{" "}
            </p>
            <p className="text-xs">{price?.split(" ")[1]}</p>
          </div>
        </div>
        <div className="flex-1 px-2 space-y-3">
          <p className="flex items-center gap-1">
            <SiBlueprint className="font-light text-slate-500" />
            {area}
          </p>
          <p className="flex items-center gap-1">
            <ImCodepen className="font-light text-slate-500" />
            {status}
          </p>
          <p className="flex items-center gap-1 md:h-[45px] md:overflow-auto scrollBar">
            <MdSegment className="font-light text-slate-500" />
            {segment_name}
          </p>
        </div>
      </div>
      <div>
        <p className="flex gap-1 items-center justify-center py-2">
          <FaLocationDot className="text-hero-color" /> {location}
        </p>
      </div>
      <div className="text-center w-full">
        <NavLink to={`/details/${token}`} className="w-full block border-y-2 border-[#0078B930] hover:bg-hero-color hover:text-white py-3 transition-all">
          VIEW DETAILS
        </NavLink>
      </div>
    </div>
  );
};
ItemCard.propTypes = {
  item: PropTypes.object,
};
export default ItemCard;
