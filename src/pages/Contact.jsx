import { FaSkype } from "react-icons/fa6";
import { MdLocationPin, MdMarkEmailRead } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

const Contact = () => {
  return (
    <div>
      <div className="bg-[linear-gradient(45deg,rgba(0,0,0,1),rgba(0,0,0,0.5)),url('/4.jpg')] bg-center bg-no-repeat bg-fixed">
        <div className="bg-hero-color bg-opacity-55 text-white py-4 md:py-20 text-center text-4xl font-medium md:font-semibold">
          Contact
        </div>
      </div>
      <div className="bg-[linear-gradient(45deg,rgba(0,0,0,1),rgba(0,0,0,0.5)),url('/4.jpg')] bg-center bg-no-repeat bg-fixed my-2 md:my-12">
        <div className="lg:px-32 px-2 py-12 flex flex-col-reverse md:flex-row justify-center items-center gap-12 bg-[#C7E7F7] bg-opacity-90">
          <div className="flex-1 w-full">
            <div className="bg-white px-8 py-12 flex flex-col gap-5">
              <label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full border-2 bg-[#D2EDF8] focus:border-[#73C2FC] p-3 outline-none text-black transition-all rounded-none"
                />
              </label>
              <label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full border-2 bg-[#D2EDF8] focus:border-[#73C2FC] p-3 outline-none text-black transition-all rounded-none"
                />
              </label>
              <label>
                <input
                  type="text"
                  name="number"
                  placeholder="Phone Number"
                  className="w-full border-2 bg-[#D2EDF8] focus:border-[#73C2FC] p-3 outline-none text-black transition-all rounded-none"
                />
              </label>
              <label>
                <textarea
                  placeholder="Message"
                  className="w-full border-2 bg-[#D2EDF8] focus:border-[#73C2FC] p-3 outline-none text-black transition-all rounded-none"
                ></textarea>
              </label>
              <div>
                <button className="bg-hero-color hover:bg-[#73C2FC] text-white px-12 py-3 uppercase text-md transition-all btn">
                  Send
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl font-bold text-hero-color">
              Get The Best Agent Contact You For A Best Deal
            </h1>
            <p className="font-light">
              Let us connect you with the perfect agent to secure the best deal
              tailored to your needs. Whether you are buying, selling, or
              seeking expert advice in the real estate market, our team is
              dedicated to providing exceptional service. Fill out the form
              below, and well swiftly match you with the ideal agent who will
              guide you through every step of your journey to success.
            </p>
            <div className="flex items-center gap-2">
              <p className="bg-hero-color p-2 rounded-full">
                <MdMarkEmailRead className="text-3xl text-white" />
              </p>
              <p className="flex flex-col">
                <span className="cursor-pointer font-semibold text-hero-color hover:underline">
                  estatecom@business.com
                </span>
                <span className="font-light">Mail us for any Queries</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p className="bg-hero-color p-2 rounded-full">
                <MdLocationPin className="text-3xl text-white" />
              </p>
              <p className="flex flex-col">
                <span className="cursor-pointer font-semibold text-hero-color uppercase hover:underline">
                  NO-1, C-BLOCK,Khulshi, Chittagong, bangladesh.
                </span>
                <span className="font-light">Mail us for any Queries</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p className="bg-hero-color p-2 rounded-full">
                <FaSkype className="text-3xl text-white" />
              </p>
              <p className="flex flex-col">
                <span className="cursor-pointer font-semibold text-hero-color hover:underline">
                  @comEstate
                </span>
                <span className="font-light">Chat with us anytime</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p className="bg-hero-color p-2 rounded-full">
                <IoCallOutline className="text-3xl text-white" />
              </p>
              <p className="flex flex-col">
                <span className="cursor-pointer font-semibold text-hero-color hover:underline">
                  + 880 182 9851 652
                </span>
                <span className="font-light">Call with us anytime</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[400px] overflow-hidden">
        <MapContainer
          center={[21.51, -49.114]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[21.51, -49.114]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Contact;
