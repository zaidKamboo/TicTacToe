import React, { useState, useEffect, useContext } from "react";
import LoadingContext from "../Context/LoadingContext";
import InfiniteScroll from "react-infinite-scroll-component";
import GetAllMessage from "../Components/GetAllMessage";

const GetAllMessages = () => {
  const lc = useContext(LoadingContext);
  const { setLoading } = lc;
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const getDetails = async () => {
    const response = await fetch(
      `http://localhost:5000/contactUs/getMessages?page=${page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let rdata = await response.json();
    console.log(data);
    setTotalResults(data.totalResults);
    setData(data.concat(rdata.data));
    setPage(page + 1);
    console.log(totalResults);
  };
  useEffect(() => {
    return () => {
      setLoading(true);
      getDetails();
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    };
    // eslint-disable-next-line;
  }, []);

  return (
    <div className="playedGameDetsContainer">
      <InfiniteScroll
        dataLength={data.length}
        next={getDetails}
        hasMore={data.length !== totalResults}
      ></InfiniteScroll>
      <div className="playedGameDetContainer">
        {data.map((data) => (
          <GetAllMessage key={data._id} contactDet={data} />
        ))}
      </div>
    </div>
  );
};

export default GetAllMessages;
