import { FaSkype } from "react-icons/fa6";
import { MdLocationPin, MdMarkEmailRead } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Contact = () => {
  const position = [22.3613450334504, 91.81256696375297];
  return (
    <div>
      <div className="bg-[linear-gradient(45deg,rgba(0,0,0,1),rgba(0,0,0,0.5)),url('/4.jpg')] bg-center bg-no-repeat bg-fixed">
        <div className="bg-hero-color bg-opacity-55 text-white py-4 md:py-20 text-center text-4xl font-medium md:font-semibold">
          Contact
        </div>
      </div>
      <div className="bg-[linear-gradient(45deg,rgba(0,0,0,1),rgba(0,0,0,0.5)),url('/4.jpg')] bg-center bg-no-repeat bg-fixed">
        <div className="lg:px-32 px-2 py-12 flex flex-col-reverse md:flex-row justify-center items-center gap-12 bg-[#C7E7F7] bg-opacity-90">
          <div data-aos="flip-up" className="flex-1 w-full">
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
            <h1 data-aos="zoom-out" data-aos-duration="500" className="text-4xl text-center md:text-start font-bold text-hero-color">
              Get The Best Agent Contact You For A Best Deal
            </h1>
            <p data-aos="zoom-out" data-aos-duration="500" className="font-light text-center md:text-start ">
              Let us connect you with the perfect agent to secure the best deal
              tailored to your needs. Whether you are buying, selling, or
              seeking expert advice in the real estate market, our team is
              dedicated to providing exceptional service. Fill out the form
              below, and well swiftly match you with the ideal agent who will
              guide you through every step of your journey to success.
            </p>
            <div data-aos="fade-up" data-aos-duration="500" className="flex items-center gap-2 mx-3">
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
            <div data-aos="fade-up" data-aos-duration="1000" className="flex items-center gap-2 mx-3">
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
            <div data-aos="fade-up" data-aos-duration="1500" className="flex items-center gap-2 mx-3">
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
            <div data-aos="fade-up" data-aos-duration="2000" className="flex items-center gap-2 mx-3">
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
      <div data-aos="fade-up" className="w-full h-[500px] my-8 overflow-hidden">
        <MapContainer center={position} zoom={13}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              <span className="text-hero-color font-bold"> Head Office</span>{" "}
              <br /> <span>Khulshi, Chattogram</span>
            </Popup>
          </Marker>
        </MapContainer>
        ,
      </div>
      <div className="lg:px-32 px-2 mb-12">
        <div className="my-4 md:my-12">
          <h1 data-aos="fade-up" className="text-center text-4xl font-bold">
            <span className="text-hero-color">Other Locations</span>
          </h1>
        </div>
        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
          <div className="space-y-4 bg-[#D2EDF8] text-center p-8">
            <h1 className="text-2xl text-hero-color font-semibold">New York</h1>
            <p className="flex items-center gap-2 text-sm">
              <MdMarkEmailRead className="text-3xl text-hero-color" />
              Suite 100, Denver, CO 80022
            </p>
            <p className="flex items-center gap-2 text-sm">
              <MdLocationPin className="text-3xl text-hero-color" />
              Contact@example.com
            </p>
            <p className="flex items-center gap-2 text-sm">
              <IoCallOutline className="text-3xl text-hero-color" />
              0000- 123456789
            </p>
            <div className="max-h-[200px] object-cover overflow-hidden">
              <MapContainer
                center={[40.84158684951126, -74.08136146595784]}
                zoom={5}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[40.84158684951126, -74.08136146595784]}>
                  <Popup>
                    <span className="text-hero-color font-bold">
                      London Office
                    </span>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
          <div className="space-y-4 bg-[#E8F6FB] text-center p-8">
            <h1 className="text-2xl text-hero-color font-semibold">New Zealand</h1>
            <p className="flex items-center gap-2 text-sm">
              <MdMarkEmailRead className="text-3xl text-hero-color" />
              Calgary, AB T2N 3E2
            </p>
            <p className="flex items-center gap-2 text-sm">
              <MdLocationPin className="text-3xl text-hero-color" />
              info.newzealand@example.com
            </p>
            <p className="flex items-center gap-2 text-sm">
              <IoCallOutline className="text-3xl text-hero-color" />
              123 - 456789
            </p>
            <div className="max-h-[200px] object-cover overflow-hidden">
              <MapContainer
                center={[-42.77127220281838, 172.8491303962831]}
                zoom={5}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[-42.77127220281838, 172.8491303962831]}>
                  <Popup>
                    <span className="text-hero-color font-bold">
                    New Zealand Office
                    </span>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
          <div className="space-y-4 bg-[#D2EDF8] text-center p-8">
            <h1 className="text-2xl text-hero-color font-semibold">India</h1>
            <p className="flex items-center gap-2 text-sm">
              <MdMarkEmailRead className="text-3xl text-hero-color" />
              Mumbai, 80022
            </p>
            <p className="flex items-center gap-2 text-sm">
              <MdLocationPin className="text-3xl text-hero-color" />
              Contact@example.com
            </p>
            <p className="flex items-center gap-2 text-sm">
              <IoCallOutline className="text-3xl text-hero-color" />
              56879034
            </p>
            <div className="max-h-[200px] object-cover overflow-hidden">
              <MapContainer
                center={[19.097750734681075, 72.8976475907633]}
                zoom={5}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[19.097750734681075, 72.89764759076334]}>
                  <Popup>
                    <span className="text-hero-color font-bold">
                      Mumbai Office
                    </span>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
