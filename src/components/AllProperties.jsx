import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import ItemCard from "./ItemCard";

const AllProperties = ({ data }) => {
  const [allData, setAllData] = useState([]);
  const [seeAllToggle, setSeeAllToggle] = useState(true);
  const allRef = useRef(null);
  const rentRef = useRef(null);
  const saleRef = useRef(null);
  const discountRef = useRef(null);
  useEffect(() => {
    setAllData(data.slice(0, 6));
    allRef.current.checked = true;
    setSeeAllToggle(true);
  }, [data]);

  const handleFilter = (e) => {
    if (e.target.value === "all") {
      e.target.checked = true;
      rentRef.current.checked = false;
      saleRef.current.checked = false;
      discountRef.current.checked = false;
      setAllData(data.slice(0, 6));
      setSeeAllToggle(true);
    } else if (e.target.value === "rent") {
      e.target.checked = true;
      allRef.current.checked = false;
      saleRef.current.checked = false;
      discountRef.current.checked = false;
      const rentData = data.filter((item) => item.status === "rent");
      setAllData(rentData);
      setSeeAllToggle(false);
    } else if (e.target.value === "sale") {
      e.target.checked = true;
      allRef.current.checked = false;
      rentRef.current.checked = false;
      discountRef.current.checked = false;
      const saleData = data.filter((item) => item.status === "sale");
      setAllData(saleData);
      setSeeAllToggle(false);
    } else if (e.target.value === "discount") {
      e.target.checked = true;
      allRef.current.checked = false;
      rentRef.current.checked = false;
      saleRef.current.checked = false;
      const discountData = data.filter(
        (item) =>
          parseInt(item.price.split(" ")[0].split("$")[1].split(",").join("")) >
          50000
      );
      setAllData(discountData);
      setSeeAllToggle(false);
    }
  };

  return (
    <div className="lg:px-32 mt-10 md:mt-24 px-5">
      <div className="text-center space-y-3 mb-6">
        <h1 className="text-4xl md:text-5xl font-medium text-hero-color uppercase">
          BEST PROPERTIES
        </h1>
        <p className="max-w-[600px] mx-auto text-sm md:text-base font-light">
          Welcome to our Best Properties section, where we showcase the most
          outstanding commercial real estate opportunities tailored to meet your
          business needs.
        </p>
      </div>
      <div className="my-8 flex justify-center gap-6">
        <div className="">
          <label className="flex items-center gap-3">
            <input
              ref={allRef}
              onChange={handleFilter}
              type="checkbox"
              value="all"
              className="checkbox checkbox-primary"
            />
            <span className="label-text font-medium">All</span>
          </label>
        </div>
        <div className="">
          <label className="flex items-center gap-3">
            <input
              onChange={handleFilter}
              ref={rentRef}
              value="rent"
              type="checkbox"
              className="checkbox checkbox-primary"
            />
            <span className="label-text font-medium">Rent</span>
          </label>
        </div>
        <div className="">
          <label className="flex items-center gap-3">
            <input
              onChange={handleFilter}
              ref={saleRef}
              value="sale"
              type="checkbox"
              className="checkbox checkbox-primary"
            />
            <span className="label-text font-medium">Sale</span>
          </label>
        </div>
        <div className="">
          <label className="flex items-center gap-3">
            <input
              onChange={handleFilter}
              ref={discountRef}
              value="discount"
              type="checkbox"
              className="checkbox checkbox-primary"
            />
            <span className="label-text font-medium">Offer</span>
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
        {allData.map((item, index) => (
          <ItemCard key={index} item={item} />
        ))}
      </div>
      {seeAllToggle && (
        <div className="text-center my-7">
          <button
            onClick={() => {
              setAllData(data.slice(0, data.length));
              setSeeAllToggle(false);
            }}
            className="btn bg-[#00AEFF] text-white hover:bg-hero-color transition-all rounded-md px-8"
          >
            See All
          </button>
        </div>
      )}
    </div>
  );
};
AllProperties.propTypes = {
  data: PropTypes.array,
};
export default AllProperties;
