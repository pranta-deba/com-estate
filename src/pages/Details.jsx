import { useParams } from "react-router-dom";
import { tokenToNum } from "../utils/createToken";
import useFetchData from "../hooks/useFetchData";
import { useEffect, useState } from "react";
import { SiBlueprint } from "react-icons/si";
import { ImCodepen } from "react-icons/im";
import { MdSegment } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Details = () => {
  const [item, setItem] = useState({});
  const [showing, setShowing] = useState("");
  const { data } = useFetchData();
  const { token } = useParams();
  const id = tokenToNum(token);
  useEffect(() => {
    const matchItem = data.find((item) => item.id === id);
    setItem(matchItem);
  }, [data, id]);

  const {
    estate_title,
    image_url,
    image_url2,
    image_url3,
    image_url4,
    location,
    segment_name,
    description,
    price,
    status,
    area,
    facilities,
  } = item || {};
  const handleImageSHow = (image) => {
    setShowing(image);
  };
  return (
    <>
      <Helmet>
        <title>{estate_title}</title>
        <link rel="shortcut icon" href={image_url} type="image/x-icon" />
      </Helmet>
      <div className="flex flex-col-reverse lg:flex-row justify-center md:gap-4 lg:px-32 my-4 md:my-12 px-5">
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-semibold text-hero-color">
            {estate_title}
          </h1>
          <div className="flex items-baseline">
            <p className="text-[#00AEFF] text-2xl font-semibold">
              {price?.split(" ")[0]}{" "}
            </p>
            <p className="text-xs">{price?.split(" ")[1]}</p>
          </div>
          <div className="rating rating-sm">
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <p className="text-[#929292] w-[70%]">{description}</p>
          <div>
            <h3 className="text-lg font-semibold text-hero-color">
              Facilities
            </h3>
            <div className="flex gap-4 flex-wrap py-3">
              {facilities?.map((fec, idx) => (
                <p key={idx} className="text-[#929292]">
                  | {fec} |
                </p>
              ))}
            </div>
          </div>
          <div className="border-2 border-[#D2EDF8]">
            <div className="bg-[#D2EDF8] border-2 border-[#D2EDF8] p-2 md:p-6 m-[1px]">
              <div className="flex  flex-col gap-3 flex-wrap">
                <p className="flex items-center gap-1">
                  <SiBlueprint className="font-light text-slate-500" />
                  <span className="text-hero-color font-semibold">Area :</span>
                  {area}
                </p>
                <p className="flex items-center gap-1">
                  <ImCodepen className="text-hero-color font-semibold" />
                  <span className="text-hero-color font-semibold">
                    Status :
                  </span>{" "}
                  {status}
                </p>
                <p className="flex items-center gap-1">
                  <MdSegment className="text-hero-color font-semibold" />
                  <span className="text-hero-color font-semibold">
                    Segment name :
                  </span>{" "}
                  {segment_name}
                </p>
              </div>

              <div className="flex justify-between items-center">
                <p className="flex gap-1 items-center py-2">
                  <FaLocationDot className="text-hero-color font-semibold" />{" "}
                  {location}
                </p>
                <p className="flex gap-1 items-center py-2 cursor-pointer">
                  <FaShareAlt className="text-hero-color font-semibold" /> Share
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <figure className="h-[380px] overflow-hidden">
            <img
              src={showing || image_url}
              alt=""
              className="h-full w-full object-cover"
            />
          </figure>
          <div className="grid grid-cols-4 gap-2 mt-3">
            <figure
              onClick={() => handleImageSHow(image_url)}
              className={
                showing === image_url
                  ? "h-[100px] overflow-hidden cursor-pointer border-2 border-hero-color rounded-lg"
                  : "h-[100px] overflow-hidden cursor-pointer border-2"
              }
            >
              <img
                src={image_url}
                alt=""
                className="h-full w-full object-cover"
              />
            </figure>
            <figure
              onClick={() => handleImageSHow(image_url2)}
              className={
                showing === image_url2
                  ? "h-[100px] overflow-hidden cursor-pointer border-2 border-hero-color rounded-lg"
                  : "h-[100px] overflow-hidden cursor-pointer border-2"
              }
            >
              <img
                src={image_url2}
                alt=""
                className="h-full w-full object-cover"
              />
            </figure>
            <figure
              onClick={() => handleImageSHow(image_url3)}
              className={
                showing === image_url3
                  ? "h-[100px] overflow-hidden cursor-pointer border-2 border-hero-color rounded-lg"
                  : "h-[100px] overflow-hidden cursor-pointer border-2"
              }
            >
              <img
                src={image_url3}
                alt=""
                className="h-full w-full object-cover"
              />
            </figure>
            <figure
              onClick={() => handleImageSHow(image_url4)}
              className={
                showing === image_url4
                  ? "h-[100px] overflow-hidden cursor-pointer border-2 border-hero-color rounded-lg"
                  : "h-[100px] overflow-hidden cursor-pointer border-2"
              }
            >
              <img
                src={image_url4}
                alt=""
                className="h-full w-full object-cover"
              />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
