import { FaRegUserCircle } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineAttachEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="bg-hero-color text-white hidden md:flex items-center justify-between py-4 px-20">
      <div className="flex items-center gap-6">
        <p className="flex items-center gap-3">
          <MdOutlineAttachEmail className="text-2xl hover:scale-125 transition-all" />
          <a href="mailto:someone@example.com">info@example.com</a>
        </p>
        <p className="flex items-center gap-3">
          <FaMapLocationDot className="text-2xl hover:scale-125 transition-all" />
          No: 58 A, East Madison Street, Baltimore, MD, USA 4508
        </p>
      </div>
      <div>
        <NavLink className="flex items-center gap-2">
          <FaRegUserCircle className="text-2xl" />
          Join Now
        </NavLink>
      </div>
    </div>
  );
};

export default TopNav;
