import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/UseAuth";
import { useForm } from "react-hook-form";
import { ToastContainer,toast,Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const { createUser } = useAuth();
  const [passwordToggle1, setPasswordToggle1] = useState(false);
  const [passwordToggle2, setPasswordToggle2] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const handleCreateUser = (a) => {
    createUser(a.email, a.password)
      .then(() => {
        toast.success('Registration Successfully.', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const onSubmit = (data) => {
    handleCreateUser(data);
  };

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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <label>
              <input
                type="text"
                name="firstName"
                {...register("firstName", {
                  required: "input field is required",
                  minLength: { value: 2, message: "min length 3" },
                })}
                placeholder="First Name"
                className="w-full border-2 focus:border-[#73C2FC] p-3 outline-none text-black transition-all rounded-none"
              />
              <p className="text-xs text-start text-red-500">
                {errors.firstName?.message}
              </p>
            </label>
            <label>
              <input
                type="text"
                name="lastName"
                {...register("lastName", {
                  required: "input field is required",
                  minLength: { value: 2, message: "min length 3" },
                })}
                placeholder="Last Name"
                className="w-full border-2 focus:border-[#73C2FC] p-3 outline-none text-black transition-all rounded-none"
              />
              <p className="text-xs text-start text-red-500">
                {errors.lastName?.message}
              </p>
            </label>
            <label>
              <input
                type="email"
                name="email"
                {...register("email", {
                  required: "input field is required",
                  pattern: /^[A-Za-z0-9@.]+(?:\.[A-Za-z0-9]+)+$/,
                })}
                placeholder="Email"
                className="w-full border-2 focus:border-[#73C2FC] p-3 outline-none text-black transition-all rounded-none"
              />
              <p className="text-xs text-start text-red-500">
                {errors.email?.message}
              </p>
              {errors?.email?.type === "pattern" && (
                <p className="text-xs text-start text-red-500">
                  Invalid email format!
                </p>
              )}
            </label>
            <label>
              <input
                type="text"
                name="photoURL"
                {...register("photoURL", {
                  required: "input field is required",
                })}
                placeholder="Photo URL"
                className="w-full border-2 focus:border-[#73C2FC] p-3 outline-none text-black transition-all rounded-none"
              />
              <p className="text-xs text-start text-red-500">
                {errors.photoURL?.message}
              </p>
            </label>
            <label className="relative">
              <input
                type={passwordToggle1 ? "text" : "password"}
                name="password"
                {...register("password", {
                  required: "input field is required",
                  minLength: { value: 6, message: "min length 6" },
                  maxLength: { value: 12, message: "max length 12" },
                  pattern: /^(?=.*[a-z])(?=.*[A-Z].*[A-Z])(?=.*\d{2,}).{6,}$/i,
                })}
                placeholder="Password"
                className="w-full border-2 focus:border-[#73C2FC] p-3 outline-none text-black transition-all rounded-none"
              />
              {errors?.password?.type === "pattern" && (
                <p className="text-xs text-start text-red-500">
                  uppercase lowercase number
                </p>
              )}
              <p className="text-xs text-start text-red-500">
                {errors.password?.message}
              </p>
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
                {...register("confirmPassword", {
                  validate: (data) => {
                    if (watch("password") !== data) {
                      return "pass not match";
                    }
                  },
                })}
                placeholder="Confirm Password"
                className="w-full border-2 focus:border-[#73C2FC] p-3 outline-none text-black transition-all rounded-none"
              />
              <p className="text-xs text-start text-red-500">
                {errors.confirmPassword?.message}
              </p>
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
            <button
              type="submit"
              className="bg-hero-color w-full py-3 text-lg text-white uppercase hover:bg-[#73C2FC] transition-all"
            >
              create
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default SignUp;
