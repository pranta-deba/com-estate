import { useEffect } from "react";
import { useState } from "react";

const useFetchData = () => {
  const [data, setData] = useState([]);
  const [loaderSpinner, setLoaderSpinner] = useState(false);

  useEffect(() => {
    const handleData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      setData(data);
      setLoaderSpinner(false);
    };
    setLoaderSpinner(true);
    handleData();
  }, []);
  return { data, loaderSpinner };
};

export default useFetchData;