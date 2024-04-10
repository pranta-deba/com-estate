import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { NavLink } from "react-router-dom";
const SignUp = () => {
  const [passwordToggle1, setPasswordToggle1] = useState(false);
  const [passwordToggle2, setPasswordToggle2] = useState(false);
  const handlePasswordToggle = (who) => {
    if (who === 1) {
      setPasswordToggle1(!passwordToggle1);
    } else if (who === 2) {
      setPasswordToggle2(!passwordToggle2);
    }
  };
  return (
    <>
      <Helmet>
        <title>Sign Up</title>
        <link rel="shortcut icon" href="/log.png" type="image/x-icon" />
      </Helmet>
      <div className="mt-12 flex justify-center items-center lg:px-32 px-5">
        <div className="text-center w-full md:w-[70%] lg:w-[50%] space-y-5 bg-[#D2EDF8] p-4 md:p-16">
          <h1 className="text-3xl font-semibold capitalize">Sign Up</h1>
          <p className="px-6 text-sm text-center dark:text-gray-600">
            Already have an account?
            <NavLink
              to="/sign_in"
              className="hover:underline text-hero-color dark:text-violet-600"
            >
              {" "}
              Sign In
            </NavLink>
          </p>
          <form className="flex flex-col gap-4">
            <label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-full border-2 focus:border-[#73C2FC] p-3 outline-none text-black transition-all rounded-none"
              />
            </label>
            <label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-full border-2 focus:border-[#73C2FC] p-3 outline-none text-black transition-all rounded-none"
              />
            </label>
            <label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full border-2 focus:border-[#73C2FC] p-3 outline-none text-black transition-all rounded-none"
              />
            </label>
            <label>
              <input
                type="text"
                name="photoURL"
                placeholder="Photo URL"
                className="w-full border-2 focus:border-[#73C2FC] p-3 outline-none text-black transition-all rounded-none"
              />
            </label>
            <label className="relative">
              <input
                type={passwordToggle1 ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="w-full border-2 focus:border-[#73C2FC] p-3 outline-none text-black transition-all rounded-none"
              />

              {passwordToggle1 ? (
                <IoEyeOff
                  onClick={() => handlePasswordToggle(1)}
                  className="absolute text-hero-color top-4 md:top-[10px] right-3 text-lg md:text-3xl font-bold cursor-pointer"
                />
              ) : (
                <IoEye
                  onClick={() => handlePasswordToggle(1)}
                  className="absolute text-hero-color top-4 md:top-[10px] right-3 text-lg md:text-3xl font-bold cursor-pointer"
                />
              )}
            </label>
            <label className="relative">
              <input
                type={passwordToggle2 ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                className="w-full border-2 focus:border-[#73C2FC] p-3 outline-none text-black transition-all rounded-none"
              />

              {passwordToggle2 ? (
                <IoEyeOff
                  onClick={() => handlePasswordToggle(2)}
                  className="absolute text-hero-color top-4 md:top-[10px] right-3 text-lg md:text-3xl font-bold cursor-pointer"
                />
              ) : (
                <IoEye
                  onClick={() => handlePasswordToggle(2)}
                  className="absolute text-hero-color top-4 md:top-[10px] right-3 text-lg md:text-3xl font-bold cursor-pointer"
                />
              )}
            </label>
            <button className="bg-hero-color w-full py-3 text-lg text-white uppercase hover:bg-[#73C2FC] transition-all">
              create
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
