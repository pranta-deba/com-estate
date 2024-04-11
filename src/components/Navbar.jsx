import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdOutlineMenuOpen } from "react-icons/md";
// import { MdOutlineMenuOpen } from "react-icons/md";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/UseAuth";

const Navbar = () => {
  const { user, logOut,profilePic,profileName } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const closeNavbar = () => {
    setIsOpen(false);
  };
  const handleLogOut = () => {
    logOut()
      .then(() => {
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navItems = (
    <>
      <p>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive
              ? "border-b-2 border-b-white"
              : isPending
              ? ""
              : "border-b-2 border-b-transparent"
          }
        >
          Home
        </NavLink>
      </p>
      <p>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "border-b-2 border-b-white"
              : isPending
              ? ""
              : "border-b-2 border-b-transparent"
          }
        >
          Properties
        </NavLink>
      </p>
      <p>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "border-b-2 border-b-white"
              : isPending
              ? ""
              : "border-b-2 border-b-transparent"
          }
        >
          About
        </NavLink>
      </p>
      <p>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "border-b-2 border-b-white"
              : isPending
              ? ""
              : "border-b-2 border-b-transparent"
          }
        >
          Contact
        </NavLink>
      </p>
    </>
  );
  return (
    <div className="navbar bg-[#004274] text-white fixed z-10 md:px-20">
      <div className="navbar-start items-center md:gap-0">
        <div className="flex lg:hidden">
          <div className="z-50">
            <button className="text-white p-2 " onClick={toggleNavbar}>
              {isOpen ? (
                <MdOutlineMenuOpen className="text-3xl" />
              ) : (
                <MdOutlineMenuOpen className="text-3xl" />
              )}
            </button>
            {isOpen && (
              <div className="fixed top-0 left-0 bg-[#004274] text-white w-40 h-screen z-40">
                <button
                  className="text-white absolute top-2 right-2"
                  onClick={closeNavbar}
                >
                  <IoClose className="text-3xl" />
                </button>
                <ul className="flex flex-col items-center mt-12">{navItems}</ul>
              </div>
            )}
          </div>
        </div>
        <NavLink to="/" className="flex uppercase items-center overflow-hidden">
          <img src="/logo.png" alt="loading......." className="md:w-[210px]" />
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6  text-base">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        {user ? (
          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="m-1">
              <div className="avatar">
                <div
                  title={profileName || "Name not found!"}
                  className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                >
                  <img src={profilePic || "/log.png"} />
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow rounded-box bg-hero-color w-52"
            >
              <p className="btn bg-transparent border-none text-white hover:text-black">
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "border-b-2 border-b-white"
                      : isPending
                      ? ""
                      : "border-b-2 border-b-transparent"
                  }
                  to="update_profile"
                >
                  Update Profile
                </NavLink>
              </p>
              <p className="btn bg-transparent border-none text-white hover:text-black" onClick={handleLogOut}>
                <a>Sign Out</a>
              </p>
            </ul>
          </div>
        ) : (
          <NavLink
            to="/sign_in"
            className={({ isActive, isPending }) =>
              isActive
                ? "btn border-2 border-[#00AEFF] hover:border-[#00AEFF] bg-transparent hover:bg-[#004274] text-[#00AEFF] px-6 text-base"
                : isPending
                ? ""
                : "btn border-2 border-[#00AEFF] hover:border-[#00AEFF] bg-[#00AEFF] text-white hover:bg-[#004274] hover:text-[#00AEFF] px-6 text-base"
            }
          >
            Sign In
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
