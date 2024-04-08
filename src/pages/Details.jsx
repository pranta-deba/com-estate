import { useParams } from "react-router-dom";
import { tokenToNum } from "../utils/createToken";
import useFetchData from "../hooks/useFetchData";
import { useEffect, useState } from "react";

const Details = () => {
  const [item, setItem] = useState({});
  const { data } = useFetchData();
  const { token } = useParams();
  const id = tokenToNum(token);
  useEffect(() => {
    const matchItem = data.find((item) => item.id === id);
    setItem(matchItem);
  }, [data, id]);
  const {
    id: item_id,
    estate_title,
    image_url,
    location,
    segment_name,
    price,
    status,
    area,
  } = item || {};
  return <div></div>;
};

export default Details;
