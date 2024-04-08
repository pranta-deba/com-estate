import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdOutlineMenuOpen } from "react-icons/md";
// import { MdOutlineMenuOpen } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const closeNavbar = () => {
    setIsOpen(false);
  };

  const navItems = (
    <>
      <p>
        <NavLink>Home</NavLink>
      </p>
      <p>
        <NavLink>Properties</NavLink>
      </p>
      <p>
        <NavLink>About</NavLink>
      </p>
      <p>
        <NavLink>Contact</NavLink>
      </p>
    </>
  );
  return (
    <div className="navbar bg-[#004274] text-white fixed z-10 md:px-20">
      <div className="navbar-start items-center gap-3 md:gap-0">
        <div className="flex lg:hidden">
          <div className="z-50">
            <button className="text-white p-2 " onClick={toggleNavbar}>
              {isOpen ? <MdOutlineMenuOpen className="text-3xl"/> : <MdOutlineMenuOpen className="text-3xl"/>}
            </button>
            {isOpen && (
              <div className="fixed top-0 left-0 bg-[#004274] text-white w-40 h-screen z-40">
                <button
                  className="text-white absolute top-2 right-2"
                  onClick={closeNavbar}
                >
                  <IoClose className="text-3xl"/>
                </button>
                <ul className="flex flex-col items-center mt-12">{navItems}</ul>
              </div>
            )}
          </div>
        </div>
        <a className="flex uppercase items-center">
          <span className="text-2xl font-bold text-white">Estate-eagle</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6  text-base">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <div className="dropdown dropdown-bottom dropdown-end hidden">
          <div tabIndex={0} role="button" className="m-1">
            <div className="avatar">
              <div
                title="name"
                className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
              >
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>

        <a className="btn border-2 border-[#00AEFF] hover:border-[#00AEFF] bg-[#00AEFF] text-white hover:bg-[#004274] hover:text-[#00AEFF] px-6 text-base">
          Sign In
        </a>
      </div>
    </div>
  );
};

export default Navbar;
