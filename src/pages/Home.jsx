import AllProperties from "../components/AllProperties";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Featured from "../components/Featured";
import useFetchData from "../hooks/useFetchData";
const Home = () => {
  const { data } = useFetchData();
  return (
    <div className="min-h-screen">
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
