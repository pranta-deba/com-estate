import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Featured from "../components/Featured";
import useFetchData from "../hooks/useFetchData";
const Home = () => {
  const { data } = useFetchData();
  return (
    <div className="h-screen">
      <div>
        <Banner data={data} />
      </div>
      <div>
        <Categories data={data}/>
      </div>
      <div>
        <Featured/>
      </div>
    </div>
  );
};

export default Home;
