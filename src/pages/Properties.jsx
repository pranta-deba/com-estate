import { useEffect, useState } from "react";
import useFetchData from "../hooks/useFetchData";
import PropagateLoader from "react-spinners/PropagateLoader";
import ItemCard from "../components/ItemCard";
import { Helmet } from "react-helmet-async";

const Properties = () => {
  const { data, loaderSpinner } = useFetchData();
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    setAllData(data);
  }, [data]);

  if (loaderSpinner) {
    return (
      <div className="flex justify-center py-10 min-h-screen">
        <PropagateLoader color="#1E306E" />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>COM.Estate || Properties</title>
        <link rel="shortcut icon" href="/fav.png" type="image/x-icon" />
      </Helmet>
      <div className="bg-[linear-gradient(45deg,rgba(0,0,0,1),rgba(0,0,0,0.5)),url('/4.jpg')] bg-center bg-no-repeat bg-fixed">
        <div className="lg:px-32 px-2  bg-hero-color bg-opacity-55 text-white py-4 md:py-20 text-center text-4xl font-medium md:font-semibold">
          All Properties
        </div>
      </div>
      <div className="lg:px-32 mt-4 md:mt-8 px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center mb-12">
        {allData.map((item, index) => (
          <ItemCard key={index} item={item} />
        ))}
      </div>
    </>
  );
};

export default Properties;
