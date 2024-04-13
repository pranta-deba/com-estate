import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { BsGithub } from "react-icons/bs";
import { FaGoogle, FaTwitter } from "react-icons/fa6";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";
import useAuth from "../hooks/UseAuth";
import { useForm } from "react-hook-form";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RingLoader from "react-spinners/RingLoader";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const [passwordToggle, setPasswordToggle] = useState(false);
  const [loginLoader, setLoginLoader] = useState(false);
  const { logInUser, googleSignIn, githubSignIn } = useAuth();
  const navigate = useNavigate();
  const form = location.state || "/";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleSignIn = (a) => {
    setLoginLoader(true);
    logInUser(a.email, a.password)
      .then(() => {
        setTimeout(() => {
          reset();
          setLoginLoader(false);
          navigate(form);
        }, 2000);
      })
      .catch((error) => {
        toast.error(
          error.message.split("/")[1].split(")")[0] +
            ", please enter a valid email & password!",
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          }
        );
        setLoginLoader(false);
      });
  };
  const onSubmit = (data) => {
    handleSignIn(data);
  };
  const handlePasswordToggle = () => {
    setPasswordToggle(!passwordToggle);
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        navigate(form);
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
      });
  };
  const handleGithubSignIn = () => {
    githubSignIn()
      .then(() => {
        navigate(form);
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
      });
  };
  return (
    <>
      <Helmet>
        <title>Sign In</title>
        <link rel="shortcut icon" href="/log.png" type="image/x-icon" />
      </Helmet>
      <div>
        <div className="bg-[linear-gradient(45deg,rgba(0,0,0,1),rgba(0,0,0,0.5)),url('/4.jpg')] bg-center bg-no-repeat bg-fixed">
          <div className="bg-hero-color bg-opacity-55 text-white py-4 md:py-20 text-center text-4xl font-medium md:font-semibold">
            Sign In
          </div>
        </div>
      </div>
      <div className="my-2 md:my-12  flex flex-col justify-center items-center lg:px-32 px-2">
        <div className="text-center w-full md:w-[70%] lg:w-[50%] space-y-5 bg-[#D2EDF8] p-4 md:p-16">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
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
            <label className="relative">
              <input
                type={passwordToggle ? "text" : "password"}
                placeholder="Password"
                name="password"
                {...register("password", {
                  required: "input field is required",
                })}
                className="w-full border-2 focus:border-[#73C2FC] p-3 outline-none text-black transition-all rounded-none"
              />
              <p className="text-xs text-start text-red-500">
                {errors.password?.message}
              </p>

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
              {loginLoader ? (
                <p className="flex justify-center">
                  <RingLoader size={28} color="#FFFFFF" />
                </p>
              ) : (
                "Sign in"
              )}
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
            <button
              onClick={handleGoogleSignIn}
              className="p-3 rounded-sm text-xl"
            >
              <FaGoogle className="hover:scale-125 transition-all" />
            </button>
            <button
              onClick={handleGithubSignIn}
              className="p-3 rounded-sm text-xl"
            >
              <BsGithub className="hover:scale-125 transition-all" />
            </button>
            <button className="p-3 rounded-sm text-xl">
              <FaTwitter className="hover:scale-125 transition-all" />
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
      <ToastContainer />
    </>
  );
};

export default Login;
