import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import useAuth from "../hooks/UseAuth";
import Footer from "../components/Footer";
import PropagateLoader from "react-spinners/PropagateLoader";

const Root = () => {
  const { user,userExitsLoader } = useAuth();
  if (userExitsLoader && !user) {
    return (
      <div className="flex justify-center py-10">
        <PropagateLoader color="#1E306E" />
      </div>
    );
  }
  return (
    <div>
      <nav className="h-[64px] shadow-md ">
        <Navbar />
      </nav>
      <div className="min-h-[calc(100vh-477.6px)]">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Root;
