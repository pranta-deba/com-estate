import { useForm } from "react-hook-form";
import useAuth from "../hooks/UseAuth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase.config";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import RingLoader from "react-spinners/RingLoader";

const UpdateProfile = () => {
  const { user, setUser, updateUserProfile, setProfilePic, setProfileName } =
    useAuth();
  const [updateLoader, setUpdateLoader] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: user.displayName ? user.displayName.split(" ")[0] : "",
      lastName: user.displayName ? user.displayName.split(" ")[1] : "",
      email: user.email ? user.email : "",
      photoURL: user.photoURL ? user.photoURL : "",
    },
  });

  const handleUpdateUser = (a) => {
    setUpdateLoader(true);
    const displayName = a.firstName + " " + a.lastName;
    const photoURL = a.photoURL;
    updateUserProfile({ displayName, photoURL })
      .then(() => {
        onAuthStateChanged(auth, (currentUser) => {
          setUser(null);
          if (currentUser) {
            toast.success("Profile Update Successfully.", {
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
            setUser(currentUser);
            setProfilePic(currentUser.photoURL);
            setProfileName(currentUser.displayName);
            setUpdateLoader(false);
          } else {
            setUser(null);
            setUpdateLoader(false);
          }
        });
      })
      .catch((error) => {
        console.log(error);
        setUpdateLoader(false);
      });
  };
  const onSubmit = (data) => {
    handleUpdateUser(data);
  };
  return (
    <>
      <div className="bg-[linear-gradient(45deg,rgba(0,0,0,1),rgba(0,0,0,0.5)),url('/4.jpg')] bg-center bg-no-repeat bg-fixed">
        <h1 className="bg-hero-color bg-opacity-55 text-white py-4 md:py-20 text-center text-4xl font-medium md:font-semibold">
          Profile
        </h1>
      </div>
      <div className="my-12 lg:px-32 px-2 flex flex-col md:flex-row gap-6 justify-center">
        <div
          data-aos="fade-up"
          className="flex-1 flex flex-col justify-center  border md:max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800"
        >
          <img
            src={user?.photoURL || "/log.png"}
            alt=""
            className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
          />
          <div className="space-y-4 text-center  dark:divide-gray-300">
            <div className="my-2 space-y-1 text-center">
              <h2 className="text-xl font-semibold sm:text-2xl">
                {user?.displayName || "unknown"}
              </h2>
              <p className="text-xs sm:text-base dark:text-gray-600">
                {user.email ? user.email : "unknown"}
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="flex-1">
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

            <button
              type="submit"
              className="bg-hero-color w-full py-3 text-lg text-white uppercase hover:bg-[#73C2FC] transition-all"
            >
              {updateLoader ? (
                <p className="flex justify-center">
                  <RingLoader size={28} color="#FFFFFF" />
                </p>
              ) : (
                "Update"
              )}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default UpdateProfile;
