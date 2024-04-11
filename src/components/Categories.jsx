import { BiSolidBuildingHouse } from "react-icons/bi";
import { GiVikingLonghouse } from "react-icons/gi";
import { IoRestaurantSharp } from "react-icons/io5";
import { TbHomeStats } from "react-icons/tb";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const Categories = ({ data }) => {
  const [warehouse, setWarehouse] = useState(0);
  const [restaurant, setRestaurant] = useState(0);
  const [office, setOffice] = useState(0);
  const [entertainment, setEntertainment] = useState(0);
  useEffect(() => {
    const ware = data.filter((i) => i.segment_name === "Warehouse");
    const res = data.filter((i) => i.segment_name === "Restaurant");
    const offi = data.filter((i) => i.segment_name === "Office Space");
    const enter = data.filter((i) => i.segment_name === "Entertainment Venue");
    setWarehouse(ware.length);
    setRestaurant(res.length);
    setOffice(offi.length);
    setEntertainment(enter.length);
  }, [data]);

  return (
    <div className="my-12 md:px-32 flex flex-col-reverse md:flex-row gap-4">
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <p className="flex flex-col md:flex-row gap-2 text-hero-color items-center md:gap-7 text-center md:text-start">
          <TbHomeStats className="text-7xl" />
          <span className="text-2xl font-semibold flex flex-col">
            Warehouse{" "}
            <span className="text-black text-base">
              ( {warehouse} Properties )
            </span>
          </span>
        </p>
        <p className="flex flex-col md:flex-row gap-2 text-hero-color items-center md:gap-7 text-center md:text-start">
          <IoRestaurantSharp className="text-7xl" />
          <span className="text-2xl font-semibold flex flex-col">
            Restaurant{" "}
            <span className="text-black text-base">
              ( {restaurant} Properties )
            </span>
          </span>
        </p>
        <p className="flex flex-col md:flex-row gap-2 text-hero-color items-center md:gap-7 text-center md:text-start">
          <BiSolidBuildingHouse className="text-7xl" />
          <span className="text-2xl font-semibold flex flex-col">
            Office Space{" "}
            <span className="text-black text-base">
              ( {office} Properties )
            </span>
          </span>
        </p>
        <p className="flex flex-col md:flex-row gap-2 text-hero-color items-center md:gap-7 text-center md:text-start">
          <GiVikingLonghouse className="text-7xl" />
          <span className="text-2xl font-semibold flex flex-col">
            Entertainment Venue{" "}
            <span className="text-black text-base">
              ( {entertainment} Properties )
            </span>
          </span>
        </p>
      </div>
      <div className=" space-y-3 text-center md:text-start md:w-[350px]">
        <h1 className="text-2xl font-medium text-hero-color">
          GET ACCESS OVER
        </h1>
        <h1 className="text-4xl font-bold text-[#2FA5FB]">
          <span className="text-hero-color">
            <TypeAnimation
              sequence={["COM", 1000, "Estate", 2000, "COM"]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </span>{" "}
          PROPERTY
        </h1>
        <p>Get a Feature Rich Home</p>
        <hr />
        <h1 className="text-2xl font-medium text-hero-color">CONNECT OVER</h1>
        <h1 className="text-4xl font-bold text-[#2FA5FB]">
          <span className="text-hero-color">
            <TypeAnimation
              sequence={["Valid", 1000, "Expert", 2000, "Valid"]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </span>{" "}
          AGENTS
        </h1>
        <p>to Help You Get a Property</p>
      </div>
    </div>
  );
};
Categories.propTypes = {
  data: PropTypes.array,
};
export default Categories;
