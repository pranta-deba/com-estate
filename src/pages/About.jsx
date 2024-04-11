import { useEffect, useState } from "react";
import ClientCard from "../components/ClientCard";
import { useLoaderData } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";

const About = () => {
  const data = useLoaderData();
  const [aboutData, setAboutData] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    if (data) {
      setAboutData(data);
      setLoader(false);
    }
  }, [data]);
  return (
    <div className="flex flex-col gap-20">
      <div>
        <div className="bg-[linear-gradient(45deg,rgba(0,0,0,1),rgba(0,0,0,0.5)),url('/4.jpg')] bg-center bg-no-repeat bg-fixed">
          <div className="bg-hero-color bg-opacity-55 text-white py-4 md:py-20 text-center text-4xl font-medium md:font-semibold">
            About
          </div>
        </div>
        <div className="my-4 md:my-12">
          <h1 className="text-center text-4xl font-bold">
            <span className="text-hero-color">Verified</span>{" "}
            <span className="text-[#00AEFF]">Hassle-Free Home</span>
          </h1>
          <p className="max-w-[400px] mx-auto text-center font-light">
            We Bringing The Best Price Worthy Property Near You. Everything As
            You Desire.
          </p>
        </div>
        {!loader ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center lg:px-32 px-2">
            {aboutData.map((item) => (
              <ClientCard key={item.id} item={item} icon={item.title} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center py-10">
            <PropagateLoader color="#1E306E" />
          </div>
        )}
      </div>
      <div className="bg-[linear-gradient(45deg,rgba(0,0,0,1),rgba(0,0,0,0.5)),url('/4.jpg')] bg-center bg-no-repeat bg-fixed">
        <div className="bg-white bg-opacity-75 py-4">
          <div className="py-4 md:py-12">
            <h1 className="text-center text-4xl font-bold">
              <span className="text-hero-color">Recent</span>{" "}
              <span className="text-[#00AEFF]">FAQ&apos;S</span>
            </h1>
            <p className="max-w-[400px] mx-auto text-center font-light">
              Get Your Questions Answered
            </p>
          </div>
          <div className="flex justify-center flex-col md:flex-row items-center gap-8 lg:px-32 px-2">
            <div className="flex-1">
              <img
                src="https://i.ibb.co/hsWk2Rm/commercial-real-estate-agent-better-career-compressor.jpg"
                alt=""
                className="border-hero"
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <div className="collapse collapse-arrow  rounded-none border-b border-b-hero-color">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium text-hero-color">
                What is the procedure to sell house?
                </div>
                <div className="collapse-content">
                  <p className="font-light">Before listing the property, its essential to prepare it for sale. This includes cleaning, decluttering, and possibly making any necessary repairs or improvements to enhance its appeal to potential buyers.</p>
                </div>
              </div>
              <div className="collapse collapse-arrow rounded-none border-b border-b-hero-color">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium text-hero-color">
                What is your sales commission?
                </div>
                <div className="collapse-content">
                  <p className="font-light">Our sales commission varies depending on the specifics of the property and the services required. We offer competitive rates tailored to meet our clients needs. Contact us for a personalized quote.</p>
                </div>
              </div>
              <div className="collapse collapse-arrow rounded-none border-b border-b-hero-color">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium text-hero-color">
                How will i get my amount?
                </div>
                <div className="collapse-content">
                  <p className="font-light">Upon successful completion of the sale, your proceeds will typically be disbursed through a secure method such as a cashiers check or wire transfer. We`ll work closely with you to ensure a smooth and timely transaction.</p>
                </div>
              </div>
              <div className="collapse collapse-arrow rounded-none border-b border-b-hero-color">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium text-hero-color">
                What is the first step in buying a house?
                </div>
                <div className="collapse-content">
                  <p className="font-light">The first step in buying a house is typically to assess your financial situation and determine your budget. You may want to get pre-approved for a mortgage to understand how much you can afford to spend. Additionally, consider your preferences and priorities for a home, such as location, size, and amenities. Once you have a clear idea of your requirements and budget, you can start searching for properties and engaging with real estate professionals to assist you in the process.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
