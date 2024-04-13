import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/UseAuth";
import { useForm } from "react-hook-form";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";

const SignUp = () => {
  const { createUser } = useAuth();
  const [passwordToggle1, setPasswordToggle1] = useState(false);
  const [passwordToggle2, setPasswordToggle2] = useState(false);
  const [signUpLoader, setSignUpLoader] = useState(false);
  const navigate = useNavigate();
  const form = "/";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();


  const handleCreateUser = (a) => {
    setSignUpLoader(true);
    createUser(a.email, a.password)
      .then(() => {
        toast.success("Registration Successfully.", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        setTimeout(() => {
          reset();
          setSignUpLoader(false);
          navigate(form);
        }, 1000);
      })
      .catch((error) => {
        toast.error(error.message.split("/")[1].split(")")[0], {
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
        setSignUpLoader(false);
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
      <div>
        <div className="bg-[linear-gradient(45deg,rgba(0,0,0,1),rgba(0,0,0,0.5)),url('/4.jpg')] bg-center bg-no-repeat bg-fixed">
          <div className="bg-hero-color bg-opacity-55 text-white py-4 md:py-20 text-center text-4xl font-medium md:font-semibold">
            Sign Up
          </div>
        </div>
      </div>
      <div className="my-2 md:my-12 flex justify-center items-center lg:px-32 px-2">
        <div className="text-center w-full md:w-[70%] lg:w-[50%] space-y-5 bg-[#D2EDF8] p-4 md:p-16">
          <p className="px-6 text-sm text-center dark:text-gray-600 flex justify-center gap-1 flex-wrap">
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
                  minLength: {
                    value: 2,
                    message: "First name should be at least 3 characters.",
                  },
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
                  minLength: {
                    value: 2,
                    message: "Last name should be at least 3 characters.",
                  },
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
                  minLength: {
                    value: 6,
                    message: "Password should be at least 6 characters.",
                  },
                  maxLength: {
                    value: 12,
                    message: "The maximum password can be 12 characters",
                  },
                  pattern: /^(?=.*[a-z])(?=.*[A-Z].*[A-Z])(?=.*\d{2,}).{6,}$/i,
                })}
                placeholder="Password"
                className="w-full border-2 focus:border-[#73C2FC] p-3 outline-none text-black transition-all rounded-none"
              />
              {errors?.password?.type === "pattern" && (
                <p className="text-xs text-start text-red-500">
                  at least one uppercase letter, one lowercase letter, and one
                  number.
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
                      return "Password not match";
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
              {signUpLoader ? (
                <p className="flex justify-center">
                  <RingLoader size={28} color="#FFFFFF" />
                </p>
              ) : (
                "create"
              )}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default SignUp;
