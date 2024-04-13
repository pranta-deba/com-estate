import { Helmet } from "react-helmet-async";
import AllProperties from "../components/AllProperties";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Featured from "../components/Featured";
import useFetchData from "../hooks/useFetchData";
const Home = () => {
  const { data } = useFetchData();
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>COM.Estate || Home</title>
        <link rel="shortcut icon" href="/fav.png" type="image/x-icon" />
      </Helmet>
      <div>
        <Banner data={data} />
      </div>
      <div>
        <Categories data={data}/>
      </div>
      <div>
        <Featured data={data}/>
      </div>
      <div>
        <AllProperties data={data}/>
      </div>
    </div>
  );
};

export default Home;
