import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { BsGithub } from "react-icons/bs";
import { FaGoogle, FaTwitter } from "react-icons/fa6";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [passwordToggle, setPasswordToggle] = useState(false);
  const handlePasswordToggle = () => {
    setPasswordToggle(!passwordToggle);
  };
  return (
    <>
      <Helmet>
        <title>Sign In</title>
        <link rel="shortcut icon" href="/log.png" type="image/x-icon" />
      </Helmet>
      <div className="mt-12  flex justify-center items-center lg:px-32 px-5">
        <div className="text-center w-full md:w-[70%] lg:w-[50%] space-y-5 bg-[#D2EDF8] p-4 md:p-16">
          <h1 className="text-3xl font-semibold capitalize">Sign In</h1>
          <form className="flex flex-col gap-4">
            <label>
              <input
                type="email"
                placeholder="Email"
                className="w-full border-2 focus:border-[#73C2FC] p-3 outline-none text-black transition-all rounded-none"
              />
            </label>
            <label className="relative">
              <input
                type={passwordToggle ? "text" : "password"}
                placeholder="Password"
                className="w-full border-2 focus:border-[#73C2FC] p-3 outline-none text-black transition-all rounded-none"
              />

              {passwordToggle ? (
                <IoEyeOff
                  onClick={handlePasswordToggle}
                  className="absolute text-hero-color top-4 md:top-[10px] right-3 text-lg md:text-3xl font-bold cursor-pointer"
                />
              ) : (
                <IoEye
                  onClick={handlePasswordToggle}
                  className="absolute text-hero-color top-4 md:top-[10px] right-3 text-lg md:text-3xl font-bold cursor-pointer"
                />
              )}
            </label>
            <p className="text-right text-xs md:text-sm font-medium hover:underline cursor-pointer">
              Forgot Your Password?
            </p>
            <button className="bg-hero-color w-full py-3 text-lg text-white uppercase hover:bg-[#73C2FC] transition-all">
              sign in
            </button>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-hero-color dark:bg-gray-300"></div>
            <p className="px-3 text-sm dark:text-gray-600">
              Sign in with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 bg-hero-color dark:bg-gray-300"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button className="p-3 rounded-sm text-xl">
              <FaGoogle />
            </button>
            <button className="p-3 rounded-sm text-xl">
              <FaTwitter />
            </button>
            <button className="p-3 rounded-sm text-xl">
              <BsGithub />
            </button>
          </div>
          <p className="px-6 text-sm text-center dark:text-gray-600">
            Don`t have an account yet?
            <NavLink
              to="/sign_up"
              className="hover:underline text-hero-color dark:text-violet-600"
            >
              {" "}
              Sign up
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
