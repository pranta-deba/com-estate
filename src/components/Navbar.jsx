import { NavLink } from "react-router-dom";

const Navbar = () => {
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
    <div className="navbar bg-base-100 fixed z-10">
      <div className="navbar-start gap-3 md:gap-0">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 gap-6 font-bold text-base rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <a className="flex uppercase items-center">
          <img src="/logo.png" alt="" className="hidden md:flex md:w-[150px]" />
          <span className="md:-ms-8 text-2xl font-bold text-hero-color">
            Estate-eagle
          </span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6 font-bold text-base">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end gap-2">

        <div className="dropdown dropdown-bottom dropdown-end hidden">
          <div tabIndex={0} role="button" className="m-1">
            <div className="avatar">
              <div title="name" className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
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
        
        <a className="btn border-2 border-hero-color hover:bg-hero-color hover:text-white px-6 font-bold text-base">
          Login
        </a>
      </div>
    </div>
  );
};

export default Navbar;
