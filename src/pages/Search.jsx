import { NavLink, useParams } from "react-router-dom";
import Lottie from "lottie-react";
import animateData from "../assets/search.json";
import animateData2 from "../assets/loading.json";
import { useEffect, useState } from "react";
import useFetchData from "../hooks/useFetchData";
import ItemCard from "../components/ItemCard";
import { Helmet } from "react-helmet-async";

const Search = () => {
  const { value } = useParams();
  const { data } = useFetchData();
  const [searchData, setSearchData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (value === "apartment") {
      const findData = data.filter(
        (item) => item.segment_name.toLowerCase() === value
      );
      setTimeout(() => {
        setSearchData(findData);
        setLoader(false);
      }, 2000);
    } else {
      setLoader(true);
      const findData = data.filter((item) => item.status === value);
      setTimeout(() => {
        setSearchData(findData);
        setLoader(false);
      }, 2000);
    }
  }, [data, value]);

  return (
    <>
      <Helmet>
        <title>COM.Estate || Search</title>
        <link rel="shortcut icon" href="/fav.png" type="image/x-icon" />
      </Helmet>
      <div className="bg-[linear-gradient(45deg,rgba(0,0,0,1),rgba(0,0,0,0.5)),url('/4.jpg')] bg-center bg-no-repeat bg-fixed">
        <div className="bg-hero-color bg-opacity-55 text-white capitalize py-4 md:py-20 text-center text-4xl font-medium md:font-semibold">
          {value}
        </div>
      </div>

      {loader ? (
        <div className="min-h-screen">
          <div className="max-w-[300px] mx-auto">
            <Lottie animationData={animateData2} />
          </div>
        </div>
      ) : (
        <div className="lg:px-32 mt-4 md:mt-8 px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center mb-12">
          {searchData.map((item, index) => (
            <ItemCard key={index} item={item} />
          ))}
        </div>
      )}

      {searchData.length < 1 && !loader ? (
        <div className="flex flex-col justify-center items-center py-3 md:py-12">
          <div className="text-center">
            <h1 className="mb-4 text-6xl font-semibold text-hero-color">
              Oops!
            </h1>
            <p className="mb-4 text-lg text-gray-600">
              <span className="capitalize">{value}</span> Not Found
            </p>
            <div className="max-w-[300px]">
              <Lottie animationData={animateData} />
            </div>
            <p className="mt-4 text-gray-600">
              Lets get you back{" "}
              <NavLink to={-1} className="text-blue-500">
                home
              </NavLink>
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Search;
