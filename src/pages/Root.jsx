import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

const Root = () => {
  return (
    <div>
      <nav className="h-[64px] shadow-md ">
        <Navbar />
      </nav>
      <div className="min-h-[calc(100vh-477.6px)]">
        <Outlet />
      </div>
      <div className="mt-12">
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Root;
