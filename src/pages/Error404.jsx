import { NavLink } from "react-router-dom";
import Lottie from "lottie-react";
import animateData from "../assets/error404.json";
import { Helmet } from "react-helmet-async";

const Error404 = () => {
  return (
    <section className="flex items-center h-full dark:bg-gray-50 dark:text-gray-800">
        <Helmet>
            <title>404</title>
        </Helmet>
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <div>
          <Lottie animationData={animateData} />
          </div>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldnt find this page.
          </p>
          <p className="mt-4 mb-8 dark:text-gray-600">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <NavLink
          to={-1}
            className="px-8 py-3 font-semibold animate__shakeX btn rounded dark:bg-violet-600 dark:text-gray-50 bg-hero-color text-white hover:bg-blue-300 hover:text-black"
          >
            Back to homepage
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Error404;
