import { FaUsersCog } from "react-icons/fa";
import "./ClientCard.css";
import { TbHomeStats, TbShoppingCartStar } from "react-icons/tb";
import { GrDocumentConfig } from "react-icons/gr";
import PropTypes from "prop-types";

const ClientCard = ({ item, icon }) => {
  let icons;
  if (icon === "APPROVED PLANS") {
    icons = <FaUsersCog className="text-7xl text-hero-color" />;
  } else if (icon === "VERIFIED AGENTS") {
    icons = <TbShoppingCartStar className="text-7xl text-hero-color" />;
  } else if (icon === "QUICK BUY") {
    icons = <TbShoppingCartStar className="text-7xl text-hero-color" />;
  } else if (icon === "EASY DOCUMENT") {
    icons = <TbHomeStats className="text-7xl text-hero-color" />;
  } else if (icon === "HUGE COLLECTION") {
    icons = <GrDocumentConfig className="text-7xl text-hero-color" />;
  }
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={item?.image}
            alt="Avatar"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="flip-card-back text-center">
          <p className="flex justify-center">{icons}</p>
          <h1 className="text-2xl font-semibold mb-4 text-hero-color">
            {item?.title}
          </h1>
          <p className="font-light">{item?.short_description}</p>
        </div>
      </div>
    </div>
  );
};
ClientCard.propTypes = {
  item: PropTypes.object,
  icon: PropTypes.string,
};
export default ClientCard;
